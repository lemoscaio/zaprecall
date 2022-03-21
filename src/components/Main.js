import React from 'react'

import Header from "./Header.js"
import Cards from "./Cards.js"
import Footer from "./Footer.js"

import questionsJSON from "./questions.json"

export default function Main({ homeScreen, setHomeScreen, images, checkScroll }) {
    const [questions, setQuestions] = React.useState([...questionsJSON])
    const [initialQuestionsState, setInitialQuestionsState] = React.useState([])
    const [statusList, setStatusList] = React.useState([])

    React.useEffect(() => {
        let shuffledQuestions = questions.sort(() => Math.random() - 0.5)
        setQuestions([...shuffledQuestions])
        setInitialQuestionsState([...shuffledQuestions])
    }, [])

    const [scrollClassCSS, setscrollClassCSS] = React.useState([""])

    function checkScroll() {
        const headerEl = document.querySelector(".main")
        return headerEl.scrollTop > 0 ? setscrollClassCSS(["scrolled"]) : setscrollClassCSS([""])
    }

    return (
        <>
            <Header
                images={images}
                checkScroll={checkScroll}
                scrollClassCSS={scrollClassCSS}
            />
            <Cards
                checkScroll={checkScroll}
                questions={questions}
                setQuestions={setQuestions}
                setStatusList={(status) => setStatusList([...statusList, status])}
                images={images}
            />
            <Footer
                questions={questions}
                setQuestions={setQuestions}
                initialQuestionsState={initialQuestionsState}
                statusList={statusList}
                setStatusList={setStatusList}
                homeScreen={homeScreen}
                setHomeScreen={setHomeScreen}
                images={images}
            />
        </>
    )
}