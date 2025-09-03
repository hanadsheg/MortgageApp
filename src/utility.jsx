


export function calculateTotalMortgage(mortgageAmount, interestRate, loanTerm) {
  const monthlyPayment = calculateMonthlyPayment(mortgageAmount, interestRate, loanTerm);
  const numberOfPayments = loanTerm * 12;

  const totalPayment = monthlyPayment * numberOfPayments;

  return totalPayment;
}

 export function calculateMonthlyPayment(mortgageAmount, interestRate, loanTerm) {
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;

  const monthlyPayment = (mortgageAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  return monthlyPayment;
}

export function calculateInterestPaid(mortgageAmount, interestRate ,loanTerm) {
  const totalPayment = calculateTotalMortgage(mortgageAmount, interestRate, loanTerm);
  const principal = mortgageAmount;
  const interestPaid = totalPayment - principal;
  return interestPaid;
}
