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

export default function Main() {

    return (
        <main className="o-main">
            <ul className="c-card-list">
                {questions.map((question) => {
                    return <Card question={question} />
                })}


                <li className="c-card-list__item">
                    <article className="c-card-list__card c-card is-opened">
                        <div className="c-card__face c-card__face--front">
                            <h2 className="c-card__question">
                                O que é JSX?
                            </h2>
                            <img className="c-card__turn-icon" src="./assets/images/turn-arrow.png" alt="Seta em 360 graus" />
                        </div>
                        <div className="c-card__face c-card__face--back">
                            <h2
                                className="c-card__question">
                                JSX é uma sintaxe para escrever HTML dentro do JS
                            </h2>
                            <div className="c-card__buttons">
                                <button className=" c-card__button c-card__button--wrong">Não lembrei</button>
                                <button className=" c-card__button c-card__button--almost-wrong">Quase não lembrei</button>
                                <button className=" c-card__button c-card__button--right">Zap!</button>
                            </div>
                        </div>
                    </article>
                </li>
                <li className="c-card-list__item">
                    <article className="c-card-list__card c-card">
                        <p className="c-card__number">
                            Pergunta 2
                        </p>
                        <span className="c-card__icon">
                            <ion-icon name="play-outline"></ion-icon>
                        </span>
                    </article>
                </li>
                <li className="c-card-list__item">
                    <article className="c-card-list__card c-card u-wrong">
                        <p className="c-card__number">
                            Pergunta 3
                        </p>
                        <span className="c-card__icon">
                            <ion-icon name="close-circle"></ion-icon>
                        </span>
                    </article>
                </li>
                <li className="c-card-list__item">
                    <article className="c-card-list__card c-card u-almost-wrong">
                        <p className="c-card__number">
                            Pergunta 4
                        </p>
                        <span className="c-card__icon">
                            <ion-icon name="help-circle"></ion-icon>
                        </span>
                    </article>
                </li>
                <li className="c-card-list__item">
                    <article className="c-card-list__card c-card u-right">
                        <p className="c-card__number">
                            Pergunta 5
                        </p>
                        <span className="c-card__icon">
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </span>
                    </article>
                </li>
            </ul>
        </main>
    )
}

