import React from 'react'

export default function Card(props) {
    const { question: { question, answer }, index, setTotalAnswered, setStatusList, images } = props

    const [isOpened, setIsOpened] = React.useState(false)
    const [isTurned, setIsTurned] = React.useState(false)
    const [status, setStatus] = React.useState(null)


    const isOpenedCSS = isOpened ? "is-opened" : ""
    const isTurnedCSS = isTurned ? "turned" : ""
    const disabledCSS = status ? "is-disabled" : ""

    let statusIcon
    switch (status) {
        case "wrong":
            statusIcon = "close-circle"
            break
        case "almost-wrong":
            statusIcon = "help-circle"
            break
        case "right":
            statusIcon = "checkmark-circle"
            break
        default:
            statusIcon = "play-outline"
    }

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
            <img onClick={() => { setIsTurned(true) }} className="card__turn-icon" src={images.turnIcon} alt="Seta em 360 graus" />
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
        <article onClick={() => setIsOpened(true)} className={`cards__card card ${isOpenedCSS} ${isTurnedCSS} ${disabledCSS}`}>
            <div className="card__face card__face--front">
                {frontFaceContent}
            </div>
            <div className="card__face card__face--back">
                {backFaceContent}
            </div>
        </article>
    )
}