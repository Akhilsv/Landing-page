import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Home from './Pages/Home';
import Nav from './components/Navbar/Nav';

function App() {
	return (
		<>
			<Nav />
			<Router>
				<Switch>
					<Route exact path='/home'>
						<Home />
					</Route>
					<Route path='*'>
						<Redirect to='/home' />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
