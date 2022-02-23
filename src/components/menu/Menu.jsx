import './menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
	return (
		<div className={'menu ' + (menuOpen && 'active')}>
			<ul>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#intro">Home</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#description">What is?</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#artists">Artists</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#brands">Brands</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#sisters">The sisters</a>
				</li>
			</ul>
		</div>
	);
}
