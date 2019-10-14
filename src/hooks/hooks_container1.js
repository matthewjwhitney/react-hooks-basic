import React, { useState, useContext, useReducer } from 'react';
import * as ACTIONS from '../store/actions/actions';
import * as HooksReducer1 from '../store/reducers/hooks_reducer';
import Context from '../utils/context';


const HooksContainer = () => {
  const context = useContext(Context)

  const [state, dispatch] = useReducer(HooksReducer1.HooksReducer1, HooksReducer1.initialState)
  const [value, setValue] = useState(0)

  const incrementValue = () => {
    setValue(value + 1 )
  }

  const decrementValue = () => {
    setValue(value - 1 )
  }

  const handleDispatchTrue = () => {
    //    dispatch2(type: "SUCCESS")
    //    dispatch2(ACTIONS.SUCCESS)
    dispatch(ACTIONS.success())
  }

  const handleDispatchFalse = () => {
    //     dispatch2(type: "FAILURE")
    //    dispatch2(ACTIONS.FAILURE)
    dispatch(ACTIONS.failure())
  }

    return(
      <div>
        <button onClick={() => incrementValue()}> Add Local Value </button>
        <button onClick={() => decrementValue()}> Dec Local Value </button>
        <button onClick={() => handleDispatchTrue()}>Dispatch True </button>
        <button onClick={() => handleDispatchFalse()}>Dispatch False </button>
        <button onClick={() => context.addGlobalValue()}> Add Global Value </button>
        <button onClick={() => context.decGlobalValue()}> Dec Global Value </button>
        <br />
        <br />
        <div>
          Local React State: {value}
        </div>
        <div>
        {state.stateprop1
          ? <p> stateprop1 is true </p>
          : <p> stateprop1 is false </p>
        }
        </div>
        <br />
        <p>Global Value: {context.valueGlobalState.stateprop2}</p>
        <br />
      </div>
    )
}


export default HooksContainer;
