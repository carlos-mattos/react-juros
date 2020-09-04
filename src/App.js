import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Installments from './components/Installments';

export default function App() {
  const [initialValue, setInitialValue] = useState(0)
  const [interestRate, setInterestRate] = useState(0)
  const [periods, setPeriods] = useState(0)
  const [controlPeriods, setControlPeriods] = useState([])

  const handleValue = (value) => {
    setControlPeriods([])
    setInitialValue(value);
  }

  const handleInterestRate = (interest) => {
    setControlPeriods([])
    setInterestRate(interest)
  }

  const handlePeriods = (period) => {
    setControlPeriods([])
    setPeriods(period)
  }


  const handleInsertControlPeriods = (data) => {
    setControlPeriods(data)
  }

  useEffect(() => {
    const insertControlPeriods = []
    if (initialValue !== 0 && interestRate !== 0 && periods >= 1) {
      for (let i = 0; i < periods; i++) {
        insertControlPeriods[i] = (initialValue * ((1 + interestRate / 100) ** (i + 1))).toFixed(2);
      }
      handleInsertControlPeriods(insertControlPeriods)
    }
  }, [initialValue, interestRate, periods])


  return (
    < div >
      <h2 className='center'>React - Juros</h2>
      <Form settingInitialValue={handleValue}
        settingInterestRate={handleInterestRate}
        settingPeriods={handlePeriods} />
      {controlPeriods.length > 0 && <Installments
        cards={controlPeriods}
        initialValue={initialValue}
      />}
    </div >
  )
}
