import './intro.scss';

export default function Intro() {
	return (
		<div className="intro" id="intro">
			<div className="left">
				<div className="wrapper">
					<h1>
						Connecting artists to opportunities <br /> in the Web3 economy.{' '}
					</h1>
				</div>
				<a href="#description">
					<img src="assets/downarrow.png" alt="down arrow" />
				</a>
			</div>
			<div className="right">
				<div className="imgContainer">
					<img src="assets/web3logoblanco2.png" alt="white logo" />
				</div>
			</div>
		</div>
	);
}
