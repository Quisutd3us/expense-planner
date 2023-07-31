import PropTypes from 'prop-types';

FilterBills.propTypes = {
  setFilter: PropTypes.func,
  filter: PropTypes.string
};

function FilterBills({setFilter, filter}) {
  return (
      <div className={'filtros sombra contenedor'}>
        <form>
          <div className={'campo'}>
            <label>Filter Bills</label>
            <select
                value={filter}
                onChange={e => setFilter(e.target.value)}
            >
              <option value={''}>{'--Show all Bills --'}</option>
              <option value={'saving'}>Saving</option>
              <option value={'food'}>Food</option>
              <option value={'house'}>House</option>
              <option value={'health'}>Health</option>
              <option value={'subscription'}>Subscriptions</option>
              <option value={'funny'}>Funny Time</option>
            </select>
          </div>
        </form>
      </div>
  );
}

export default FilterBills;