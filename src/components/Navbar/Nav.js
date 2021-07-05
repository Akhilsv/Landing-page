import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const Nav = () => {
	return (
		<>
			<NavBar>
				<Logo>
					<img src={'assets/ten_logo.png'} alt='Logo' />
					<h1>TEN</h1>
				</Logo>
				<Menu />
				<Login>
					<button>Login</button>
				</Login>
			</NavBar>
		</>
	);
};

const NavBar = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 70px;
	background-color: #fff6fe;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 2%;
`;
const Logo = styled.div`
	width: 50px;
	height: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	& img {
		width: 100px;
		height: 100px;
		position: absolute;
		top: -80%;
	}
	& h1 {
		font-size: 1.2rem;
		position: absolute;
		bottom: -35%;
	}
`;
const Login = styled.div`
	& button {
		outline: none;
		border: none;
		border-radius: 15px;
		background: #d226ee;
		width: 90px;
		height: 35px;
		color: white;
		font-size: 1rem;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.5s;
		&:hover {
			color: #333333;
		}
	}
`;

export default Nav;
