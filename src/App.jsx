import {useState} from 'react'
// import components
import Header from "./components/Header.jsx";


function App() {
  // define Budget State
  const [budget, setBudget] = useState(0)
  // define state and manage if the budget is valid
  const [isValidBudget, setIsValidBudget] = useState(false)
  return (
      <>
        <Header
            budget={budget}
            setBudget={setBudget}
            isValidBudget={isValidBudget}
            setIsValidBudget={setIsValidBudget}
        />
      </>
  )
}

export default App
