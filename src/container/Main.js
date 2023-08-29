import "./Main.css";
import convertImage from "../assets/images/icon-arrow.svg"
import CategoryInput from "./components/CategoryInput";
import CategoryOutput from "./components/CategoryOutput";

function Main() {
    const dates = [
        {
            date: "DAY",
            warning: "Must be a valid day",
            placeholder: "DD"
        },
        {
            date: "MONTH",
            warning: "Must be a valid month",
            placeholder: "MM"
        },
        {
            date: "YEAR",
            warning: "Must be in the past",
            placeholder: "YYYY"
        }
    ]

    return (
        <div className="mainContainer">
            <article className="inputContainer">
                <CategoryInput date={dates[0].date} warning={dates[0].warning} placeholder={dates[0].placeholder} />
                <CategoryInput date={dates[1].date} warning={dates[1].warning} placeholder={dates[1].placeholder} />
                <CategoryInput date={dates[2].date} warning={dates[2].warning} placeholder={dates[2].placeholder} />
            </article>
            <div className="divider">
                <hr></hr>
                <img src={convertImage} alt="convert-button-image" />
            </div>
            <article>
                <CategoryOutput date={dates[2].date} />
                <CategoryOutput date={dates[1].date} />
                <CategoryOutput date={dates[0].date} />
            </article>
        </div>
    )
}

export default Main;