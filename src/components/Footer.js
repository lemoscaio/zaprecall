import React from 'react'

export default function Footer(props) {
    const { questions, setQuestions, initialQuestionsState, statusList, setStatusList, homeScreen, setHomeScreen, images } = props

    const [totalAnswered, setTotalAnswered] = React.useState(0)

    function resetStates() {
        setQuestions([...initialQuestionsState])
        setTotalAnswered(0)
        setStatusList([])
        setHomeScreen(!homeScreen)
    }

    React.useEffect(() => {
        questions.forEach((question) => {
            if (question.answered) setTotalAnswered(totalAnswered + 1)
        })
    }, [questions])

    const iconsDiv = <>
        <div className="footer__icons">
            {statusList.map((item, index) => {
                let statusIcon
                if (item === "wrong") {
                    statusIcon = (
                        <span key={index} className="footer__icon wrong">
                            <ion-icon name="close-circle"></ion-icon>
                        </span>
                    )
                }
                else if (item === "almost-wrong") {
                    statusIcon = (
                        <span key={index} className="footer__icon almost-wrong">
                            <ion-icon name="help-circle"></ion-icon>
                        </span>
                    )
                }
                else if (item === "right") {
                    statusIcon = (
                        <span key={index} className="footer__icon right">
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </span>
                    )
                }
                return statusIcon
            })}
        </div></>

    const finalMessage = statusList.includes("wrong") ? <>
        <div className="footer__title">
            <img className="footer__title-icon" src={images.sad} alt="" />
            <p className="footer__title-text">
                Putz...
            </p>
        </div>
        <p className="footer__main-message">
            Ainda faltam alguns...Mas não desanime!
        </p>
    </> : <>
        <div className="footer__title">
            <img className="footer__title-icon" src={images.party} alt="" />
            <p className="footer__title-text">
                PARABÉNS!
            </p>
        </div>
        <p className="footer__main-message">
            Você não esqueceu de nenhum flashcard!
        </p>
    </>

    const resetButton = <>
        <button onClick={() => resetStates()} type="button" className="footer__reset-button">REINICIAR RECALL</button>
    </>


    return (
        <footer className="footer">

            {totalAnswered === questions.length && finalMessage}

            <p className="footer__card-counter">
                {totalAnswered}/{questions.length} CONCLUÍDOS
            </p>

            {iconsDiv}

            {totalAnswered === questions.length && resetButton}

        </footer>
    )
}








