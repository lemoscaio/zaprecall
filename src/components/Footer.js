export default function Footer() {
    return (
        <footer className="o-footer">
            <div className="o-footer__title">
                <img className="o-footer__title-icon" src="./assets/images/sad.png" alt="" srcset="" />
                <p className="o-footer__title-text">
                    PARABÉNS!
                </p>
            </div>
            <p className="o-footer__main-message">
                Ainda faltam alguns...Mas não desanime!
            </p>
            {/* <p className="o-footer__card-counter">
                0/4 CONCLUÍDOS
            </p> */}
            {/* <p className="o-footer__main-message">
                Você não esqueceu de nenhum flashcard!
            </p> */}
            <div className="o-footer__icons">
                <span className="o-footer__icon u-wrong">
                    <ion-icon name="close-circle"></ion-icon>
                </span>
                <span className="o-footer__icon u-almost-wrong">
                    <ion-icon name="help-circle"></ion-icon>
                </span>
                <span className="o-footer__icon u-right">
                    <ion-icon name="checkmark-circle"></ion-icon>
                </span>
            </div>
        </footer>
    )
}


