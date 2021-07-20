import { useState, useEffect } from 'react';
import './scss/header.scss';
//images
import logo from './images/logo.svg';

const Header = ({score}) => {
	return (
		<header className='scoreborad_container'>
			<figure className='logo_container'>
				<img src={logo} alt="logo" />
			</figure>
			<div className='score_container'>
				<p className='title_score'>Score</p>
				<p className='score'>{score}</p>
			</div>
		</header>
		)
}

export default Header;