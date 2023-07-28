import PropTypes from 'prop-types';

ControlBudget.propTypes = {
  budget: PropTypes.number,
  totalBills: PropTypes.number
};

function ControlBudget({budget, totalBills}) {
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
            <span>Available:</span> {formatBudget(budget-totalBills)}
          </p>
          <p>
            <span>Spent:</span> {formatBudget(totalBills)}
          </p>
        </div>
      </div>
  );
}

export default ControlBudget;