export default function Header({ images }) {
    return (
        <header className="header">
            <img className="header__icon" src={images.smallLogo} alt="Logo do ZapRecall: Um raio amarelo." />
            <h1 className="header__title">ZapRecall</h1>
        </header>
    )
}