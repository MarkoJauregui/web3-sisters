import './topbar.scss';
import { Email, Twitter, LinkedIn } from '@material-ui/icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
	return (
		<div className={'topbar ' + (menuOpen && 'active')}>
			<div className="wrapper">
				<div className="left">
					<a href="#intro">
						<img
							className="logo"
							src="assets/web3logoDorado.png"
							alt="logo"
							height="55"
							width="60"
						/>
					</a>
					<div className="itemContainer">
						<a href="mailto:contact@web3sisters.com">
							<Email className="icon" />
						</a>
						<span>contact@web3sisters.com</span>
					</div>
					<div className="itemContainer">
						<a href="https://www.linkedin.com/company/web3sisters">
							<LinkedIn className="icon" />
						</a>
						<span>Web3Sisters</span>
					</div>
					<div className="itemContainer">
						<a href="https://twitter.com/web3sisters">
							<Twitter className="icon" />
						</a>
						<span>@web3sisters</span>
					</div>
				</div>

				<div className="right">
					<div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
					</div>
				</div>
			</div>
		</div>
	);
}
