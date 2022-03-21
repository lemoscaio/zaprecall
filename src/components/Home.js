export default function Home({setHomeScreen, homeScreen, images}) {
    return (
        <div className="home">
            <img className="home__icon" src={images.logo} alt="Logo do ZapRecall: Um raio amarelo." />
            <h1 className="home__title">ZapRecall</h1>
            <button
                className="home__button"
                onClick={() => setHomeScreen(!homeScreen)}>
                Iniciar Recall!
            </button>
        </div>
    )
}