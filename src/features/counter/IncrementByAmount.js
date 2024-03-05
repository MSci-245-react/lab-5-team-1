import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { incrementByAmount } from './counterSlice'
//import styles from './Counter.module.css'

export default function IncrementByAmount() {
    
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [amount, setAmount] = React.useState(0);
    
    return (
        <div>
            <div>
                <input type="number" onChange={(e) => setAmount(e.target.value)}/>
                <button
                    aria-label="Increment value by amount"
                    onClick={() => dispatch(incrementByAmount(Number(amount)))}
                >
                    Increment by amount
                </button>
                <span>{count}</span>
            </div>
        </div>
    )
}
