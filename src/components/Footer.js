export default function Footer(props) {
    const { questions, totalAnswered, statusList } = props
    console.log(statusList)

    const iconsDiv = <>
        <div className="o-footer__icons">
            {statusList.map((item) => {
                if (item === "u-wrong") {
                    return (
                        <span className="o-footer__icon u-wrong">
                            <ion-icon name="close-circle"></ion-icon>
                        </span>
                    )
                }
                else if (item === "u-almost-wrong") {
                    return (
                        <span className="o-footer__icon u-almost-wrong">
                            <ion-icon name="help-circle"></ion-icon>
                        </span>
                    )
                }
                else if (item === "u-right") {
                    return (
                        <span className="o-footer__icon u-right">
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </span>
                    )
                }
            })}
        </div></>

    const finalMessage = statusList.includes("u-wrong") ? <>
        <div className="o-footer__title">
            <img className="o-footer__title-icon" src="./assets/images/sad.png" alt="" />
            <p className="o-footer__title-text">
                Putz...
            </p>
        </div>
        <p className="o-footer__main-message">
            Ainda faltam alguns...Mas não desanime!
        </p>
    </> : <>
        <div className="o-footer__title">
            <img className="o-footer__title-icon" src="./assets/images/party.png" alt="" />
            <p className="o-footer__title-text">
                PARABÉNS!
            </p>
        </div>
        <p className="o-footer__main-message">
            Você não esqueceu de nenhum flashcard!
        </p>
    </>


    // TODO CHANGE "u-" from statusList to better logic understanding

    return (
        <footer className="o-footer">

            {totalAnswered === questions.length && finalMessage}

            <p className="o-footer__card-counter">
                {totalAnswered}/{questions.length} CONCLUÍDOS
            </p>

            {iconsDiv}

        </footer>
    )
}








