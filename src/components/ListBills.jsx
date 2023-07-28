import PropTypes from 'prop-types';
import Bill from "./Bill.jsx";

ListBills.propTypes = {
  bills: PropTypes.array,
};

function ListBills({bills}) {
  return (
      <div className={'listado-gastos contenedor'}>
        <h2>{bills.length ? `Total Bills: (${bills.length})` : `You Don't have Bills ..`}</h2>
        {
          bills.map(bill => (
              <Bill
                  key={bill.id}
                  bill={bill}
              />
          ))
        }
      </div>
  );
}

export default ListBills;