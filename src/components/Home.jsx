import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment , decrement } from '../redux/counter'
export default function Home() {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  
  return (
    <div>
      <h1>home {count}</h1>
      <button onClick={()=>dispatch(increment())}>click</button>
    </div>
  )
}
