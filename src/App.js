import { useState } from "react";

const Wellcome = () => {
    const [name, setName] = useState("NghiaTH");
    const [message, setMessage] = useState(`Hello, wellcome to ${name}`);

    const inputChange = (e) => setName(e.target.value);
    const submitChange = () => setMessage(`Hello, wellcome to ${name}`);

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>{message}</h1>

            <input
                type="text"
                value={name}
                onChange={inputChange}
            >
            </input>
            <button onClick={submitChange}>Change Message</button>
        </div>
    );

};

export default Wellcome;
