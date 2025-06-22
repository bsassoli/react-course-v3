import { useReducer } from 'react';
import { data } from '../../../data';
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from './actions';
import reducer from './reducer';

const default_state = {
  people: data,
}


const ReducerBasics = () => {

  const [state, dispatch] = useReducer(reducer, default_state)

  const resetList = () => {
    dispatch({ type: RESET_LIST })
  }

  const clearList = () => {
    dispatch({ type: CLEAR_LIST })
  }

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id }})
  }

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length > 0 ?
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear items
        </button> :
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          reset items
        </button>
      }
    </div>
  );
};

export default ReducerBasics;
