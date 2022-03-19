import Card from "./Card.js";

const questions = [
    {
        question: "O que é JSX?",
        answer: "JSX é uma sintaxe para escrever HTML dentro do JS"
    },
    {
        question: "O React é __",
        answer: "Uma biblioteca JavaScript para construção de interfaces"
    },
    {
        question: "Componentes devem iniciar com __",
        answer: "Letra maiúscula"
    },
    {
        question: "Podemos colocar __ dentro do JSX",
        answer: "Expressões"
    },
    {
        question: "O ReactDOM nos ajudar __",
        answer: "Interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        question: "Usamos o npm para __",
        answer: "Gerenciar os pacotes necessários e suas dependências"
    },
    {
        question: "Usamos props para __",
        answer: "Passar diferentes informações para componentes "
    },
    {
        question: "Usamos estado (state) para __",
        answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }
]

export default function Cards() {

    return (
        <main className="o-main">
            <ul className="c-card-list">
                {questions.map((question, index) => {
                    return <Card question={question} index={index} />
                })}
            </ul>
        </main>
    )
}

