// TODO Change all images to src

export default function Home(props) {
    console.log(props)
    return (
        <div className="home">
            <img className="home__icon" src="./assets/images/logo.png" alt="Logo do ZapRecall: Um raio amarelo." />
            <h1 className="home__title">ZapRecall</h1>
            <button
                className="home__button"
                onClick={() => props.setHomeScreen(!props.homeScreen)}>
                Iniciar Recall!
            </button>
        </div>
    )
}