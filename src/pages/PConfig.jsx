import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../Components/Navbar';
import Button from '../Components/Buttons';
import Titulo from '../Components/Titulo';
import Texto from '../Components/Texto';
import Imagenes from '../Components/Imagenes';
import Card from '../Components/Card.jsx'
import Select from '../Components/Select.jsx'

import {
    TRIVIA_CATEGORIES,
    TRIVIA_DIFFICULTIES,
    DIFFICULTY_LABELS,
    DIFFICULTY_TIMES
} from '../constans/config.js';

export default function PConfig() {

    const navigate = useNavigate();

    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');

    const Nombre = localStorage.getItem('playerName');

    return (
    <>
        <Navbar
            clases='sm'
            texto='Quizly'
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
            buttonContent={
                <Button
                    texto="Volver"
                    color="azul"
                    tamano="pequeño"
                    posicion="derecha"
                    onClick={() => navigate('/')}
                />
            }
        />

        <div className="d-flex justify-content-center align-items-center vh-100">

            <div className="d-flex flex-column align-items-center">

                <Titulo
                    tipografia='h1'
                    texto='Configuración de Juego'
                    alineado='center'
                />

                <div className="mt-4">

                    <Card
                        color_background='#4C2A85'
                        color_texto='white'
                        alineado_card='center'
                        card_width='30rem'
                        texto_alineado='center'

                        chil_top={
                            <div className="mt-2 mb-2">
                                <Titulo
                                    texto={`👋Hola ${Nombre || "Jugador"}`}
                                    alineado="center"
                                    tipografia="h2"
                                />
                            </div>
                        }

                        chil_body={
                            <>
                                <div className="mt-2">
                                    <Titulo tipografia='h3' texto='Categoria' />
                                </div>

                                <Select
                                    options={Object.values(TRIVIA_CATEGORIES).map((category) => ({
                                        value: category.code,
                                        text: category.es
                                    }))}
                                    value={category}
                                    required
                                    onChange={(e) =>
                                        setCategory(e.target.value)
                                    }
                                />

                                <div className="mt-4">
                                    <Titulo tipografia='h3' texto='Dificultad' />
                                </div>

                                <Select
                                    options={Object.values(TRIVIA_DIFFICULTIES).map((value) => ({
                                        value: value,
                                        text: `${DIFFICULTY_LABELS[value]} (${DIFFICULTY_TIMES[value]}s)`
                                    }))}
                                    value={difficulty}
                                    required
                                    onChange={(e) => {
                                        setDifficulty(e.target.value);
                                    }}
                                />
                            </>
                        }

                        chil_bottom={
                            <div className="d-flex justify-content-center mt-4 mb-4">
                                <Button
                                    texto="Jugar"
                                    color="azul"
                                    posicion="centrado"
                                    sombra='grande'
                                    tamano='grande'
                                    onClick={() => {
                                        if(!category || !difficulty) return

                                        const settings = {
                                            category: category,
                                            difficulty: difficulty,
                                            time: DIFFICULTY_TIMES[difficulty]
                                        };
                                        navigate('/questions', { state: settings });
                                    }}
                                />
                            </div>
                        }
                    />

                </div>

            </div>
        </div>
    </>
);
}