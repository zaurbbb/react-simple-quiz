import Answer from "./Answer";

const  Question = ({questions}) => {
    console.log("Question", questions)
    return (
        <div>
            <div className="question">1000 - 7?</div>
            <div className="answers">
                <Answer />
                <Answer />
                <Answer />
                <Answer />
            </div>

        </div>
    )
}

export default Question