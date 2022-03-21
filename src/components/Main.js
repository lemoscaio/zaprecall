import React from 'react';

import Header from "./Header.js";
import Cards from "./Cards.js";
import Footer from "./Footer.js";

// TODO make questions come from JSON file
const questions = [
    {
        question: "O que é JSX?",
        answer: "JSX é uma sintaxe para escrever HTML dentro do JS",
        answered: false,
        status: null
    },
    {
        question: "O React é __",
        answer: "Uma biblioteca JavaScript para construção de interfaces",
        answered: false,
        status: null
    },
    {
        question: "Componentes devem iniciar com __",
        answer: "Letra maiúscula",
        answered: false,
        status: null
    },
    {
        question: "Podemos colocar __ dentro do JSX",
        answer: "Expressões",
        answered: false,
        status: null
    },
    {
        question: "O ReactDOM nos ajudar __",
        answer: "Interagindo com a DOM para colocar componentes React na mesma",
        answered: false,
        status: null
    },
    {
        question: "Usamos o npm para __",
        answer: "Gerenciar os pacotes necessários e suas dependências",
        answered: false,
        status: null
    },
    {
        question: "Usamos props para __",
        answer: "Passar diferentes informações para componentes ",
        answered: false,
        status: null
    },
    {
        question: "Usamos estado (state) para __",
        answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
        answered: false,
        status: null
    }
]

export default function Main({ images }) {

    const [totalAnswered, setTotalAnswered] = React.useState(0)
    const [statusList, setStatusList] = React.useState([])

    const shuffledQuestions = questions.sort(() => Math.random() - 0.5)

    return (
        <>
            <Header
                images={images}
            />
            <Cards
                questions={shuffledQuestions}
                setTotalAnswered={() => setTotalAnswered(totalAnswered + 1)}
                setStatusList={(status) => setStatusList([...statusList, status])}
                images={images}
            />
            <Footer
                questions={shuffledQuestions}
                totalAnswered={totalAnswered}
                statusList={statusList}
                images={images}
            />
        </>
    )
}