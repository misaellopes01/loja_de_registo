import { Download } from "phosphor-react";
import { isPast, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import jsPDF from 'jspdf';
import QRCode from 'qrcode';
import { Span } from "../../pages/Client/Result/styles";
import { CardContainer } from "./styles";
import { translateState } from "../ScheduleAdminCard";

export interface ScheduleProps {
  schedule: {
    id: string,
    scheduling_state: string,
    scheduling_date: Date,
    bi_situation: string,
    bi_gv_system_situation: string,
    created_at: Date,
    citizen: {
      id: string,
      bi: string,
      name: string,
      phone: number
    }
  }
}

enum StateBI {
  EXPIRED = 'EXPIRED',
  BAD_CONSERVATION = 'BAD_CONSERVATION',
  ENDORSEMENT = 'ENDORSEMENT',
  LOSS = 'LOSS',
  STEALING = 'STEALING',
  NEW = 'NEW',
}

export function ScheduleCard({ schedule }: ScheduleProps) {
  function translateSituation(bi_situation: string){
    switch (bi_situation) {
      case StateBI.EXPIRED:
        return 'Expirado'
      case StateBI.BAD_CONSERVATION:
        return 'Má Conservação'
      case StateBI.ENDORSEMENT:
        return 'Averbamento'
      case StateBI.LOSS:
        return 'Perdido'
      case StateBI.STEALING:
        return 'Roubado'
      case StateBI.NEW:
        return 'Novo'
      default:
        break;
    }
  }

  const generatePdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.setTextColor('#000');
    doc.text('COMPROVATIVO DE AGENDAMENTO', 50, 20);
    // Adding schedule details
    doc.setFontSize(12);
    doc.setTextColor('#121214');
    doc.text('Bilhete de Identidade:', 20, 130);
    doc.text('Estado do agendamento:', 20, 50);
    doc.text('Data para atendimento:', 20, 60);
    doc.text('Situação do BI:', 20, 70);
    doc.text('Situação do BI no Sistema Nacional:', 20, 80);
    doc.setTextColor('#333');
    doc.setFontSize(12);
    doc.text(schedule.citizen.bi ?? 'Novo BI', 120, 130);
    doc.text(translateState(schedule.scheduling_state)!.toString(), 120, 50);
    doc.text(String(format(new Date(schedule.scheduling_date), "d ' / ' MMMM ' / ' yyyy", {
      locale: ptBR
  }).toLocaleUpperCase()), 120, 60);
    doc.text(translateSituation(schedule.bi_situation)!.toString(), 120, 70);
    doc.text(schedule.bi_gv_system_situation === "" ? 'Sem informação' : schedule.bi_gv_system_situation, 120, 80);
  
    // Adding citizen details
    doc.setTextColor('#000');
    doc.setFontSize(14);
    doc.text('INFORMAÇÃO ADICIONAL', 80, 100);
    doc.setTextColor('#121214');
    doc.setFontSize(12);
    doc.text('Nome completo:', 20, 140);
    doc.text('Numero de telemóvel:', 20, 150);
  
    doc.setTextColor('#333');
    doc.setFontSize(12);
   
    doc.text(schedule.citizen.name, 120, 140);
    doc.text(String(schedule.citizen.phone), 120, 150);
    const citizen = schedule.citizen
    const qrCodeData = JSON.stringify({ schedule, citizen});
    const qrCodeSize = 100; // Size of the QR code image
    const qrCodeX = (doc.internal.pageSize.width - qrCodeSize) / 2; // X position to center the QR code
    const qrCodeY = doc.internal.pageSize.height - qrCodeSize - 20; // Y position for the QR code
    QRCode.toDataURL(qrCodeData, (err, url) => {
      if (err) {
        console.error(err);
      } else {
        doc.addImage(url, 'PNG', qrCodeX, qrCodeY, qrCodeSize, qrCodeSize);
      }
    }); 
    doc.setFontSize(10);
    doc.setTextColor('#000000');
    doc.text('---------------------------------------------------------------------------------------------------------', 80, doc.internal.pageSize.height - 15);
    doc.text(`Identificação única do comprovativo: ${schedule.id}`, 80, doc.internal.pageSize.height - 10);
    doc.save('comprovativo.pdf');
  };

  return(
    <CardContainer>
      <Span statusColor={schedule.scheduling_state !== 'PENDING' ? schedule.scheduling_state === 'EXPIRED' ? 'red': 'blue' : 'green'}></Span>
      <div>
        <strong>{schedule.citizen.name}</strong>
        <span>Situação do BI: <strong>{translateSituation(schedule.bi_situation)}</strong></span>
      </div>
      <em>Agendado para <strong>{String(format(new Date(schedule.scheduling_date), "d ' de ' MMMM'", {
                            locale: ptBR
                        }))}</strong></em>
      <button onClick={generatePdf} >
        <Download size={24} weight='fill' color="crimson" />
        Baixar Comprovativo
      </button>
    </CardContainer>
  )
}