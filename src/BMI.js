import { use, useState } from "react";

const BMI = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [result, setResult] = useState(0);
    const [status, setStatus] = useState("");

    const changeWeight = (e) => setWeight(e.target.value);
    const changeHeight = (e) => setHeight(e.target.value);

    
    const defineStatus = (indexBMI) => {
        if (indexBMI < 18.5) {
            return "Ốm nhom";
        } else if (18.5 <= indexBMI && indexBMI <= 23.99) {
            return "Bình thường";
        } else  {
           return "Bé O";
        }
    }
    
    const bmiCalculate = () => {
        const h = parseFloat(height) / 100; // cm -> m
        const w = parseFloat(weight);
        const result = (w / (h * h)).toFixed(2);
        setResult(result);
        setStatus(defineStatus(result));
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>BMI Calculator</h1>

            <input
                type="number"
                value={weight}
                onChange={changeWeight}
                placeholder="Weight"
            >
            </input>

            <input
                type="number"
                value={height}
                onChange={changeHeight}
                placeholder="Height"
            >
            </input>

            <button onClick={bmiCalculate}>Change Message</button>

            <h3>BMI = {result} {status}</h3>
        </div>
    );

};

export default BMI;