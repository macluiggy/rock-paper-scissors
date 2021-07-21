import { useState } from 'react';
import './scss/footer.scss';

const Footer = () => {
	const [display, setDisplay] = useState('none')
	return (
		<footer>
			<button
			 className='rules'
			 onClick={() => setDisplay('block')} >Rules</button>
			<figure className='rules_modal' style={{display: display}}>
				<p>RULES <span
				 className="close" 
				 onClick={() => setDisplay('none')} >&times;</span></p>
			</figure>
		</footer>
		)
}

export default Footer