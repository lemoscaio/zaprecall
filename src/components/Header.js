import React from 'react'

export default function Header({ images, checkScroll, scrollClassCSS }) {

    return (
        <header className={`header ${scrollClassCSS[0]}`}>
            <img className="header__icon" src={images.smallLogo} alt="Logo do ZapRecall: Um raio amarelo." />
            <h1 className="header__title">ZapRecall</h1>
        </header>
    )
}