import React from 'react';
import styled from 'styled-components';
import Button from './Button';
const Page = ({ content, img, swap }) => {
	return (
		<>
			<PageHolder order={swap}>
				<Left>
					<img src={img} alt='Undrawn' />
				</Left>
				<Right>
					<h1>{content}</h1>
					<Button content={'Explore here'} />
				</Right>
			</PageHolder>
		</>
	);
};
const PageHolder = styled.div`
	background-color: #d8d8d8;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: ${({ order }) => (order === 'true' ? 'row-reverse' : '')};
	justify-content: space-around;
	align-items: center;
	border: solid #f7f7f7;
	border-width: 10px 15px;
	@media (max-width: 600px) {
		flex-direction: column;
	}
`;
const Left = styled.div`
	width: 40%;
	height: 80%;
	& img {
		width: 100%;
		height: 100%;
	}
	@media (max-width: 600px) {
		height: 40%;
		width: 100%;
	}
`;
const Right = styled.div`
	width: 40%;
	height: 40%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	& h1 {
		text-align: center;
		width: 70%;
		letter-spacing: 1px;
		@media (max-width: 600px) {
			width: 95%;
		}
	}
	@media (max-width: 600px) {
		height: 40%;
		width: 100%;
	}
`;
export default Page;
