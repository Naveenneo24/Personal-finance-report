import React, { useCallback, useMemo, useState } from 'react'

const useFinancialData = () => {

const[income,setIncome] = useState(0)
const[expenses,setExpenses] = useState([])

// const addIncome = (income) =>{
//     console.log("add income")
//     setincome(income)
// }

const addIncome = useCallback((amount)=>setIncome(amount),[])


// const addExpense =(expense)=>{
    
//     console.log("add expense income")
//     setExpenses((prev)=>[...prev,expense]);
// }

const addExpense = useCallback((expense)=>
{
    console.log("add expense income")
    setExpenses((prev)=>[...prev,expense]);
},[])

//const totalExpenses = expenses.reduce((total,exp) => total+exp.amount,0);

const totalExpenses = useMemo(()=>{
    return expenses.reduce((total,exp)=>total+exp.amount,0)
},[expenses])

// const remainingBudget =()=>{
//      income-totalExpenses;
// }

const remainingBudget= useMemo(()=>  income - totalExpenses,
[income,totalExpenses]);

return{
    income,
    expenses,
    totalExpenses,
    remainingBudget,
    addIncome,
    addExpense
}
  
  
}

export default useFinancialData
