import Card from "./Card.js";

export default function Cards({ questions, setQuestions, setStatusList, images }) {
    return (
        <main className="main">
            <div className="main__cards cards">
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

