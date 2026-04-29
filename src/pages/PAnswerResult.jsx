import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../Components/Buttons';
import Card from '../Components/Card';
import Titulo from '../Components/Titulo';
import Texto from '../Components/Texto';

export default function PAnswer_Result() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const {
    selectedAnswer,
    correctAnswer,
    isCorrect,
    score,
    currentIndex,
    totalQuestions,
    questionList,
    category,
    difficulty,
    time,
    timedOut,
    correctAnswers
  } = location.state || {};

  const handleNextQuestion = () => {
    if (currentIndex < totalQuestions - 1) {
      navigate("/questions", {
        state: {
          score,
          correctAnswers,
          currentIndex: currentIndex + 1,
          totalQuestions,
          questionList,
          category,
          difficulty,
          time,
        },
      });
    } else {
      navigate("/result", {
        state: {
          score,
          totalQuestions,
          correctAnswers,
        },
      });
    }
  };

  return (
    <div className={isCorrect ? "bg-answer-correct" : "bg-answer-incorrect"}>
      <div className="container-result">
        <Texto 
          texto={isCorrect ? "✓" : "✗"}
          alineado="center"
          color_text="white"
          tamano_letra="1"
        />
        <Titulo 
          tipografia="h1" 
          texto={isCorrect ? "¡Correcto!" : timedOut ? "No has respondido a tiempo" : "¡Incorrecto!"}
          alineado="center"
          color_text="white"
        />
        <Texto 
          texto={isCorrect 
            ? "¡Excelente! Sigue adelante." 
            : timedOut ? "Se acabo el tiempo" : "No te rindas, la próxima irá mejor."}
          alineado="center"
          color_text="white"
        />

        {isCorrect && (
          <Texto 
            texto={"+100 puntos"}
            alineado="center"
            color_text="#ffffff"
            tamano_letra="4"
            className="mb-4"
          />
        )}

        <div className="d-flex mb-4">
          <Card 
            color_background={isCorrect ? "#1a8a58" : "#db3246"} 
            alineado_card="center"
            chil_body={
              <>
                <Texto 
                  texto={isCorrect ? "TU RESPUESTA:" : timedOut ? "LA RESPUESTA CORRECTA ERA:" : "LA RESPUESTA CORRECTA ERA:"}
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

          <Button 
            texto="Siguiente pregunta →" 
            color={isCorrect ? "verde" : "rojo"}
            tamano="grande"
            posicion="centro"
            onClick={handleNextQuestion}
            mostrarBorde={true}
            colorBorde={isCorrect ? "verde" : "rojo"}
            sombra="grande"
          />
      </div>
    </div>
  );
}