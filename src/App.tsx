import './App.css'
import { useCounterStore } from './model/counterStore'

const App = () => {
	const { counter, increment, decrement } = useCounterStore()

	return (
		<div className='wrapper'>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
			<span>{counter}</span>
		</div>
	)
}

export default App
