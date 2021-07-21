import React, {useEffect} from 'react';
import './scss/main.scss'

const Main = ({selectAnOption, isLoading, hand, machineHand}) => {
	let userClass = hand === 'paper'
		? 'paper_hand hand'
		: hand === 'scissors'
		? 'scissors_hand hand'
		: 'rock_hand hand'

	let machineClass = machineHand === 'paper'
		? 'paper_hand hand'
		: machineHand === 'scissors'
		? 'scissors_hand hand'
		: 'rock_hand hand'

		console.log(machineHand + 'dddd')
	return (
		<main>
			{!isLoading 
				? (
					<>
						<button id='0' className='paper_hand hand' onClick={selectAnOption} ></button>
						<button id='1' className='scissors_hand hand'></button>
						<button id='2' className='rock_hand hand'></button>
					</>
					) : (
					<>
						<button id='1' className={userClass}></button>
						<button id='2' className={machineClass}></button>
					</>
					)}
		</main>
		)
}

export default Main