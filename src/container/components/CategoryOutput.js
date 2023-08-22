import "./CategoryOutput.css"

function CategoryOutput(props){
    return(
        <div>
            <h1>--</h1>
            <h1>{props.date.toLowerCase()}s</h1>
        </div>
    )
}

export default CategoryOutput;