import Header from './components/Header/Header.jsx';
import Sections from './components/Sections/Sections.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
	return (
		<>
			<Header />
			<main class='main'>
				<div class='container'>
					<Sections />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
