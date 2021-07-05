import styled from 'styled-components';

const Footer = () => {
	const submitHandler = (e) => {
		e.preventDefault();
	};
	return (
		<FooterHolder>
			<FormHolder onSubmit={submitHandler}>
				<input type='text' placeholder='Full Name'></input>
				<input type='text' placeholder='College Name'></input>
				<input type='text' placeholder='Mobile No.'></input>
				<input type='email' placeholder='Email'></input>
				<button type='submit'>Submit</button>
			</FormHolder>
			<BottomTab>
				<h1>© 2020 Limitless Technologies - The Entrepreneurship Network</h1>
			</BottomTab>
		</FooterHolder>
	);
};
const FooterHolder = styled.div`
	width: 100%;
	height: 60vh;
	padding: 40px 0 0 0;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;
const FormHolder = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 80%;
	height: 40vh;

	& input {
		width: 60%;
		height: 40px;
		padding-left: 20px;
		outline: none;
		font-weight: 600;
		border: solid 1px #161616b1;
		background-color: #e9e9e9b2;
		letter-spacing: 2px;
		font-size: 1rem;
		@media (max-width: 600px) {
			width: 80vw;
		}
	}
	& button {
		outline: none;
		border: none;
		width: 60%;
		height: 40px;
		font-weight: 500;
		font-size: 1rem;
		background-color: #e442fd;
		transition: all 0.5s ease;
		letter-spacing: 2px;
		&:hover {
			color: white;
		}
	}
`;
const BottomTab = styled.div`
	margin-top: 20px;
	width: 100%;
	padding: 10px;
	background-color: orange;
	& h1 {
		text-align: center;
		font-size: 1.1rem;
	}
`;

export default Footer;
