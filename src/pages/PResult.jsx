import Navbar from '../Components/Navbar'
import Button from '../Components/Buttons'
import Imagenes from '../Components/Imagenes'
import Card from '../Components/Card'
import Titulo from '../Components/Titulo'
import Texto from '../Components/Texto'
import { useNavigate } from 'react-router-dom'

export default function PResult() {
    const navigate = useNavigate()
    const playerName = localStorage.getItem('playerName') || 'Jugador'
    
    // Datos de ejemplo (estos vendrían del state o context)
    const score = 0
    const correctAnswers = 0
    const totalQuestions = 2
    const accuracy = 0
    const points = 0

    // Mensaje motivacional según precisión
    const getMotivationalMessage = (acc) => {
        if (acc >= 90) return "¡Excelente resultado! 🎉"
        if (acc >= 70) return "¡Buen trabajo! 👍"
        return "¡la próxima irá mejor! 🎯"
    }

    const motivationalMessage = getMotivationalMessage(accuracy)

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

            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "90vh", paddingTop: "2rem", paddingBottom: "2rem" }}>
                <Card
                    color_background='#5B21B6'
                    color_texto='white'
                    alineado_card='center'
                    texto_alineado='center'
                    card_width='35rem'
                    chil_body={
                        <>
                            <Titulo
                                tipografia='h2'
                                alineado='center'
                                texto={playerName}
                            />

                            <Texto
                                texto={motivationalMessage}
                                alineado='center'
                                tamano_letra='18px'
                                style={{ color: '#FF6B6B', fontWeight: 'bold' }}
                            />

                            <div style={{ 
                                border: '1px solid rgba(255, 255, 255, 0.3)', 
                                borderRadius: '10px', 
                                padding: '20px', 
                                margin: '20px 0',
                                textAlign: 'center'
                            }}>
                                <Texto
                                    texto='PUNTUACIÓN FINAL'
                                    alineado='center'
                                    tamano_letra='14px'
                                    style={{ opacity: 0.7 }}
                                />
                                <div style={{ fontSize: '48px', color: '#FBBF24', fontWeight: 'bold', margin: '10px 0' }}>
                                    {score}
                                </div>
                                <Texto
                                    texto='puntos'
                                    alineado='center'
                                    tamano_letra='14px'
                                    style={{ opacity: 0.7 }}
                                />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', margin: '20px 0' }}>
                                <div style={{ 
                                    border: '1px solid rgba(255, 255, 255, 0.3)', 
                                    borderRadius: '8px', 
                                    padding: '15px',
                                    textAlign: 'center'
                                }}>
                                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>✅</div>
                                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{correctAnswers}/{totalQuestions}</div>
                                    <Texto
                                        texto='CORRECTAS'
                                        alineado='center'
                                        tamano_letra='12px'
                                        style={{ opacity: 0.7 }}
                                    />
                                </div>

                                <div style={{ 
                                    border: '1px solid rgba(255, 255, 255, 0.3)', 
                                    borderRadius: '8px', 
                                    padding: '15px',
                                    textAlign: 'center'
                                }}>
                                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎯</div>
                                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{accuracy}%</div>
                                    <Texto
                                        texto='PRECISIÓN'
                                        alineado='center'
                                        tamano_letra='12px'
                                        style={{ opacity: 0.7 }}
                                    />
                                </div>

                                <div style={{ 
                                    border: '1px solid rgba(255, 255, 255, 0.3)', 
                                    borderRadius: '8px', 
                                    padding: '15px',
                                    textAlign: 'center'
                                }}>
                                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>❓</div>
                                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{totalQuestions}</div>
                                    <Texto
                                        texto='PREGUNTAS'
                                        alineado='center'
                                        tamano_letra='12px'
                                        style={{ opacity: 0.7 }}
                                    />
                                </div>

                                <div style={{ 
                                    border: '1px solid rgba(255, 255, 255, 0.3)', 
                                    borderRadius: '8px', 
                                    padding: '15px',
                                    textAlign: 'center'
                                }}>
                                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>⭐</div>
                                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{points}</div>
                                    <Texto
                                        texto='PUNTOS'
                                        alineado='center'
                                        tamano_letra='12px'
                                        style={{ opacity: 0.7 }}
                                    />
                                </div>
                            </div>

                            <div style={{ margin: '20px 0', textAlign: 'center' }}>
                                <Texto
                                    texto='Precisión general'
                                    alineado='center'
                                    tamano_letra='14px'
                                    style={{ opacity: 0.7, marginBottom: '5px' }}
                                />
                                <Texto
                                    texto={`${accuracy}%`}
                                    alineado='center'
                                    tamano_letra='20px'
                                    style={{ color: '#FF6B6B', fontWeight: 'bold' }}
                                />
                            </div>
                        </>
                    }

                    chil_bottom={
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', padding: '0 20px 20px 20px' }}>
                            <Button
                                className="btn-danger shadow-lg"
                                onClick={() => navigate('/pquestions')}
                            >
                                🎮 Jugar de nuevo
                            </Button>

                            <Button
                                className="btn-secondary shadow-lg"
                                onClick={() => navigate('/phome')}
                            >
                                🏠 Inicio
                            </Button>
                        </div>
                    }
                />
            </div>
        </>
    );
}
