import "./Main.css";
// import "../../assets/images/icon-arrow.svg"
import CategoryInput from "./components/CategoryInput";
import CategoryOutput from "./components/CategoryOutput";

function Main() {
    const dates = [
        {
            date:"DAY",
            warning:"Must be a valid day"
        },
        {
            date:"MONTH",
            warning:"Must be a valid month"
        },
        {
            date:"YEAR",
            warning:"Must be in the past"
        }
    ]

    return(
        <div className="mainContainer">
            <article>
                <CategoryInput date={dates[0].date} warning={dates[0].warning}/>
                <CategoryInput date={dates[1].date} warning={dates[1].warning}/>
                <CategoryInput date={dates[2].date} warning={dates[2].warning}/>
            </article>
            <div className="divider">
                <hr></hr>
                <img></img>
            </div>
            <article>
                <CategoryOutput date={dates[2].date}/>
                <CategoryOutput date={dates[1].date}/>
                <CategoryOutput date={dates[0].date}/>
            </article>
        </div>
    )
}

export default Main;