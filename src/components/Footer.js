export default function Footer({ questions, totalAnswered }) {

    return (
        <footer className="o-footer">

            <p className="o-footer__card-counter">
                {totalAnswered}/{questions.length} CONCLUÍDOS
            </p>

            <div className="o-footer__icons">
                {questions.map((question) => {
                    if (question.status === "wrong") {
                        return (
                            <span className="o-footer__icon u-wrong">
                                <ion-icon name="close-circle"></ion-icon>
                            </span>
                        )
                    }
                    else if (question.status === "almost wrong") {
                        return (
                            <span className="o-footer__icon u-almost-wrong">
                                <ion-icon name="help-circle"></ion-icon>
                            </span>
                        )
                    }
                    else if (question.status === "right") {
                        return (
                            <span className="o-footer__icon u-right">
                                <ion-icon name="checkmark-circle"></ion-icon>
                            </span>
                        )
                    }
                })}
            </div>

        </footer>
    )
}








