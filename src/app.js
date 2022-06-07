import React from "react";

function App(){

    function CalculateBMI(){
        var height = document.getElementById("data-height").value;
        var weight = document.getElementById("data-weight").value;
        var result;
        if(height > 0 && weight > 0){
            result = (weight * 10000)/ (height * height);
            document.getElementById("app-result").innerHTML = `BMI index is  ${result}`;
        }
        else{
            document.getElementById("app-result").innerHTML = "Invalid values";
        }

        
    }


    //Return JSX
    return (
        <div className="app-container">
            <h3 className="app-header">BMI Calculator</h3>
            <div className="app-data-container">
                <input type="number" step="0.01" className="app-data-val" name="height-val" id="data-height" placeholder="Height" />
                <select name="height" id="height" className="data-select">
                    <option value="cm">cms</option>
                    <option value="inch">in</option>
                </select>

            </div>

            <div className="app-data-container">
                <input type="number" step="0.01" className="app-data-val" name="weight-val" id="data-weight" placeholder="Weight" />
                <select name="weight" id="weight" className="data-select">
                    <option value="kg">kg</option>
                    <option value="pound">lbs</option>
                    </select>
            </div>

            <button type="submit" className="app-btn-calc" onClick={CalculateBMI}>Calculate</button>
            <p className="app-notif" id="app-result"></p>
        </div>
    );
}

export default App;