import React from 'react'
import css from './components.module.css'
import formatNumber from './helpers/formatHelpers'

export default function Installment({ cardValue, dif, per, color, colorPer, index }) {

  return (
    <div className={css.card}>
      <span style={style.spanStyle}>{index}</span>
      <ul>
        <li style={{ color: `${color}`, fontWeight: 'bold' }}>R$ {formatNumber(cardValue)}</li>
        <li style={{ color: `${color}`, fontWeight: 'bold' }}>R$ {dif}</li>
        <li style={{ color: `${colorPer}` }} >{per}%</li>
      </ul>
    </div>
  )
}

const style = {
  spanStyle: {
    display: 'inline-block',
    fontWeight: 'bold',
    flexDirection: 'row',
    marginLeft: '15px',
    marginRight: '15px'
  }
}