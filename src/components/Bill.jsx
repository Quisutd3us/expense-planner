// imports related library
import PropTypes from 'prop-types';
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"

// import images'
import imgFood from '../img/icono_comida.svg'
import imgSaving from '../img/icono_ahorro.svg'
import imgHouse from '../img/icono_casa.svg'
import imgHealth from '../img/icono_salud.svg'
import imgSuscription from '../img/icono_suscripciones.svg'
import imgFunny from '../img/icono_ocio.svg'

Bill.propTypes = {
  bill: PropTypes.object,
  setEditBill: PropTypes.func,
  delBill: PropTypes.func
};

// setting dictionary of icons

const dictionaryIcons = {
  'food': imgFood,
  'saving': imgSaving,
  'house': imgHouse,
  'health': imgHealth,
  'subscription': imgSuscription,
  'funny': imgFunny
}

function Bill({bill, setEditBill, delBill}) {
  // destructuring bill
  const {category, name, amount, date, id} = bill

  // functions relative to react-swipe-able-list component
  const LeadingActionsNode = () => (
      <LeadingActions>
        <SwipeAction onClick={() => {
          setEditBill(bill)
        }}>Edit</SwipeAction>
      </LeadingActions>
  );
  const TrailingActionsNode = () => (
      <TrailingActions>
        <SwipeAction
            onClick={() => delBill(id)}
            destructive={true}
        >Delete</SwipeAction>
      </TrailingActions>
  );
  return (
      <SwipeableList>
        <SwipeableListItem
            leadingActions={LeadingActionsNode()}
            trailingActions={TrailingActionsNode()}
        >

          <div className={'gasto sombra'}>
            <div className={'contenido-gasto'}>
              {/*charge image according to category*/}
              <img
                  src={dictionaryIcons[category]}
                  alt={`Image of ${category} category`}
              />
              <div className={'descripcion-gasto'}>
                <p className={'categoria'}>{category}</p>
                <p className={'nombre-gasto'}>{name}</p>
                <p className={'fecha-gasto'}>Date Bill: {' '}
                  <span>{date}</span>
                </p>
              </div>
            </div>
            <p className={'cantidad-gasto'}>$ {amount} USD</p>
          </div>
        </SwipeableListItem>
      </SwipeableList>
  )
      ;
}

export default Bill;