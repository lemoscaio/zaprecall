import Card from "./Card.js";

export default function Cards({ questions, setQuestions, setStatusList, images, checkScroll }) {
    return (
        <main className="main" onScroll={checkScroll}>
            <div className="main__cards cards" onScroll={checkScroll}>
                {questions.map((question, index) => {
                    return <Card
                        key={index}
                        question={question}
                        questions={questions}
                        setQuestions={setQuestions}
                        index={index}
                        setStatusList={setStatusList}
                        images={images}
                    />
                })}
            </div>
        </main>
    )
}

