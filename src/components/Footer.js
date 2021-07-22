import { useState } from 'react';
import './scss/footer.scss';

const Footer = () => {
	const [display, setDisplay] = useState('rules_modal');
	return (
		<footer>
			<button
			 className='rules'
			 onClick={() => setDisplay('rules_modal_show')} >Rules</button>
			<figure className={display} >
				<p>RULES <span
				 className="close" 
				 onClick={() => setDisplay('rules_modal')} >&times;</span></p>
			</figure>
		</footer>
		)
}

export default Footer