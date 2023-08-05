import React, { useState, useEffect } from 'react';

function NumberOperations() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleAddition = () => {
        const sum = parseFloat(num1) + parseFloat(num2);
        setResult(`Addition Result: ${sum}`);
        alert("Addition button clicked!");
    };

    const handleSubtraction = () => {
        const diff = parseFloat(num1) - parseFloat(num2);
        setResult(`Subtraction Result: ${diff}`);
    };

    useEffect(() => {
        document.getElementById("addition-btn").addEventListener("click", handleAddition);

        return () => {
            document.getElementById("addition-btn").removeEventListener("click", handleAddition);
        };
    }, []);

    return (
        <div>
            <div>
                <label>Number One:</label>
                <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
            </div>
            <div>
                <label>Number Two:</label>
                <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
            </div>
            <div>
                <button id="addition-btn" onClick={handleAddition}>Addition</button>
                <button onClick={handleSubtraction}>Subtraction</button>
            </div>
            <div>
                <p>{result}</p>
            </div>
        </div>
    );
}

export default NumberOperations;
