import Card from "./Card.js";

export default function Cards({ questions, setTotalAnswered, setStatusList }) {

    return (
        <main className="o-main">
            <ul className="c-card-list">
                {questions.map((question, index) => {
                    return <Card
                        question={question}
                        index={index}
                        setTotalAnswered={setTotalAnswered}
                        setStatusList={setStatusList}
                    />
                })}
            </ul>
        </main>
    )
}

