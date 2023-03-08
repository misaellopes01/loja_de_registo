import { useEffect, useState } from "react"
import { HomeContainer } from "./styles"

import img from './../../../public/coffeefavicon.png'
import { api } from "../../lib/api"

export interface User {
    name: string
    phone: string
    avatar: string
    email: string
    username: string
    address: {
      street: string
      district: string
      city: string
      state: string
      zipCode: string
    }
    socialNetworks: {
      youtube: string
      instagram: string
    }
    professional: {
      description: string
      experience: string
    }
  }

export function Home() {

    const [users, setUsers] = useState<User[]>()

    useEffect(() => {
        async function userData() {
           const response = await api.get('/users')
           return setUsers(response.data)
        }
        userData()
    }, [])


    return (
        <HomeContainer>
            {
                users?.map(user => (
                    <section className="banner">
                        <div className="info">
                        <div className="profile">
                            <img src={user.avatar} alt="" />
                            <div className="content">
                                <strong>Nome: {user.name}</strong>
                                <span>Email: {user.email}</span>
                                <span>Phone: {user.phone}</span>
                                <span>Username: {user.username}</span>
                            </div>
                            </div>
                        <div className="address">
                                <strong>Estado: {user.address.state}</strong>
                                <span>Cidade: {user.address.city}</span>
                                <span>Bairro: {user.address.district}</span>
                                <span>Rua: {user.address.street}</span>
                                <span>Código Postal: {user.address.zipCode}</span>
                        </div>
                        </div>
                        <div className="details">
                            <strong>Dados profissionais</strong>
                            <span>Descricao: {user.professional.description}</span>
                            <span>Tempo: {user.professional.experience}</span>
                            <span>Instagram: <a href={user.socialNetworks.instagram}>{user.socialNetworks.instagram}</a></span>
                            <span>Youtube: <a href={user.socialNetworks.youtube}>{user.socialNetworks.youtube}</a></span>
                        </div>
                    </section>
                ))
            }
            
        </HomeContainer>
    )
}