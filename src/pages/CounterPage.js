import React, { useReducer } from 'react'
// import React, { useState } from 'react'
import Button from '../components/Button'
// import useCounter from '../hooks/use-counter'
import Panel from '../components/Panel'

const INCREMENT_COUNT = 'inc'
const DECREMENT_COUNT = 'dec'
const SET_VALUE_TO_ADD = 'change_value_to_add'
const ADD_VALUE_TO_ADD = 'add_value_to_add'

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload
            }
        case ADD_VALUE_TO_ADD:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            }
        default:
            return state
    }
}

function CounterPage({ initialCount }) {
    // [custom hook]
    // const { count, increment } = useCounter(initialCount)

    // return (
    //     <div>
    //         <div>Count is {count}</div>
    //         <Button onClick={increment}>
    //             Increment
    //         </Button>
    //     </div>
    // )




    // [for useState]
    // const [count, setCount] = useState(initialCount)
    // const [valueToAdd, setValueToAdd] = useState(0)
    
    // const increment = () => {
    //     setCount(count + 1)
    // }

    // const decrement = () => {
    //     setCount(count - 1)
    // }

    // const handleChange = (event) => {
    //     // NaN -> when value is 0 and parseInt(value)=NaN
    //     // || 0 -> parseInt(value)=0
    //     const value = parseInt(event.target.value) || 0
    //     setValueToAdd(value)
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     setCount(count + valueToAdd)
    //     setValueToAdd(0)
    // }

    // return (
    //     <Panel className='m-3'>
    //         <div>Count is {count}</div>
    //         <div className='flex flex-row'>
    //             <Button onClick={increment}>
    //                 Increment
    //             </Button>
    //             <Button onClick={decrement}>
    //                 Decrement
    //             </Button>
    //         </div>
    //         <form onSubmit={handleSubmit}>
    //             <label>Add a lot!</label>
    //             <input
    //                 type='number'
    //                 // when valueToAdd=0 then put '' only
    //                 value={valueToAdd||''}
    //                 onChange={handleChange}
    //                 className='p-1 m-3 bg-gray-50 border border-gray-300'
    //             />
    //             <Button>Add it</Button>
    //         </form>
    //     </Panel>
    // )

    // [for useReducer]

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    })
    
    // const increment = () => {
        // dispatch can be here too
    // }

    // const decrement = () => {
        // dispatch can be here too
    // }

    const handleChange = (event) => {
        // NaN -> when value is 0 and parseInt(value)=NaN
        // || 0 -> parseInt(value)=0
        const value = parseInt(event.target.value) || 0
        dispatch({type:SET_VALUE_TO_ADD,payload:value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch({type:ADD_VALUE_TO_ADD})
    }

    return (
        <Panel className='m-3'>
            <div>Count is {state.count}</div>
            <div className='flex flex-row'>
                <Button onClick={() => dispatch({type:INCREMENT_COUNT})}>
                    Increment
                </Button>
                <Button onClick={() => dispatch({type:DECREMENT_COUNT})}>
                    Decrement
                </Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input
                    type='number'
                    // when valueToAdd=0 then put '' only
                    value={state.valueToAdd||''}
                    onChange={handleChange}
                    className='p-1 m-3 bg-gray-50 border border-gray-300'
                />
                <Button>Add it</Button>
            </form>
        </Panel>
    )
}

export default CounterPage