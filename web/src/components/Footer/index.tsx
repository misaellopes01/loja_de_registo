import { MapPin } from 'phosphor-react';
import { FooterContainer } from './styles';

export function Footer() {

    return (
        <FooterContainer>
          <section>
            <div>
              <MapPin size={24} weight="bold"/>
              <span>Lobito, Caponte.</span>
            </div>
            <p>Loja de Registo - Lobito. &copy; Todos Direitos Reservados </p>
            <p>Ministério da Justiça e Direitos Humanos – MINJUSDH</p>
          </section>
        </FooterContainer>
    )
}