// import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'
import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2022')
  const filterChangeHandler = filterChangeData => {
    setFilteredYear(filterChangeData)
  }

  const filteredExpenseData = props.expenses.filter(
    expensesData => expensesData.date.getFullYear() === parseInt(filteredYear)
  )

  // const expensesFilteredData =
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenseData} />
      <ExpensesList expenses={filteredExpenseData} />
    </Card>
  )
}

export default Expenses
