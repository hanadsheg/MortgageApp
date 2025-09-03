import InputCalculator from './Input.jsx'
import Result from './Result.jsx'
import '../styles/calculator.css'
import {calculateInterestPaid, calculateMonthlyPayment, calculateTotalMortgage} from '../utility.jsx'
import { useState } from 'react';

function Calculator() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [mortgage, setMortgage] = useState("");
    const [interest, setInterest] = useState("");
    const [loanTime, setLoanTime] = useState("");

    const [totalAmount, setTotalAmount] = useState(0);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [interestPaid, setInterestPaid] = useState(0);


    const handleSubmit = (e) => {
            e.preventDefault();
        

        // Convert to numbers and trim whitespace
        
        const mortgageN = Number(mortgage);
        const interestN = Number(interest);
        const loanTimeN = Number(loanTime);
        


        console.log(mortgage, interest, loanTime);
        console.log(mortgageN, interestN, loanTimeN);

         
        // Validate all are valid numbers
        try {
            if (!Number.isNaN(mortgageN) && !Number.isNaN(interestN) && !Number.isNaN(loanTimeN)) {

            // Calculate values
            const total = calculateTotalMortgage(mortgageN, interestN, loanTimeN);
            const monthly = calculateMonthlyPayment(mortgageN, interestN, loanTimeN);
            const interestTotal = total - mortgageN;
            
            // Update state
            setTotalAmount(total.toFixed(2));
            setMonthlyPayment(monthly.toFixed(2));
            setInterestPaid(interestTotal.toFixed(2));
            setIsSubmitted(true);
            
            console.log(total, monthly, interestTotal);
        } else {
            alert("Please enter valid numbers in all fields (don't leave spaces!)");
        }

        }
        catch (error) {
            console.error("Error parsing input values:", error);
        }

        
            
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case "mortgage":
                setMortgage(value);
                break;
            case "interest":
                setInterest(value);
                break;
            case "loanTime":
                setLoanTime(value);
                break;
            default:
                break;
        }

    
    }

    return (
        <div className="calculator-container">
            <form className="calculator-form" onSubmit={handleSubmit}>
                <h2 className="calculator-title">Mortgage Calculator</h2>
                <div className="input-container">
                    <InputCalculator 
                        inputTitle="Mortgage Amount" 
                        inputMeasure="$" 
                        value={mortgage}
                        name="mortgage"
                        onChange={handleChange}
                    />
                    <InputCalculator 
                        inputTitle="Interest Rate" 
                        inputMeasure="%"
                        name="interest"
                        value={interest} 
                        onChange= {handleChange}
                    />
                    <InputCalculator 
                        inputTitle="Loan Term" 
                        inputMeasure="Years"
                        name="loanTime"
                        value={loanTime}
                        onChange= {handleChange}
                    />
                </div>
                <button type="submit" className="calculate-button">Calculate</button>
            </form>
            
                {isSubmitted && (
                    <div className = "result-container">
                        <Result outputTitle="Total Amount" outputValue=  {"£ " +totalAmount} />
                        <Result outputTitle="Monthly Payment" outputValue={"£ " + monthlyPayment} />
                        <Result outputTitle="Interest Paid" outputValue={"£ " + interestPaid} />
                    </div>
                )}
        </div>
    );
}




export default Calculator;