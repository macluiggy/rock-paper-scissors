import { useState, useEffect } from 'react';
import './scss/header.scss';
//images
import logo from './images/logo.svg';

const Header = ({score, wait}) => {
	return (
		<header className='scoreborad_container'>
			<figure className='logo_container'>
				<img src={logo} alt="logo" />
			</figure>
			<div className='score_container'>
				<p className='title_score'>Score</p>
				<p className='score'>{wait ? <div className='loading' ></div> : score}</p>
			</div>
		</header>
		)
}

export default Header;