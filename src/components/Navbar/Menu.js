import React from 'react';
import styled from 'styled-components';
const Menu = () => {
	return (
		<>
			<MenuItems>
				<li>
					<a href='##'>Home</a>
				</li>
				<li>
					<a href='##'>About</a>
				</li>
				<li>
					<a href='##'>Online course</a>
				</li>
				<li>
					<a href='##'>More</a>
				</li>
			</MenuItems>
		</>
	);
};
const MenuItems = styled.ul`
	width: 40%;
	height: 80%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	& li {
		list-style: none;
		font-weight: 600;
	}
	& a {
		text-decoration: none;
		color: black;
	}
	@media (max-width: 600px) {
		display: none;
	}
`;
export default Menu;
