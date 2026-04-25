import { useLocation, useNavigate } from 'react-router-dom';
import { validateAnswer } from '../feature/trivia/triviaLogic';
import Button from '../Components/Buttons';
import Card from '../Components/Card';
import Titulo from '../Components/Titulo';
import Texto from '../Components/Texto';

export default function PAnswer_Result() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { selectedAnswer, correctAnswer} = location.state || {};

  if (!selectedAnswer || !correctAnswer) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Card color_background="red" alineado="center" chil_body={
          <>
            <Titulo 
              tipografia="h2" 
              texto="Error" 
              alineado="center"
              color_text="white"
            />
            <Texto 
              texto="No se encontraron los datos de la pregunta."
              alineado="center"
              color_text="white"
            />
            <Button 
              texto="Volver al inicio" 
              color="azul" 
              tamano="grande"
              onClick={() => navigate('/')}
            />
          </>
        } />
      </div>
    );
  }

  const isCorrect = validateAnswer(selectedAnswer, correctAnswer);

  const handleNextQuestion = () => {
    navigate('/questions');
  };

  return (
    <div 
      className={isCorrect ? 'bg-answer-correct' : 'bg-answer-incorrect'}
    >
      <div className="container-result">
        <Texto 
          texto={isCorrect ? '✓' : '✗'}
          alineado="center"
          color_text="white"
          tamano_letra="1"
        />
        <Titulo 
          tipografia="h1" 
          texto={isCorrect ? '¡Correcto!' : '¡Incorrecto!'}
          alineado="center"
          color_text="white"
        />
        <Texto 
          texto={isCorrect 
            ? '¡Excelente! Sigue adelante.' 
            : 'No te rindas, la próxima irá mejor.'}
          alineado="center"
          color_text="white"
        />

        <div className="d-flex justify-content-center mb-4">
          <Card 
            color_background={isCorrect ? "green" : "red"} 
            alineado="center"
            chil_body={
              <>
                <Texto 
                  texto={isCorrect ? 'TU RESPUESTA:' : 'LA RESPUESTA CORRECTA ERA:'}
                  alineado="center"
                  color_text="white"
                />
                <Texto 
                  texto={`✓ ${isCorrect ? selectedAnswer : correctAnswer}`}
                  alineado="center"
                  color_text="white"
                  tamano_letra="3"
                />
              </>
            }
          />
        </div>

        {/* Next Button */}
        <div className="text-center">
          <Button 
            texto="Siguiente pregunta →" 
            color={isCorrect ? 'verde' : 'rojo'}
            tamano="grande"
            onClick={handleNextQuestion}
            mostrarBorde={true}
            colorBorde={isCorrect ? 'verde' : 'rojo'}
            sombra="grande"
          />
        </div>
      </div>
    </div>
  );
}