import Navbar from '../Components/Navbar'
import Button from '../Components/Buttons'
import Imagenes from '../Components/Imagenes'
import Card from '../Components/Card'
import Titulo from '../Components/Titulo'
import Texto from '../Components/Texto'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PName() {

    const [nombre, setNombre] = useState('')
    const navigate = useNavigate()

    return (
        <>
            <Navbar
                clases='sm'
                texto='Kahhot'
                color='#7C3AED'
                brandContent={
                    <Imagenes
                        url="/src/assets/vite.svg"
                        alt='logo'
                        ancho={40}
                        alto={40}
                        classExtra='me-2'
                    />
                }
            />

            <div className="d-flex justify-content-center align-items-center vh-100">
                <Card
                    color_background='#7C3AED'
                    color_texto='white'
                    alineado_card='center'
                    texto_alineado='center'
                    card_width='30rem'

                    chil_body={
                        <>
                            <Titulo
                                tipografia='h3'
                                alineado='center'
                                texto='¿Cómo te llamas?'
                            />

                            <Texto
                                texto='Nombre del jugador'
                                alineado='center'
                                tamano_letra='20px'
                            />

                            <input
                                type="text"
                                className="form-control mt-3"
                                placeholder="Eje: Juan"
                                value={nombre}
                                required
                                onChange={(e) => setNombre(e.target.value)}
                            />

                        </>
                    }

                    chil_bottom={
                        <div className="d-flex justify-content-center gap-3 mt-4 mb-3 px-4">

                            <Button
                                texto="¡Atrás!"
                                color="rojo"
                                posicion="izquierda"
                                sombra='grande'
                                onClick={() => navigate('/phome')}
                            />

                            <Button
                                texto="¡Entrar!"
                                color="verde"
                                posicion="izquierda"
                                sombra='grande'
                                onClick={() => {
                                    if (!nombre.trim()) return
                                    localStorage.setItem('playerName', nombre)
                                    navigate('/config')
                                }}
                            />

                        </div>
                    }
                />
            </div>
        </>
    );
}