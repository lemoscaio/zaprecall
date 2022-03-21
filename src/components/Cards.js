import Card from "./Card.js";

export default function Cards({ questions, setTotalAnswered, setStatusList }) {

    return (
        <main className="main">
            <div className="main__cards cards">
                {questions.map((question, index) => {
                    return <Card
                        question={question}
                        index={index}
                        setTotalAnswered={setTotalAnswered}
                        setStatusList={setStatusList}
                    />
                })}
            </div>
        </main>
    )
}

