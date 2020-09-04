import React from 'react'

export default function Form(props) {
  const { settingInitialValue, settingInterestRate, settingPeriods } = props;

  const handleInput = (event) => {
    settingInitialValue(event.target.value)
  }

  const handleInterestRate = (event) => {
    settingInterestRate(event.target.value)
  }

  const handlePeriods = (event) => {
    settingPeriods(event.target.value)
  }

  return (
    <div className='row'>
      <form className="col s12">
        <div className="row">
          <div className="input-field col s4">
            <input type="number" min='100' autoFocus onChange={handleInput} className="validate" id="inputValue" />
            <label htmlFor='inputValue' className="active">Capital Inicial</label>
          </div>
          <div className="input-field col s4">
            <label className="active" htmlFor="inputInterest">Taxa de Juros Mensal</label>
            <input step='0.1' onChange={handleInterestRate} className="validate" type="number" id="inputInterest" />
          </div>
          <div className="input-field col s4">
            <label className="active" htmlFor="inputPeriod">Período (meses)</label>
            <input type="number" onChange={handlePeriods} className="validate" min='1' max='36' id="inputPeriod" />
          </div>
        </div>
      </form>
    </div>
  )
}
