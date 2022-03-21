export default function Footer(props) {
    const { questions, totalAnswered, statusList } = props
    console.log(statusList)

    const iconsDiv = <>
        <div className="footer__icons">
            {statusList.map((item) => {
                if (item === "wrong") {
                    return (
                        <span className="footer__icon wrong">
                            <ion-icon name="close-circle"></ion-icon>
                        </span>
                    )
                }
                else if (item === "almost-wrong") {
                    return (
                        <span className="footer__icon almost-wrong">
                            <ion-icon name="help-circle"></ion-icon>
                        </span>
                    )
                }
                else if (item === "right") {
                    return (
                        <span className="footer__icon right">
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </span>
                    )
                }
            })}
        </div></>

    const finalMessage = statusList.includes("wrong") ? <>
        <div className="footer__title">
            <img className="footer__title-icon" src="./assets/images/sad.png" alt="" />
            <p className="footer__title-text">
                Putz...
            </p>
        </div>
        <p className="footer__main-message">
            Ainda faltam alguns...Mas não desanime!
        </p>
    </> : <>
        <div className="footer__title">
            <img className="footer__title-icon" src="./assets/images/party.png" alt="" />
            <p className="footer__title-text">
                PARABÉNS!
            </p>
        </div>
        <p className="footer__main-message">
            Você não esqueceu de nenhum flashcard!
        </p>
    </>


    // TODO CHANGE "u-" from statusList to better logic understanding

    return (
        <footer className="footer">

            {totalAnswered === questions.length && finalMessage}

            <p className="footer__card-counter">
                {totalAnswered}/{questions.length} CONCLUÍDOS
            </p>

            {iconsDiv}

        </footer>
    )
}








