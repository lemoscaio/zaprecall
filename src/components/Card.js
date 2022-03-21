import React from 'react';

export default function Card(props) {
    const { question: { question, answer }, index, setTotalAnswered, setStatusList } = props

    const [isOpened, setIsOpened] = React.useState(false)
    const [isTurned, setIsTurned] = React.useState(false)
    const [status, setStatus] = React.useState(null)


    const isOpenedCSS = isOpened ? "is-opened" : ""
    const isTurnedCSS = isTurned ? "turned" : ""

    let statusIcon
    if (!status) {
        statusIcon = "play-outline"
    } else if (status === "wrong") {
        statusIcon = "close-circle"
    } else if (status === "almost-wrong") {
        statusIcon = "help-circle"
    } else if (status === "right") {
        statusIcon = "checkmark-circle"
    }


    // TODO make some way to close the card wihtout needing to answer again
    // TODO disable buttons after answering
    // TODO change "u-" on status to simplify logic

    function setAndStoreStatus(event, status) {
        setTotalAnswered()
        setStatus(status)
        setStatusList(status)
        setIsOpened(false)
        setIsTurned(false)
        event.stopPropagation()
    }

    const frontFaceContent = !isOpened ?
        <>
            <p className={`card__number ${status}`}>
                Pergunta {index + 1}
            </p >
            <span className={`card__icon ${status}`}>
                <ion-icon name={statusIcon}></ion-icon>
            </span>
        </> :
        <>
            <h2 className="card__question">
                {question}
            </h2>
            <img onClick={() => { setIsTurned(true) }} className="card__turn-icon" src="./assets/images/turn-arrow.png" alt="Seta em 360 graus" />
        </>

    const backFaceContent = isTurned ?
        <>
            <h2
                className="card__question">
                {answer}
            </h2>
            <div className="card__buttons">
                <button onClick={(event) => {
                    setAndStoreStatus(event, "wrong")
                }} className=" card__button card__button--wrong">Não lembrei</button>
                <button onClick={(event) => {
                    setAndStoreStatus(event, "almost-wrong")
                }} className=" card__button card__button--almost-wrong">Quase não lembrei</button>
                <button onClick={(event) => {
                    setAndStoreStatus(event, "right")
                }} className=" card__button card__button--right">Zap!</button>
            </div>
        </> : ""

    return (
        <article onClick={() => setIsOpened(true)} className={`cards__card card ${isOpenedCSS} ${isTurnedCSS}`}>
            <div className="card__face card__face--front">
                {frontFaceContent}
            </div>
            <div className="card__face card__face--back">
                {backFaceContent}
            </div>
        </article>
    )
}