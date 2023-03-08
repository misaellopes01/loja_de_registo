import { MapPin, PersonSimple } from "phosphor-react"
import { useEffect, useState } from "react"
import { HomeContainer } from "./styles"

import banner from './../../assets/banner.png'

export function Home() {

    return (
        <HomeContainer>
           <section className="banner">
            <div className="content">
                <h1>Agendar um dia para ser atendido nunca esteve tão fácil!</h1>
                <p>
                Com o novo sistema, você pode agendar o dia para tratar de todos os assuntos referentes ao BI na Loja dos Registos do município do Lobito
                </p>
                
                <ul>
                    <li>
                        <span>
                            <MapPin size={14}/>
                        </span>
                        Sem precisar se mover
                    </li>
                    <li>
                        <span>
                            <MapPin size={14}/>
                        </span>
                        Exporte o comprovativo
                    </li>
                    <li>
                        <span>
                            <MapPin size={14}/>
                        </span>
                        Rápido e simples
                    </li>
                    <li>
                        <span>
                            <MapPin size={14}/>
                        </span>
                        No conforto de sua casa
                    </li>
                </ul>
            </div>
            <img src={banner} alt="" />
           </section>
        </HomeContainer>
    )
}