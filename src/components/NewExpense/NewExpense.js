import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = props => {
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    // console.log(expenseData)
    props.onAddExpense(expenseData)
    setAddNewExpenseState(false)
  }
  const [addNewExpenseState, setAddNewExpenseState] = useState(false)

  const addNewExpensesHandler = () => {
    setAddNewExpenseState(true)
  }

  const cancelAddNewExpensesHandler = () => {
    setAddNewExpenseState(false)
  }
  return (
    <div className="new-expense">
      {!addNewExpenseState && (
        <button onClick={addNewExpensesHandler}>Add New Expenses</button>
      )}
      {addNewExpenseState && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelAddNewExpensesHandler}
        />
      )}
    </div>
  )
}

export default NewExpense
