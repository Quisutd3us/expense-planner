import {useState} from "react";
import PropTypes from 'prop-types';
import Messages from "./Messages.jsx";

NewBudget.propTypes = {
  budget: PropTypes.number,
  setBudget: PropTypes.func,
  setIsValidBudget: PropTypes.func
};

function NewBudget({
                     budget,
                     setBudget,
                     setIsValidBudget
                   }) {
  // manage messages fo input exceptions
  const [message, setMessage] = useState('')
  // manage exception for new budget
  const handleSubmit = (e) => {
    e.preventDefault()
    if (budget < 1) {
      setMessage('Its not at Valid Budget')
      return
    }
    setMessage('')
    setIsValidBudget(true)
  }

  return (
      <div className={'contenedor-presupuesto sombra'}>
        <form
            className={'form'}
            onSubmit={handleSubmit}>
          <div className={'campo'}>
            <label>Define Budget (USD)</label>
            <input
                className={'nuevo-presupuesto'}
                type={'number'}
                placeholder={'Add your Budget'}
                value={budget}
                maxLength={10}
                required={true}
                onChange={e => setBudget(Number(e.target.value))}
            />
          </div>
          <input
              type={'submit'}
              value={'add (+)'}
          />

          {/*show Messages Message*/}
          {message && <Messages typeMsg={'error'}>{message}</Messages>}

        </form>
      </div>
  );
}

export default NewBudget;