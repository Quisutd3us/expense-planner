import PropTypes from 'prop-types';
import NewBudget from "./New-Budget.jsx";
import ControlBudget from "./ControlBudget.jsx";

Header.propTypes = {
  budget: PropTypes.number,
  setBudget: PropTypes.func,
  isValidBudget: PropTypes.bool,
  setIsValidBudget: PropTypes.func,
  totalBills: PropTypes.number
};

function Header({
                  budget,
                  setBudget,
                  isValidBudget,
                  setIsValidBudget,
                  totalBills
                }) {
  return (
      <header>
        <h1>Expense Planner</h1>
        {isValidBudget ? (
            <ControlBudget
                budget={budget}
                totalBills={totalBills}
            />
        ) : (
            <NewBudget
                budget={budget}
                setBudget={setBudget}
                setIsValidBudget={setIsValidBudget}
            />
        )
        }

      </header>
  );
}

export default Header;