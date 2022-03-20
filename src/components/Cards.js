import Card from "./Card.js";

export default function Cards({ questions, setTotalAnswered }) {
    return (
        <main className="o-main">
            <ul className="c-card-list">
                {questions.map((question, index) => {
                    return <Card question={question} index={index} setTotalAnswered={setTotalAnswered}/>
                })}
            </ul>
        </main>
    )
}

