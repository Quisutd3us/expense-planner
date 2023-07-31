import {useState, useEffect} from 'react'
// import components
import Header from "./components/Header.jsx";
// import helpers
import {formatDates, genId} from "./helpers/index.js"
// import images
import iconNewSpent from './img/nuevo-gasto.svg'
import InsertBills from "./components/InsertBills.jsx";
import ListBills from "./components/ListBills.jsx";

function App() {

  // set state for Edit Bills
  const [editBill, setEditBill] = useState({})
  // set state for bills component
  const [bills, setBills] = useState(
      localStorage.getItem('bills') ? JSON.parse(localStorage.getItem('bills')) : []
  )
  // define Budget State
  const [budget, setBudget] = useState(
      Number(localStorage.getItem('budget') ?? 0)
  )
  // define state and manage if the budget is valid
  const [isValidBudget, setIsValidBudget] = useState(false)
  // create and define state for show modal
  const [modal, setModal] = useState(false)
  // create state to manage animateModal
  const [animateModal, setAnimateModal] = useState(false)

  // save bills on localStorage
  useEffect(() => {
    localStorage.setItem('bills', JSON.stringify(bills) ?? [])
  }, [bills])
  // save budget on LocalStorage
  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0)
  }, [budget])

  // save budget on LocalStorage
  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget'))
    if (budgetLS > 0) {
      setIsValidBudget(true)
    }
  }, [])

  // looking for changes in editBill object
  useEffect(() => {
    if (Object.keys(editBill).length > 0) {
      setModal(true)
      // manage time for add 'animate' class in component
      setTimeout(() => {
        setAnimateModal(true)
      }, 500)
    }
  }, [editBill])

  // delete bill function

  const delBill = id => {
    const updateBills = bills.filter(billState => billState.id !== id)
    setBills(updateBills)
  }

  // handle click to show modal insertBill.jsx
  const handleNewSpent = () => {
    setEditBill({})
    setModal(true)
    // manage time for add 'animate' class in component
    setTimeout(() => {
      setAnimateModal(true)
    }, 500)
  }

  // this function creates a new bill in Bills Array

  const saveBills = (bill) => {
    if (bill.id) {
      const updateBills = bills.map(billState => billState.id === bill.id ? bill : billState)
      setBills(updateBills)
      setEditBill({})
    } else {
      // set new bill
      bill.id = genId()
      bill.date = formatDates(Date.now())
      setBills([bill, ...bills])
    }


    // closing modal
    setAnimateModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  return (
      <div className={modal ? 'pinup' : ''}>
        <Header
            budget={budget}
            setBudget={setBudget}
            isValidBudget={isValidBudget}
            setIsValidBudget={setIsValidBudget}
            bills={bills}
        />
        {/*bottom new Spent*/}
        {
            isValidBudget && (
                <>
                  <main>
                    <ListBills
                        bills={bills}
                        modal={modal}
                        setEditBill={setEditBill}
                        delBill={delBill}
                    />
                  </main>
                  <div className={'nuevo-gasto'}>
                    <img
                        src={iconNewSpent}
                        alt={'New Spent'}
                        onClick={handleNewSpent}
                    />
                  </div>
                </>
            )
        }
        {modal &&
            <InsertBills
                setModal={setModal}
                animateModal={animateModal}
                setAnimateModal={setAnimateModal}
                saveBills={saveBills}
                editBill={editBill}
                setEditBill={setEditBill}
            />
        }
      </div>
  )
}

export default App
