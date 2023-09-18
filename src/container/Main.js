import React, {useState} from "react";
import "./Main.css";
import CategoryInput from "./components/CategoryInput";
import CategoryOutput from "./components/CategoryOutput";
import DividerButton from "./components/DividerButton";

function Main() {
    const dates = [
        {
            date: "DAY",
            warning: "Must be a valid day",
            placeholder: "DD",
            value: 0
        },
        {
            date: "MONTH",
            warning: "Must be a valid month",
            placeholder: "MM",
            value: 0
        },
        {
            date: "YEAR",
            warning: "Must be in the past",
            placeholder: "YYYY",
            value: 0
        }
    ]

    const addDataInput = date =>{
        console.log('In Main.js');
        console.log(date.value);
        console.log(date.type);
        if(date.type === "DAY"){
            dates[0].value = date.value;
        }
        else if(date.type === "MONTH"){
            dates[1].value = date.value;
        }
        else if(date.type === "YEAR"){
            dates[2].value = date.value;
        }
        console.log(dates);
    }

    return (
        <div className="mainContainer">
            <article className="inputContainer">
                <CategoryInput onDataInput={addDataInput} date={dates[0].date} warning={dates[0].warning} placeholder={dates[0].placeholder} />
                <CategoryInput onDataInput={addDataInput} date={dates[1].date} warning={dates[1].warning} placeholder={dates[1].placeholder} />
                <CategoryInput onDataInput={addDataInput} date={dates[2].date} warning={dates[2].warning} placeholder={dates[2].placeholder} />
            </article>
            <DividerButton />
            <article>
                <CategoryOutput date={dates[2].date} />
                <CategoryOutput date={dates[1].date} />
                <CategoryOutput date={dates[0].date} />
            </article>
        </div>
    )
}

export default Main;