import PropTypes from 'prop-types';
// import images
import closeImgModal from '../img/cerrar.svg'

InsertBills.propTypes = {
  setModal: PropTypes.func,
  animateModal: PropTypes.bool,
  setAnimateModal: PropTypes.func
};

function InsertBills({setModal, animateModal, setAnimateModal}) {
  const closeModal = () => {
    setAnimateModal(false)
    setTimeout(()=>{
      setModal(false)
    },500)
  }
  return (
      <div className={'modal'}>
        <div className={'cerrar-modal'}>
          <img
              src={closeImgModal}
              alt={'Close Modal Insert Bills'}
              onClick={closeModal}
          />
        </div>
        {/*name of bill*/}
        <form className={`form ${animateModal ? 'animate' : 'cerrar'}`}>
          <legend>New Bill</legend>
          <div className={'campo'}>
            <label htmlFor={'nameBill'}>Name Bill</label>
            <input
                type={'text'}
                placeholder={'Add Name of BILL'}
                id={'nameBill'}
            />
          </div>
          {/*amount of bill*/}
          <div className={'campo'}>
            <label htmlFor={'nameAmount'}>Amount</label>
            <input
                type={'number'}
                placeholder={'Add Amount of BILL'}
                id={'nameAmount'}
                required={true}
            />
          </div>
          {/*category of BIll*/}
          <div className={'campo'}>
            <label htmlFor={'categoryAmount'}>Category</label>
            <select
              id={'categoryAmount'}
            >
              <option value={''}>--Select Type Of Bill --</option>
              <option value={'saving'}>Saving</option>
              <option value={'food'}>Food</option>
              <option value={'house'}>House</option>
              <option value={'health'}>Health</option>
              <option value={'subscription'}>Subscriptions</option>
              <option value={'funny'}>Funny Time</option>
              <option value={'other'}>Other Expenses</option>
            </select>
          </div>
          <input
            type={'submit'}
            value={'Add Bill'}
          />
        </form>
      </div>
  );
}

export default InsertBills;