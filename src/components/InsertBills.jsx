// import library
import {useState} from "react";
import PropTypes from 'prop-types';
// import components
import Messages from "./Messages.jsx";
// import helpers
import {genId, formatDates} from "../helpers/index.js"
// import images
import closeImgModal from '../img/cerrar.svg'

// declare propTypes
InsertBills.propTypes = {
  setModal: PropTypes.func,
  animateModal: PropTypes.bool,
  setAnimateModal: PropTypes.func,
  saveBills: PropTypes.func
};

function InsertBills({setModal, animateModal, setAnimateModal, saveBills}) {

  // add state for nameBill input
  const [nameBill, setNameBill] = useState('')
  // add state for amount input
  const [amountBill, setAmountBill] = useState(0)
  // add state for Type of Bill select Input
  const [categoryBill, setCategoryBill] = useState('')
  // add state for manage validation errors
  const [messageBill, setMessageBill] = useState('')

  // manage functionality to close modal
  const closeModal = () => {
    setAnimateModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  // handle submit form
  const handleSubmitBill = e => {
    e.preventDefault()

    if ([nameBill, amountBill, categoryBill].includes('')) {
      setMessageBill('All camps are required')
      setTimeout(() => {
        setMessageBill('')
      }, 3000)
      return
    }

    if (amountBill < 1 || amountBill > 1000000) {
      setMessageBill('The amount Of bill must be into 1 US and 1.000.000 USD')
      setTimeout(() => {
        setMessageBill('')
      }, 3000)
      return
    }

    // change state of message if past al validations
    setMessageBill('')


    // create object bill
    const bill = {
      id: genId(),
      name: nameBill,
      amount: amountBill,
      category: categoryBill,
      date: formatDates(Date.now()),
      isEnable: true
    }
    // send input states to App component
    saveBills(bill)

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
        <form
            className={`form ${animateModal ? 'animate' : 'cerrar'}`}
            onSubmit={handleSubmitBill}>
          <legend>New Bill</legend>
          {/*Show component message if don't pass the validations*/}
          {messageBill && <Messages typeMsg={'error'}>{messageBill}</Messages>}
          <div className={'campo'}>
            <label htmlFor={'nameBill'}>Name Bill</label>
            <input
                type={'text'}
                placeholder={'Add Name of BILL'}
                id={'nameBill'}
                maxLength={40}
                value={nameBill}
                required={true}
                onChange={e => setNameBill(e.target.value)}
            />
          </div>
          {/*amount of bill*/}
          <div className={'campo'}>
            <label htmlFor={'amount'}>Amount (USD)</label>
            <input
                type={'number'}
                placeholder={'Add Amount of BILL'}
                id={'amount'}
                value={amountBill.toString().slice()}
                maxLength={6}
                onChange={e => setAmountBill(Number(e.target.value))}
            />
          </div>
          {/*category of BIll*/}
          <div className={'campo'}>
            <label htmlFor={'category'}>Category</label>
            <select
                id={'category'}
                onChange={e => setCategoryBill(e.target.value)}
                required={true}
            >
              <option value={''}>{'--Select Type Of Bill --'}</option>
              <option value={'saving'}>Saving</option>
              <option value={'food'}>Food</option>
              <option value={'house'}>House</option>
              <option value={'health'}>Health</option>
              <option value={'subscription'}>Subscriptions</option>
              <option value={'funny'}>Funny Time</option>
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