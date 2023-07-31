import PropTypes from 'prop-types';
import {useEffect, useState} from "react";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

ControlBudget.propTypes = {
  budget: PropTypes.number,
  bills: PropTypes.array
};

function ControlBudget({budget, bills}) {

  // set state for percent Spent
  const [percent, setPercent] = useState(0)

  // set state for availableBudge
  const [available, setAvailable] = useState(budget)

  // set state for Total bills component
  const [totalBills, setTotalBills] = useState(0)


  // observer for change totalBills for update available
  useEffect(() => {
    const updateAvailable = budget - totalBills
    const newPercent = Number((((budget - updateAvailable) / budget) * 100).toFixed(2))
    setTimeout(() => {
      setPercent(newPercent)
    }, 1000)
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
          <CircularProgressbar
              styles={buildStyles({
                pathColor: percent > 100 ? '#DC2626' : '#3B82f6',
                trailColor: '#F1F1F1',
                textColor: '#3B82f6'
              })}
              value={percent}
              text={`${percent}% Spent`}
          />
        </div>
        <div className={'contenido-presupuesto'}>
          <p>
            <span>Budget:</span> {formatBudget(budget)}
          </p>
          <p className={`${available < 0 ? 'negativo' : ''}`}>
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