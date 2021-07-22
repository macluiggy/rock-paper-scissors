import React, { useEffect }from 'react';
import './scss/main.scss'

const Main = ({
				selectAnOption,
				isLoading,
				hand,
				machineHand,
				reset,
				change,
				wait,
				setWait,
				win,
				getRamdomNumber, }) => {
	
	let userClass = hand === 'paper'
		? 'paper_hand hand'
		: hand === 'scissors'
		? 'scissors_hand hand'
		: 'rock_hand2 hand'

	let machineClass = machineHand === 'paper'
		? 'paper_hand hand'
		: machineHand === 'scissors'
		? 'scissors_hand hand'
		: 'rock_hand2 hand'

		useEffect(() => {
			setWait(true)
			let interval = setInterval(() => {
				setWait(false) 
			}, 1000*getRamdomNumber() + 500)

			return () => clearInterval(interval);
		}, [change, getRamdomNumber, setWait])
		//console.log(machineHand + 'dddd')
	return (
		<main>
			{!isLoading 
				? (
					<>
						<button id='0' className='paper_hand hand' onClick={selectAnOption} ></button>
						<button id='1' className='scissors_hand hand' onClick={selectAnOption}></button>
						<button id='2' className='rock_hand hand' onClick={selectAnOption}></button>
					</>
					) 
				: wait ? (
					<>
						<div>
							<button id='1' className={userClass}></button>
							<p>You picked</p>
						</div>
						<div>
							<button id='1' className='house_picked'></button>
							<p>The house picked</p>
						</div>
					</>
					) : (
					<>
						<button id='1' className={userClass}></button>
						<button id='2' className={machineClass}></button>
						<div className='winlose'>
							<p>{win ?'YOU WIN': win === null ?'IT\'S A DRAW' :'YOU LOSE'}</p>
							<button onClick={reset} >Play again</button>
						</div>
					</>
					)}
		</main>
		)
}

export default Main