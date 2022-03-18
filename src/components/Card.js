export default function Card({ question: { question, answer } }) {


    return (
        <li className="c-card-list__item">
            <article className="c-card-list__card c-card is-opened">
                <div className="c-card__face c-card__face--front">
                    <h2 className="c-card__question">
                        {question}
                    </h2>
                    <img className="c-card__turn-icon" src="./assets/images/turn-arrow.png" alt="Seta em 360 graus" />
                </div>
                <div className="c-card__face c-card__face--back">
                    <h2
                        className="c-card__question">
                        {answer}
                    </h2>
                    <div className="c-card__buttons">
                        <button className=" c-card__button c-card__button--wrong">Não lembrei</button>
                        <button className=" c-card__button c-card__button--almost-wrong">Quase não lembrei</button>
                        <button className=" c-card__button c-card__button--right">Zap!</button>
                    </div>
                </div>
            </article>
        </li>
    )
}
