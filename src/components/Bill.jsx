// imports related library
import PropTypes from 'prop-types';

import imgFood from '../img/icono_comida.svg'
import imgSaving from '../img/icono_ahorro.svg'
import imgHouse from '../img/icono_casa.svg'
import imgHealth from '../img/icono_salud.svg'
import imgSuscription from '../img/icono_suscripciones.svg'
import imgFunny from '../img/icono_ocio.svg'

Bill.propTypes = {
  bill: PropTypes.object
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

function Bill({bill}) {
  // destructuring bill
  const {category, name, amount, id, date} = bill
  return (
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
  );
}

export default Bill;