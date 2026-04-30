import Navbar from '../Components/Navbar'
import Button from '../Components/Buttons'
import Imagenes from '../Components/Imagenes'
import Card from '../Components/Card'
import Titulo from '../Components/Titulo'
import Texto from '../Components/Texto'
import Modal from '../Components/modal'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { DIFFICULTY_LABELS, TRIVIA_CATEGORIES } from '../constans/config'



export default function PResult() {
    const navigate = useNavigate()
    const location = useLocation()
    const playerName = localStorage.getItem('playerName') || 'Jugador'
    const [showShareModal, setShowShareModal] = useState(false)
    
    const {
        correctAnswers = 0,
        totalQuestions = 0,
        selectedCategory = '',
        accuracy = 0,
        totalPoints = 0,
        incorrectCount = 0,
        difficulty = 'medium'
    } = location.state || {}
    
    const getMotivationalMessage = (acc) => {
        if (acc >= 100) return "¡Increíble resultado perfecto! 🌟"
        if (acc >= 90) return "¡Excelente resultado! 🎉"
        if (acc >= 70) return "¡Buen trabajo! 👍"
        return "¡la próxima irá mejor! 🎯"
    }

    const motivationalMessage = getMotivationalMessage(accuracy)

    const getCategoryLabel = (categoryCode) => {
    const category = Object.values(TRIVIA_CATEGORIES).find(cat => cat.code === categoryCode)
    return category?.es || selectedCategory || 'Sin categoría'
}

    const generateShareMessage = () => {
        return `🎮 ¡TRIVIA KAHHOT! 🎮\n\n👤 Jugador: ${playerName}\n\n📊 RESULTADOS:\n✅ Respuestas correctas: ${correctAnswers}/${totalQuestions}\n🎯 Precisión: ${accuracy}%\n⭐ Puntos obtenidos: ${totalPoints}\n📚 Categoría: ${getCategoryLabel(selectedCategory)}\n\n¿Te atreves a superar mi puntuación? 💪\n\n🎮 ¡Juega ahora! 🎮\nhttps://quizly-cr.vercel.app` 
    }

    const shareByEmail = () => {
        const message = generateShareMessage()
        const subject = `Mi resultado en Kahhot: ${totalPoints} puntos 🎮`
        const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
        window.location.href = mailtoLink
        setShowShareModal(false)
    }

    const shareByWhatsApp = () => {
        const message = generateShareMessage()
        const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`
        window.open(whatsappLink, '_blank')
        setShowShareModal(false)
    }




    const anchoUniforme = '450px'

    return (
        <>
            <Navbar
                clases='sm'
                texto='Kahhot'
                color='#7C3AED'
                brandContent={
                    <Imagenes
                        url="/assets/logo.svg"
                        alt='logo'
                        ancho={40}
                        alto={40}
                        classExtra='me-2'
                    />
                }
            />

            <div style={{ paddingTop: "2rem", paddingBottom: "2rem", minHeight: "90vh" }}>

                <div style={{ maxWidth: anchoUniforme, margin: '0 auto', padding: '0 12px' }}>

                    <div style={{ marginBottom: "1.5rem" }}>
                        <Card
                            color_background='#5B21B6'
                            color_texto='white'
                            alineado_card='center'
                            texto_alineado='center'
                            card_width='100%'
                            chil_body={
                                <>
                                    <Titulo
                                        tipografia='h1'
                                        alineado='center'
                                        texto={playerName}
                                    />

                                    <Texto
                                        texto={motivationalMessage}
                                        alineado='center'
                                        tamano_letra='4'
                                        
                                    />

                                    <div style={{
                                        border: '1px solid rgba(255, 255, 255, 0.3)',
                                        borderRadius: '10px',
                                        padding: '20px',
                                        textAlign: 'center'
                                    }}>
                                        <Texto
                                            texto='PUNTUACIÓN FINAL'
                                            alineado='center'
                                            tamano_letra='5'
                                            
                                        />
                                        <div style={{ fontSize: '48px', color: '#FBBF24', fontWeight: 'bold', margin: '10px 0' }}>
                                            {totalPoints}
                                        </div>
                                        <Texto
                                            texto='puntos'
                                            alineado='center'
                                            tamano_letra='5'
                                           
                                        />
                                    </div>
                                </>
                            }
                        />
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '8px',
                        marginBottom: '1.5rem'
                    }}>
                        <Card
                            color_background='#0e7120'
                            color_texto='white'
                            alineado_card='center'
                            card_width='100%'
                            chil_body={
                                <div style={{ textAlign: 'center', padding: '10px 0' }}>
                                    <div style={{ fontSize: '28px', marginBottom: '6px' }}>✅</div>
                                    <div style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '4px' }}>
                                        {correctAnswers}/{totalQuestions}
                                    </div>
                                    <Texto
                                        texto='Correctas'
                                        alineado='center'
                                        tamano_letra='4'
                                    />
                                </div>
                            }
                        />

                        <Card
                            color_background='#a6571a'
                            color_texto='white'
                            alineado_card='center'
                            card_width='100%'
                            chil_body={
                                <div style={{ textAlign: 'center', padding: '10px 0' }}>
                                    <div style={{ fontSize: '28px', marginBottom: '6px' }}>🎯</div>
                                    <div style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '4px' }}>
                                        {accuracy}%
                                    </div>
                                    <Texto
                                        texto='Precisión'
                                        alineado='center'
                                        tamano_letra='4'
                                    />
                                </div>
                            }
                        />

                        <Card
                            color_background='#323cab'
                            color_texto='white'
                            alineado_card='center'
                            card_width='100%'
                            chil_body={
                                <div style={{ textAlign: 'center', padding: '10px 0' }}>
                                    <div style={{ fontSize: '28px', marginBottom: '6px' }}>❓</div>
                                    <div style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '4px' }}>
                                        {totalQuestions}
                                    </div>
                                    <Texto
                                        texto='Preguntas'
                                        alineado='center'
                                        tamano_letra='4'
                                    />
                                </div>
                            }
                        />

                        <Card
                            color_background='#a99519'
                            color_texto='white'
                            alineado_card='center'
                            card_width='100%'
                            chil_body={
                                <div style={{ textAlign: 'center', padding: '10px 0' }}>
                                    <div style={{ fontSize: '28px', marginBottom: '6px' }}>🧠</div>
                                    <div style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '4px' }}>
                                        {DIFFICULTY_LABELS[difficulty] || difficulty}
                                    </div>
                                    <Texto
                                        texto='Dificultad'
                                        alineado='center'
                                        tamano_letra='4'
                                    />
                                </div>
                            }
                        />

                        <Card
                            color_background='#5120a5'
                            color_texto='white'
                            alineado_card='center'
                            card_width='100%'
                            chil_body={
                                <div style={{ textAlign: 'center', padding: '10px 0' }}>
                                    <div style={{ fontSize: '28px', marginBottom: '6px' }}>📚</div>
                                    <div style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '4px' }}>
                                        {getCategoryLabel(selectedCategory)}
                                    </div>
                                    <Texto
                                        texto='Categoría'
                                        alineado='center'
                                        tamano_letra='4'
                                    />
                                </div>
                            }
                        />

                        <Card
                            color_background='#aa1c1c'
                            color_texto='white'
                            alineado_card='center'
                            card_width='100%'
                            chil_body={
                                <div style={{ textAlign: 'center', padding: '10px 0' }}>
                                    <div style={{ fontSize: '28px', marginBottom: '6px' }}>❌</div>
                                    <div style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '4px' }}>
                                        {incorrectCount}
                                    </div>
                                    <Texto
                                        texto='Incorrectas'
                                        alineado='center'
                                        tamano_letra='4'
                                    />
                                </div>
                            }
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '2rem' }}>
                        <div style={{ display: 'grid' }}>
                            <Button
                                color="rojo"
                                sombra="grande"
                                tamano="grande"
                                paddingX="2rem"
                                onClick={() => navigate('/pquestions')}
                                children={
                                <>
                                    <div style={{ fontSize: "28px", marginBottom: "10px" }}>🎮</div>
                                    <Titulo
                                        tipografia='h4'
                                        alineado='center'
                                        texto='¡Jugar de nuevo!'
                                    />
                                </>
                                }
                            />
                        </div>

                        <div style={{ display: 'grid' }}>
                            <Button
                                color="gris"
                                sombra="grande"
                                tamano="grande"
                                paddingX="4rem"
                                onClick={() => setShowShareModal(true)}
                                children={
                                <>
                                    <div style={{ fontSize: "28px", marginBottom: "10px" }}>📤</div>
                                    <Titulo
                                        tipografia='h4'
                                        alineado='center'
                                        texto='Compartir resultado'
                                    
                                    />
                                </>
                                }
                            />
                        </div>
                    </div>

                </div>
            </div>

            <Modal
                isOpen={showShareModal}
                onClose={() => setShowShareModal(false)}
                tamano="gigante"
                posicion="centro"
                chil_titulo={
                    <Titulo
                        tipografia='h5'
                        alineado='center'
                        texto='¿Cómo deseas compartir?'
                        color_text='black'
                    />
                }
                chil_body={
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <Button
                            color="rojo"
                            sombra="grande"
                            tamano="grande"
                            onClick={shareByEmail}
                            children={
                                <>
                                    <div style={{ fontSize: "24px", marginBottom: "8px" }}>📧</div>
                                    <span>Correo </span>
                                </>
                            }
                        />
                        <Button
                            color="verde"
                            sombra="grande"
                            tamano="grande"
                            colorTexto="blanco"
                            onClick={shareByWhatsApp}
                            children={
                                <>
                                    <div style={{ fontSize: "24px", marginBottom: "8px" }}>💬</div>
                                    <span>WhatsApp</span>
                                </>
                            }
                        />
                        
                    </div>

                }
            />
        </>
    );
}