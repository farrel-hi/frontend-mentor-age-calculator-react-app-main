import React, { useState } from "react";
import "./Main.css";
import convertImage from "../assets/images/icon-arrow.svg"
import CategoryInput from "./components/CategoryInput";
import CategoryOutput from "./components/CategoryOutput";
// import DividerButton from "./components/DividerButton";

function Main() {
    const dates = [
        {
            date: "DAY",
            warning: "Must be a valid day",
            placeholder: "DD",
            value: 0,
            age: 0
        },
        {
            date: "MONTH",
            warning: "Must be a valid month",
            placeholder: "MM",
            value: 0,
            age: 0
        },
        {
            date: "YEAR",
            warning: "Must be in the past",
            placeholder: "YYYY",
            value: 0,
            age: 0
        }
    ]

    const addDataInput = date => {
        if (date.type === "DAY") {
            dates[0].value = date.value;
        }
        else if (date.type === "MONTH") {
            dates[1].value = date.value;
        }
        else if (date.type === "YEAR") {
            dates[2].value = date.value;
        }
    }

    const calculateAge = () => {
        const acquireDateStr = dates[2].value + "-" + dates[1].value + "-" + dates[0].value;
        const acquireDate = new Date(acquireDateStr);

        //Calculate the number of years since 1970/01/01:
        const minute = 1000 * 60;
        const hour = minute * 60;
        const day = hour * 24;
        // const year = day * 365;

        // let years = Math.round(Date.now() / year);    
        let days = Math.round(Date.now() / day);
        let userAgeDays = Math.round(acquireDate.getTime()/day);

        let totalDaysSinceBirth = days-userAgeDays;
        let yearOld = totalDaysSinceBirth/365;
        let monthOld = (totalDaysSinceBirth%365)/30;
        let dayOld = (totalDaysSinceBirth%365)%30;
        // console.log(Math.trunc(yearOld));
        // console.log(Math.trunc(monthOld));
        // console.log(Math.trunc(dayOld));
        dates[0].age = Math.trunc(dayOld);
        dates[1].age = Math.trunc(monthOld);
        dates[2].age = Math.trunc(yearOld);
        console.log(dates[0]);
        console.log(dates[1]);
        console.log(dates[2]);
    }

    return (
        <div className="mainContainer">
            <article className="inputContainer">
                <CategoryInput onDataInput={addDataInput} date={dates[0].date} warning={dates[0].warning} placeholder={dates[0].placeholder} />
                <CategoryInput onDataInput={addDataInput} date={dates[1].date} warning={dates[1].warning} placeholder={dates[1].placeholder} />
                <CategoryInput onDataInput={addDataInput} date={dates[2].date} warning={dates[2].warning} placeholder={dates[2].placeholder} />
            </article>
            <div className="divider">
                <hr></hr>
                <img src={convertImage} alt="convert-button-image" onClick={calculateAge} />
            </div>
            {/* <DividerButton /> */}
            <article>
                <CategoryOutput date={dates[2].date} age={dates[2].age} />
                <CategoryOutput date={dates[1].date} age={dates[1].age} />
                <CategoryOutput date={dates[0].date} age={dates[0].age}/>
            </article>
        </div>
    )
}

export default Main;