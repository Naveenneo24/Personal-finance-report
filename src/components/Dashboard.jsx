import React from 'react'
import IncomeForm from './IncomeForm'
import ExpenseForm from './ExpenseForm'
import SummaryCard from './SummaryCard'
import useFinancialData from '../hooks/useFinancialData'
import Chart from './Chart'
import PersonalFinanceDashboard from '../report/PersonalFinanceDashboard'

const Dashboard = () => {


    const{income,  expenses,
        totalExpenses,
        remainingBudget,
        addIncome,
        addExpense}= useFinancialData();

    const handleAddIncome = (income)=>{
        addIncome(Number(income)); 
    }

    const handleAddExpense = (newExpense) =>{
      addExpense(newExpense)
    }


  return (
    <div className='dashboard p-6 bg-gradient-to-r from-blue-400 to-purple-100 min-h-screen'>
      <header className='mb-6 text-center'>
        <h1 className='text-5xl font-extrabold text-purple-700'>Personal Finance Tracker</h1>
        <p className='text-lg text-gray-600 mt-2'>Track tour income and expenses</p>
        <PersonalFinanceDashboard  totalExpenses={totalExpenses} expenses={expenses} />
        
      </header>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <IncomeForm onAddIncome={handleAddIncome}/>
        <ExpenseForm onAddExpense={handleAddExpense} />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
        <SummaryCard title="Total income" value={income}/>
        <SummaryCard title="Total Expenses" value={totalExpenses}/>
        <SummaryCard title="Remaining Budget" value={remainingBudget}/>
      </div>
    <div className='mt-8'>
      <Chart data={expenses}/>
    </div>


    </div>
  )
}

export default Dashboard
