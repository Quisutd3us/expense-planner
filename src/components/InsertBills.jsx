// import library
import {useState, useEffect} from "react";
import PropTypes from 'prop-types';
// import components
import Messages from "./Messages.jsx";
// import images
import closeImgModal from '../img/cerrar.svg'

// declare propTypes
InsertBills.propTypes = {
  setModal: PropTypes.func,
  animateModal: PropTypes.bool,
  setAnimateModal: PropTypes.func,
  saveBills: PropTypes.func,
  editBill: PropTypes.object,
  setEditBill:PropTypes.func
};

function InsertBills({
                       setModal,
                       animateModal,
                       setAnimateModal,
                       saveBills,
                       editBill,
                       setEditBill
                     }) {

  // add state for id
  const [id, setID] = useState('')
  // add state for name input
  const [name, setName] = useState('')
  // add state for amount input
  const [amount, setAmount] = useState(0)
  // add state for Type of Bill select Input
  const [category, setCategory] = useState('')
  // add state for manage validation errors
  const [messageBill, setMessageBill] = useState('')

  useEffect(() => {
    if (Object.keys(editBill).length > 0) {
      setName(editBill.name)
      setAmount(editBill.amount)
      setCategory(editBill.category)
      setID(editBill.id)
    }
  }, [])


  // manage functionality to close modal
  const closeModal = () => {
    setEditBill({})
    setAnimateModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  // handle submit form
  const handleSubmitBill = e => {
    e.preventDefault()

    if ([name, amount, category].includes('')) {
      setMessageBill('All camps are required')
      setTimeout(() => {
        setMessageBill('')
      }, 3000)
      return
    }

    if (amount < 1 || amount > 1000000) {
      setMessageBill('The amount Of bill must be into 1 US and 1.000.000 USD')
      setTimeout(() => {
        setMessageBill('')
      }, 3000)
      return
    }

    // change state of message if past al validations
    setMessageBill('')


    // send input states to App component
    saveBills({name, amount, category, id})

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
          <legend>{Object.keys(editBill).length > 0 ? 'Edit Bill' : 'New Bill'}</legend>
          {/*Show component message if it doesn't pass the validations*/}
          {messageBill && <Messages typeMsg={'error'}>{messageBill}</Messages>}
          <div className={'campo'}>
            <label htmlFor={'name'}>Name Bill</label>
            <input
                type={'text'}
                placeholder={'Add Name of BILL'}
                id={'name'}
                maxLength={40}
                value={name}
                required={true}
                onChange={e => setName(e.target.value)}
            />
          </div>
          {/*amount of bill*/}
          <div className={'campo'}>
            <label htmlFor={'amount'}>Amount (USD)</label>
            <input
                type={'number'}
                placeholder={'Add Amount of BILL'}
                id={'amount'}
                value={amount.toString().slice()}
                maxLength={6}
                onChange={e => setAmount(Number(e.target.value))}
            />
          </div>
          {/*category of BIll*/}
          <div className={'campo'}>
            <label htmlFor={'category'}>Category</label>
            <select
                id={'category'}
                value={category}
                onChange={e => setCategory(e.target.value)}
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
              value={Object.keys(editBill).length > 0 ? 'Update Bill' : 'New Bill'}
          />
        </form>
      </div>
  );
}

export default InsertBills;