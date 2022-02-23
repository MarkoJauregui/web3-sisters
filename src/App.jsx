import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Description from './components/description/Description';
import Artists from './components/artists/Artists';
import Brands from './components/brands/Brands';
import Sisters from './components/sisters/Sisters';
import Footer from './components/footer/Footer';
import './app.scss';
import { useState } from 'react';
import Menu from './components/menu/Menu';

function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="app">
			<Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className="sections">
				<Intro />
				<Description />
				<Artists />
				<Brands />
				<Sisters />
			</div>
			<Footer />
		</div>
	);
}

export default App;
