import React from 'react'
import Installment from './Installment'
import css from './components.module.css'

export default function Installments({ cards, initialValue }) {

  let color = '';
  let colorPer = '';
  let index = 0;
  return (
    <div className={css.flexRow}>
      {
        cards.map(card => {
          let dif = (card - initialValue).toFixed(2)
          let per = ((dif * 100) / initialValue).toFixed(2)
          dif > 0 ? color = '#039c10' : color = '#d60000';
          dif > 0 ? colorPer = '#3db0f7' : colorPer = '#fc6b03';
          index++;
          return <Installment key={index}
            cardValue={card}
            dif={dif}
            color={color}
            colorPer={colorPer}
            per={per}
            index={index} />
        })
      }
    </ div>
  )
}
