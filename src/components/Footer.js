export default function Footer(props) {
    const { questions, totalAnswered, statusList } = props
    console.log(statusList)

    return (
        <footer className="o-footer">

            <p className="o-footer__card-counter">
                {totalAnswered}/{questions.length} CONCLUÍDOS
            </p>

            {/* TODO CHANGE "u-" to better logic understanding */}

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
            </div>

        </footer>
    )
}








