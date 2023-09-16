import React, { useState } from "react";

import "./CategoryInput.css"

function CategoryInput(props,{onQuery}) {
    const [value, setValue] = useState('');
    const [pickColor, setPickColor] = useState('#FFFFFF');
    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);

    function checkValidDate(dateValue) {
        if (props.date === 'DAY') {
            if (dateValue < 1 || dateValue > 31) {
                setDay(dateValue);
                setPickColor("#FF0000");
            }
        }
        else if (props.date === 'MONTH') {
            if (dateValue < 1 || dateValue > 12) {
                setMonth(dateValue);
                setPickColor("#FF0000");
            }
        }
        else if (props.date === 'YEAR') {
            if (dateValue < 1900 || dateValue > 2023) {
                setYear(dateValue);
                setPickColor("#FF0000");
            }
        }
    }

    function checkInputType(checkValue) {
        if (parseInt(checkValue) * 1 !== parseInt(checkValue)) {
            setPickColor("#FF0000");
        }
        else {
            setPickColor("#FFFFFF");
            checkValidDate(checkValue);
        }
    }

    const changeHandler = event => {
        let newValue = event.target.value;
        setValue(newValue);

        checkInputType(newValue);
    }

    return (
        <div className="input-container">
            <p>{props.date}</p>
            <input type='text' className="input-field" placeholder={props.placeholder} value={value} onChange={changeHandler}></input>
            <p id="warning-desc" style={{ color: pickColor }}>{props.warning}</p>
        </div>
    )
}

export default CategoryInput;