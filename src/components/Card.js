import React from 'react';

export default function Card({ question: { question, answer }, index }) {
    const [isOpened, setIsOpened] = React.useState(false)
    const [isTurned, setIsTurned] = React.useState(false)

    const isOpenedCSS = isOpened ? "is-opened" : ""
    const isTurnedCSS = isTurned ? "turned" : ""

    const frontFaceContent = !isOpened ?
        <>
            <p className="c-card__number">
                Pergunta {index + 1}
            </p >
            <span className="c-card__icon">
                <ion-icon name="play-outline"></ion-icon>
            </span>
        </> :
        <>
            <h2 className="c-card__question">
                {question}
            </h2>
            <img onClick={() => {setIsTurned(true)}} className="c-card__turn-icon" src="./assets/images/turn-arrow.png" alt="Seta em 360 graus" />
        </>

    const backFaceContent = isTurned ?
        <>
            <h2
                className="c-card__question">
                {answer}
            </h2>
            <div className="c-card__buttons">
                <button className=" c-card__button c-card__button--wrong">Não lembrei</button>
                <button className=" c-card__button c-card__button--almost-wrong">Quase não lembrei</button>
                <button className=" c-card__button c-card__button--right">Zap!</button>
            </div>
        </> : ""

    return (
        <li className="c-card-list__item">
            <article onClick={() => setIsOpened(true)} className={`c-card-list__card c-card ${isOpenedCSS} ${isTurnedCSS}`}>
                <div className="c-card__face c-card__face--front">
                    {frontFaceContent}
                </div>
                <div className="c-card__face c-card__face--back">
                    {backFaceContent}
                </div>
            </article>
        </li>
    )
}