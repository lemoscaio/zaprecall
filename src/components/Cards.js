import Card from "./Card.js";

export default function Cards({ questions, setTotalAnswered, setStatusList, images }) {
    return (
        <main className="main">
            <div className="main__cards cards">
                {questions.map((question, index) => {
                    return <Card
                        key={index}
                        question={question}
                        index={index}
                        setTotalAnswered={setTotalAnswered}
                        setStatusList={setStatusList}
                        images={images}
                    />
                })}
            </div>
        </main>
    )
}

