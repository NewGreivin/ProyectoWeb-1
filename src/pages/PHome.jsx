import { useNavigate } from 'react-router-dom';
import Card from '../Components/Card';
import Button from '../Components/Buttons';
import Titulo from '../Components/Titulo';
import Texto from '../Components/Texto';

function PHome() {
    const navigate = useNavigate();

    const handleConfigClick = () => {
        navigate('/name');
    };

    return (
        <div className="container mt-5">
            <div className="row g-5">
                <div className="col-12 d-flex justify-content-center">
                    <Card 
                        color_background='rgba(255, 255, 255, 0.1)'
                        alineado_card="center"
                        color_texto="white"
                        card_width="25rem"
                        texto_alineado="center"
                        chil_body={
                            <>
                                <Titulo
                                    tipografia='h3'
                                    alineado='center'
                                    texto='🕹️ Bienvenido a Tu Kahoot '
                                />
                                <Texto
                                    texto='La plataforma de Trivia más divertida, con diferentes categorías y niveles de dificultad.'
                                    alineado='center'
                                    tamano_letra='16px'
                                />
                            </>
                        }
                    />
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <div style={{ width: "25rem", display: "flex", justifyContent: "center" }}>
                        <Button
                            color="rojo"
                            sombra="grande"
                            paddingY="2rem"
                            paddingX="7rem"
                            posicion="centro"
                            onClick={handleConfigClick}
                            children={
                                <>
                                    <div style={{ fontSize: "48px", marginBottom: "20px" }}>🎮</div>
                                    <Titulo
                                        tipografia='h4'
                                        alineado='center'
                                        texto='¡Vamos a jugar!'
                                    />
                                </>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PHome;