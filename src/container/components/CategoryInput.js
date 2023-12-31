import React, { useState } from "react";

import "./CategoryInput.css"

function CategoryInput(props) {
    const [value, setValue] = useState('');
    const [pickColor, setPickColor] = useState('#FFFFFF');

    function addDateValue(addValue) {
        const transferData = {
            value: addValue,
            type: props.date
        }
        props.onDataInput(transferData)
    }

    function checkValidDate(dateValue) {
        if (props.date === 'DAY') {
            if (dateValue < 1 || dateValue > 31) {
                setPickColor("#FF0000");
            }
            else {
                addDateValue(dateValue);
            }
        }
        else if (props.date === 'MONTH') {
            if (dateValue < 1 || dateValue > 12) {
                setPickColor("#FF0000");
            }
            else {
                addDateValue(dateValue);
            }
        }
        else if (props.date === 'YEAR') {
            if (dateValue < 1900 || dateValue > 2023) {
                setPickColor("#FF0000");
            }
            else {
                addDateValue(dateValue);
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
        <form className="input-container">
            <p>{props.date}</p>
            <input
                type='text'
                className="input-field"
                placeholder={props.placeholder}
                value={value}
                onChange={changeHandler}
            />
            <p id="warning-desc" style={{ color: pickColor }}>{props.warning}</p>
        </form>
    )
}

export default CategoryInput;