import React, { useState } from "react";

export const ExpenseTracker = () => {
    const [expName, setExpName] = useState("");
    const [expValue, setExpValue] = useState("");
    const [expDetails, setExpDetails] = useState([]);

    const addExpense = (e) => {
        e.preventDefault();
        // Add new expense to the expDetails array
        setExpDetails([...expDetails, { name: expName, value: parseFloat(expValue) }]);
        // Clear the input fields after adding expense
        setExpName("");
        setExpValue("");
    }

    const calculateTotalExpense = () => {
        return expDetails.reduce((total, expense) => total + expense.value, 0);
    }

    return (
        <div>
            <h1>ExpenseTracker</h1>
            <form onSubmit={addExpense}>
                <input type="text" placeholder="name" value={expName} onChange={(e) => setExpName(e.target.value)} />
                <input type="number" placeholder="value" value={expValue} onChange={(e) => setExpValue(e.target.value)} />
                <button type="submit">Add</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {expDetails.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.name}</td>
                            <td>{expense.value}</td>
                        </tr>
                    ))}
                    <tr>
                        <td>Total Expense:</td>
                        <td>{calculateTotalExpense()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
