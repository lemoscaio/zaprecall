// TODO Change all images to src

export default function Home(props) {
    console.log(props)
    return (
        <div className="o-home">
            <img className="o-home__icon" src="./assets/images/logo.png" alt="Logo do ZapRecall: Um raio amarelo." />
            <h1 className="o-home__title">ZapRecall</h1>
            <button
                className="o-home__button"
                onClick={() => props.setHomeScreen(!props.homeScreen)}>
                Iniciar Recall!
            </button>
        </div>
    )
}