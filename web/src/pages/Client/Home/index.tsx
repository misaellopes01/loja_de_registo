import { Coffee, MapPin, Package, PersonSimple, Timer } from "phosphor-react"
import { useEffect, useState } from "react"
import { HomeContainer } from "./styles"

import banner from './../../../assets/banner.png'
import woman from './../../../assets/woman.svg'
import warning from './../../../assets/warning.svg'
import info from './../../../assets/info.svg'

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
                            <MapPin size={16} weight='fill' color="#fff"/>
                        </span>
                        Sem precisar se mover
                    </li>
                    <li>
                        <span>
                            <Package size={16} weight='fill' color="#fff"/>
                        </span>
                        Exporte o comprovativo
                    </li>
                    <li>
                        <span>
                            <Timer size={16} weight='fill' color="#fff"/>
                        </span>
                        Rápido e simples
                    </li>
                    <li>
                        <span>
                            <Coffee  weight='fill' color="#fff"/>
                        </span>
                        No conforto de sua casa
                    </li>
                </ul>
            </div>
            <img src={banner} alt="" />
           </section>
           <section className="about">
            <div className="content">
                <div className="upper">
                    <h3>Documentos Necessários Para a <br/>Emissão do BI</h3>
                    <div>
                        <img src={woman} alt="" />
                        <div className="">
                            <strong>Requisitos Necessários Para a Emissão do Bilhete de Identidade de Cidadão Nacional – 1ª Via
                            </strong>
                            <p>Ter idade mínima de 6 anos.
                            <br />
                            <br />
                            Original da certidão narrativa completa do assento de nascimento ou cópia integral do assento de nascimento ou ainda a certidão de batismo, desde que este tenha ocorrido até 31 de maio de 1963.</p>                        
                        </div>
                    </div>
                </div>
                <div className="down">
                        <div className="">
                            <strong>Requisitos Necessários Para a Emissão do Bilhete de Identidade de Cidadão <br /> Nacional – 2ª Via
                            </strong>
                            <ul>
                                <li>
                                    <strong>Caducidade: </strong>
                                    Ter o minímo de 6 meses de antecedência do prazo de validade do BI<br /> ou ainda o assento de nascimento, desde que a emissão do mesmo tenha<br /> ocorrido antes de 2002.
                                </li>
                                <li>
                                    <strong>Má Conservação: </strong>
                                    Original do bilhete de identidade.
                                </li>
                                <li>
                                    <strong>Averbamento: </strong>
                                    Original da certidão narrativa completa ou cópia integral do<br /> assento.
                                </li>
                                <li>
                                    <strong>Extravio: </strong>
                                    Cópia do BI (caso disponha) documentação complementar (declaração<br /> do arquivo de identificação civil e criminal).
                                </li>
                                <li>
                                    <strong>Roubo ou Furto: </strong>
                                    Cópia do BI (caso disponha) documentação complementar<br /> (declaração da participação policial).
                                </li>
                            </ul>                        
                        </div>
                        <div className="footer">
                            <img src={warning} alt="" />
                            <strong>Comprovativo do pagamento da taxa emolumentar para todos os casos.</strong>                        
                        </div>
                </div>
            </div>
           </section>
           <section className="taxes">
                <h3>Acerca das Taxas Emolumentares</h3>
                <div>
                    <img src={info} alt="" />
                    <p>Para a emissão do BI é necessário efectuar-se o pagamento das taxas emolumentares, podendo ser feito no Banco ou directamente na Repartição, via Multicaixa (ATM). 
                    <br /><br />
                    Quando for atendido receberá as informações adicionais sobre o assunto.</p>
                </div>
           </section>
        </HomeContainer>
    )
}