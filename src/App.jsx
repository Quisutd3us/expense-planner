import {useState, useEffect} from 'react'
// import components
import Header from "./components/Header.jsx";
// import images
import iconNewSpent from './img/nuevo-gasto.svg'
import InsertBills from "./components/InsertBills.jsx";
import ListBills from "./components/ListBills.jsx";
import {formatDates, genId} from "./helpers/index.js";

function App() {
  // set state for Edit Bills
  const [editBill, setEditBill] = useState({})
  // set state for bills component
  const [bills, setBills] = useState([])
  // define Budget State
  const [budget, setBudget] = useState(0)
  // define state and manage if the budget is valid
  const [isValidBudget, setIsValidBudget] = useState(false)
  // create and define state for show modal
  const [modal, setModal] = useState(false)
  // create state to manage animateModal
  const [animateModal, setAnimateModal] = useState(false)


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

  // handle click to add new Spent
  const handleNewSpent = () => {
    setModal(true)
    setEditBill({})
    // manage time for add 'animate' class in component
    setTimeout(() => {
      setAnimateModal(true)
    }, 500)
  }

  const saveBills = (bill) => {
    if (bill.id) {
      const date = formatDates(Date.now())
      bill.date = date
      // updated bill
      const updatedBills = bills.map((billState) => billState.id === bill.id ? bill : billState)
      setBills(updatedBills)
    } else {
      //Setting new Bill
      // format date
      const date = formatDates(Date.now())
      // insert new properties to object bill
      bill.id = genId()
      bill.date = date
      // set new bill
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
