import { useNavigate } from 'react-router-dom';
import Card from '../Components/Card';
import Button from '../Components/Buttons';
import Titulo from '../Components/Titulo';
import Texto from '../Components/Texto';
import Navbar from '../Components/Navbar';
import Imagenes from '../Components/Imagenes';

function PHome() {
    const navigate = useNavigate();

    const handleConfigClick = () => {
        navigate('/name');
    };

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
            
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: 'calc(100vh - 70px)',
                width: '100%',
                paddingTop: '1rem'
            }}>
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '2rem',
                    alignItems: 'center'
                }}>                
                <Card 
                    color_background='rgba(255, 255, 255, 0.1)'
                    alineado_card="center"
                    color_texto="white"
                    card_width="42.5rem"
                    texto_alineado="center"
                    chil_body={
                        <>
                            <Titulo
                                tipografia='h1'
                                alineado='center'
                                texto='🕹️ Bienvenido a Tu Kahoot 🕹️'
                            />
                            <Texto
                                texto='La plataforma de Trivia más divertida, con diferentes categorías y niveles de dificultad.'
                                alineado='center'
                                tamano_letra='3'
                            />
                        </>
                    }
                />

                <Button
                    color="rojo"
                    sombra="grande"
                    paddingY="2rem"
                    paddingX="15rem"
                    posicion="centro"
                    onClick={handleConfigClick}
                    children={
                        <>
                            <div style={{ fontSize: "66px", marginBottom: "18px" }}>🎮</div>
                            <Titulo
                                tipografia='h2'
                                alineado='center'
                                texto='¡Jugar ahora!'
                            />
                        </>
                    }
                />
              </div>
            </div>
        </>
    );
}
export default PHome;