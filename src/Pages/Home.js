import React from 'react';
import styled from 'styled-components';
import Page from '../components/Reuseable/Page';
import Footer from '../components/Footer/Footer';
const Home = () => {
	return (
		<>
			<HomePage>
				<img src={'assets/wallper.jpg'} alt='HomePage' />
				<Companyname></Companyname>
			</HomePage>
			<Page
				img={'assets/one man.svg'}
				content={'Digital Marketing'}
				swap={'false'}></Page>
			<Page
				img={'assets/two people.svg'}
				content={'Entrepreneurship made fun'}
				swap={'true'}></Page>
			<Page
				img={'assets/iii.svg'}
				content={'Product Management like a pro'}
				swap={'false'}></Page>
			<Footer />
		</>
	);
};
const HomePage = styled.section`
	width: 100%;
	height: 100vh;

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
const Companyname = styled.div`
	width: 45%;
	height: 300px;
	border: solid 2px white;
	position: absolute;
	top: 30%;
	left: 10%;
	@media (max-width: 600px) {
		display: none;
	}
`;
export default Home;
