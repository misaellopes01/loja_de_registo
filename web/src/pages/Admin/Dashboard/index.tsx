import { useEffect, useState } from "react";
import { Bell, BellSimpleRinging, BellSimpleSlash, Clock } from "phosphor-react";
import { api } from './../../../lib/api'
import { DashboardContainer } from "./styles";

interface ReportProps {
  total: number
  confirmed: number
  pending: number
  expired: number
}


export function Dashboard(){
  const [report, setReport] = useState<ReportProps>({ confirmed: 0, expired: 0, pending: 0, total: 0})

  const sizeIcon = 84

  useEffect(() => {
    async function fetchData(){
      const response = await api.get('/schedule/report')
      setReport(response.data)
    }
    fetchData()
  }, [])

  return(
    <DashboardContainer>
      <h1>Estatísticas</h1>
      <section>
        <div className="card">
          <strong>Total</strong>
          <div>
            <Bell size={sizeIcon} weight='fill' color="#FFDC00"/>
            <span>{report.total}</span>
          </div>
        </div>
        <div className="card">
          <strong>Pendentes</strong>
          <div>
            <Clock size={sizeIcon} weight='fill' color="#21A700" />
            <span>{report.pending}</span>
          </div>
        </div>
        <div className="card">
          <strong>Atendidos</strong>
          <div>
            <BellSimpleRinging size={sizeIcon} weight='fill' color="#003D99" />
            <span>{report.confirmed}</span>
          </div>
        </div>
        <div className="card">
          <strong>Cancelados</strong>
          <div>
            <BellSimpleSlash size={sizeIcon} weight='fill' color="#AA0E0D" />
            <span>{report.expired}</span>
          </div>
        </div>
      </section>
    </DashboardContainer>
  )
}