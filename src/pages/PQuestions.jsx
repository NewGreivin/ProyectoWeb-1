import { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Card from "../Components/Card";
import Button from "../Components/Buttons";
import Titulo from "../Components/Titulo";
import Texto from "../Components/Texto";
import ProgressBar from "../Components/ProgressBar";
import Navbar from "../Components/Navbar";
import Imagenes from "../Components/Imagenes";
import Modal from "../Components/modal";
import Snipper from "../Components/Snipper";
import { useTriviaQuestions } from "../feature/trivia/triviaHooks";

export default function PQuestions() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const config = useMemo(() => location.state || {}, [location.state]);
  
  const [questionList, setQuestionList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(config.time || 20);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const { fetchQuestions } = useTriviaQuestions();

  const getQuestionLimit = (difficulty) => {
    if (difficulty === "easy") return 10;
    if (difficulty === "medium") return 15;
    if (difficulty === "hard") return 20;
    return 10;
  };

  const currentQuestion = questionList[currentIndex];
  const totalQuestions = questionList.length;

  useEffect(() => {
    const initializeQuestions = async () => {
      const stateQuestionList = config.questionList;
      const stateCurrentIndex = config.currentIndex !== undefined ? config.currentIndex : 0;
      const stateScore = config.score !== undefined ? config.score : 0;
      const stateCorrectAnswers = config.correctAnswers !== undefined ? config.correctAnswers : 0;

      if (stateQuestionList && stateQuestionList.length > 0) {
        setQuestionList(stateQuestionList);
        setCurrentIndex(stateCurrentIndex);
        setScore(stateScore);
        setCorrectAnswers(stateCorrectAnswers);
      } else {
        const limit = getQuestionLimit(config.difficulty);
        const loadedQuestions = await fetchQuestions({
          limit,
          category: config.category || '',
          difficulty: config.difficulty || '',
        });
        
        if (loadedQuestions && loadedQuestions.length > 0) {
          setQuestionList(loadedQuestions);
        }
      }
      
      setIsLoading(false);
    };

    initializeQuestions();
  }, []);

  useEffect(() => {
    if (isLoading || !currentQuestion) return;

    const initialTime = config.time || 20;
    let timeRemaining = initialTime;
    
    const timer = setInterval(() => {
      timeRemaining--;
      setTimeLeft(timeRemaining);

      if (timeRemaining <= 0) {
        clearInterval(timer);
        navigate("/answer-result", {
          state: {
            selectedAnswer: "Sin respuesta",
            correctAnswer: currentQuestion.correctAnswer,
            isCorrect: false,
            timedOut: true,
            score: score,
            correctAnswers: correctAnswers,
            currentIndex: currentIndex,
            totalQuestions: totalQuestions,
            questionList: questionList,
            category: config.category,
            difficulty: config.difficulty,
            time: config.time,
          },
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, isLoading, currentQuestion, config, score, correctAnswers, totalQuestions, questionList, navigate]);

  const handleAnswerClick = (answer) => {
    const isCorrect = answer === currentQuestion.correctAnswer;
    const newScore = isCorrect ? score + 100 : score;
    const newCorrectAnswers = isCorrect ? correctAnswers + 1 : correctAnswers;

    navigate("/answer-result", {
      state: {
        selectedAnswer: answer,
        correctAnswer: currentQuestion.correctAnswer,
        isCorrect: isCorrect,
        score: newScore,
        correctAnswers: newCorrectAnswers,
        currentIndex: currentIndex,
        totalQuestions: totalQuestions,
        questionList: questionList,
        category: config.category,
        difficulty: config.difficulty,
        time: config.time,
      },
    });
  };

  const handleExitGame = () => {
    setQuestionList([]);
    navigate("/");
  };
  if (isLoading || !currentQuestion) {
    return (
      <div className="text-center" style={{ paddingTop: "50vh", transform: "translateY(-50%)" }}>
        <Snipper type="border" color="warning" className="mb-4" />
        <Titulo tipografia="h5" texto="Cargando preguntas..." alineado="center" color_text="white" />
      </div>
    );
  }

  return (
    <div>
      <Navbar
        clases="sm"
        texto="Kahhot"
        color="#7C3AED"
        brandContent={
          <Imagenes
            url="/src/assets/vite.svg"
            alt="Logo"
            ancho={40}
            alto={40}
            classExtra="me-2"
          />
        }
        buttonContent={
          <Button
            texto="Volver al Inicio"
            color="azul"
            tamano="pequeño"
            posicion="derecha"
            onClick={() => setIsModalOpen(true)}
          />
        }
      />

      <div className="container py-5">
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <Texto
            texto={`Pregunta ${currentIndex + 1} de ${totalQuestions}`}
            alineado="left"
            color_text="#FFFFFF"
            tamano_letra="4"
          />
          <Titulo
            tipografia="h4"
            texto={`${correctAnswers} Aciertos`}
            alineado="center"
            color_text="#00D084"
          />
          <Texto
            texto={`${score} pts`}
            alineado="right"
            color_text="#ffc107"
            tamano_letra="4"
          />
        </div>
        
        <div className="mb-4 d-flex align-items-center gap-3">
          <div style={{ minWidth: "60px", textAlign: "center" }}>
            <Texto
              texto={`${timeLeft}s`}
              alineado="center"
              color_text={timeLeft <= 5 ? "#ff4444" : "#ffc107"}
              tamano_letra="3"
              className="mb-0"
            />
          </div>
          <ProgressBar
            value={config.time - timeLeft}
            max={config.time || 20}
            variant={timeLeft <= 5 ? "danger" : "warning"}
            height="12px"
            className="flex-grow-1" 
          />
        </div>

        <Card
          color_background="#967ef5"
          alineado="center"
          responsivo = "true"
          chil_body={
            <Titulo
              tipografia="h5"
              texto={currentQuestion.question}
              alineado="center"
              colorTexto="blanco"
            />
          }
          className="mb-5"
        />

        <div className="row g-3 mt-2 mb-1">
          {currentQuestion.shuffledAnswers.map((answer, index) => {
            const colors = ["rojo", "azul", "amarillo", "verde"];
            const colorIcons = ["▲", "◆", "●", "★"];

            return (
              <div key={index} className="col-md-6">
                <Button
                  texto={`${colorIcons[index]} ${answer}`}
                  color={colors[index]}
                  tamano="grande"
                  colorTexto="blanco"
                  onClick={() => handleAnswerClick(answer)}
                />
              </div>
            );
          })}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={() => handleExitGame()}
        titulo="¿Deseas salir de la partida?"
        colorTextoTitulo="black"
        btnSecundario="Cancelar"
        btnPrimario="Salir"
        propsBtnSecundario={{ color: "gris" }}
        propsBtnPrimario={{ color: "rojo" }}
        posicion="centro"
      >
        <Texto texto="Perderás todo el progreso" alineado="center" color_text="black" />
      </Modal>
    </div>
  );
}