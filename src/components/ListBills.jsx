import PropTypes from 'prop-types';
import Bill from "./Bill.jsx";

ListBills.propTypes = {
  bills: PropTypes.array,
  setEditBill: PropTypes.func,
  delBill: PropTypes.func,
  filterBills: PropTypes.array,
  filter: PropTypes.string
};

function ListBills({
                     bills,
                     setEditBill,
                     delBill,
                     filterBills,
                     filter
                   }) {
  return (
      <div className={'listado-gastos contenedor'}>
        <h2>
          {bills.length ? `Total Bills: (${bills.length})` : `You Don't have Bills ..`}
        </h2>
        {
          filter &&
            <h3>
              {filterBills.length > 0 ? `Total Filter Bills: (${filterBills.length})` : `You Don't have Bills in this Category..`}
            </h3>
        }

        {
          filter ?
              (
                  filterBills.map(bill => (
                      <Bill
                          key={bill.id}
                          bill={bill}
                          setEditBill={setEditBill}
                          delBill={delBill}
                      />
                  ))
              ) : (
                  bills.map(bill => (
                      <Bill
                          key={bill.id}
                          bill={bill}
                          setEditBill={setEditBill}
                          delBill={delBill}
                      />
                  ))
              )
        }
      </div>
  );
}

export default ListBills;