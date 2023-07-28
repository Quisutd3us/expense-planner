import PropTypes from 'prop-types';
import Bill from "./Bill.jsx";

ListBills.propTypes = {
  bills: PropTypes.array,
  setEditBill: PropTypes.func
};

function ListBills({bills, setEditBill}) {
  return (
      <div className={'listado-gastos contenedor'}>
        <h2>{bills.length ? `Total Bills: (${bills.length})` : `You Don't have Bills ..`}</h2>
        {
          bills.map(bill => (
              <Bill
                  key={bill.id}
                  bill={bill}
                  setEditBill={setEditBill}
              />
          ))
        }
      </div>
  );
}

export default ListBills;