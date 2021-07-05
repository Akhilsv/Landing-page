import React from 'react';
import styled from 'styled-components';

const Button = ({ content }) => {
	return <ReuseButton>{content}</ReuseButton>;
};
const ReuseButton = styled.button`
	width: 150px;
	height: 50px;
	border-radius: 10px;
	outline: none;
	border: none;
	background-color: #d226ee;
	cursor: pointer;
	color: white;
	font-weight: 600;
	font-size: 16px;
	transition: all 1s;
	&:hover {
		color: black;
		border-radius: 20px;
	}
`;
export default Button;
