import "./CategoryOutput.css"

function CategoryOutput(props) {
    return (
        <div className="output-container">
            <div>
                <h1>{props.age}</h1>
            </div>
            <div>
                <h2>{props.date.toLowerCase()}s</h2>
            </div>
        </div>
    )
}

export default CategoryOutput;