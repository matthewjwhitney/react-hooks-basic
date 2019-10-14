import React, { useReducer } from 'react';
import Routes from './routes';
import Context from './utils/context';
import * as ACTIONS from './store/actions/actions';
import * as HooksReducer1 from './store/reducers/hooks_reducer';



const App = () => {
  const [valueGlobal, dispatchActionsGlobal] = useReducer(HooksReducer1.HooksReducer1, HooksReducer1.initialState)

    const incrementGlobalValue = () => {
      dispatchActionsGlobal(ACTIONS.inc_global_state() )
    }

    const decrementGlobalValue = () => {
      dispatchActionsGlobal(ACTIONS.dec_global_state() )
    }

    return(
      <div>
        React
        <Context.Provider
                  value={{
                    valueGlobalState: valueGlobal,
                    addGlobalValue: () => incrementGlobalValue(),
                    decGlobalValue: () => decrementGlobalValue()
                  }}>
            <Routes />
          </Context.Provider>
      </div>
    )
}


export default App;
