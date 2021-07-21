import React, {useEffect} from 'react';
import './scss/main.scss'

const Main = ({selectAnOption, isLoading, hand, machineHand, reset}) => {
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
					) : (
					<>
						<button id='1' className={userClass}></button>
						<button id='2' className={machineClass}></button>
						<button onClick={reset} >Play again</button>
					</>
					)}
		</main>
		)
}

export default Main