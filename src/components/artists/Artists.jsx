import './artists.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

const Artists = () => {
	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
			showCursor: false,
			strings: ['...'],
			backDelay: 1000,
			backSpeed: 60,
		});
	}, []);
	return (
		<div className="artists" id="artists">
			<div className="left">
				<div className="imgContainer">
					<img src="assets/Pamela3D.png" alt="web3sister" />
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h1>
						For Artists<span ref={textRef}></span>
					</h1>
					<h3>
						The world of Web3 is an emerging cultural space where artists can
						thrive. But for some, the NFT (non-fungible token) market may be
						daunting and confusing - we want to eliminate this barrier!
						<br />
						<br />
						We have a wide range of resources to help artists get started. We’ll
						point you to trustworthy information, give you tips on best practice
						for making your work visible and empower you as an emerging creator
						within this new marketplace.
					</h3>
				</div>
				<a href="#brands">
					<img src="assets/downarrow.png" alt="downarrow" />
				</a>
			</div>
		</div>
	);
};

export default Artists;
