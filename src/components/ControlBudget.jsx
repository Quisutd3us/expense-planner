import PropTypes from 'prop-types';
import {useEffect, useState} from "react";

ControlBudget.propTypes = {
  budget: PropTypes.number,
  bills: PropTypes.array
};

function ControlBudget({budget, bills}) {

  // set state for availableBudge
  const [available, setAvailable] = useState(budget)

  // set state for Total bills component
  const [totalBills, setTotalBills] = useState(0)


  // observer for change totalBills for update available
  useEffect(() => {
    const updateAvailable = budget - totalBills
      setAvailable(updateAvailable)
  }, [totalBills])

  // observer for change bills for sum all values
  useEffect(() => {
      const totalBill = bills.reduce((total, bill) => bill.amount + total, 0)
      setTotalBills(totalBill)
  }, [bills])

  // format amount to usd money format
  const formatBudget = (amount) => {
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }
  return (
      <div className={'contenedor sombra dos-columnas contenedor-presupuesto'}>
        <div>
          <p>Graphic here</p>
        </div>
        <div className={'contenido-presupuesto'}>
          <p>
            <span>Budget:</span> {formatBudget(budget)}
          </p>
          <p>
            <span>Available:</span> {formatBudget(available)}
          </p>
          <p>
            <span>Spent:</span> {formatBudget(totalBills)}
          </p>
        </div>
      </div>
  );
}

export default ControlBudget;