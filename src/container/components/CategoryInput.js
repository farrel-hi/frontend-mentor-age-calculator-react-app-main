import "./CategoryInput.css"

function CategoryInput(props){
    return(
        <div className="input-container">
            <p>{props.date}</p>
            <input type='text'></input>
            <p id="warning-desc">{props.warning}</p>
        </div>
    )
}

export default CategoryInput;