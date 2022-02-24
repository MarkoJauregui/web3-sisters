import './brands.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Brands() {
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
		<div className="brands" id="brands">
			<div className="left">
				<div className="wrapper">
					<h1>
						For Brands<span ref={textRef}></span>
					</h1>
					<h3>
						Web3 and the Metaverse are quickly becoming buzzwords, but what do
						they mean for brands, companies and institutions? Where are the
						cross-overs that exist with real life communities, and how can those
						relationships be nurtured? How can art express values and help build
						new spaces for them to be shared?
						<br />
						<br />
						Web3Sisters will help you navigate these questions and create
						customised NFT strategies for your brand, company or institution,
						while creating opportunities for emerging artists.
					</h3>
				</div>
				<a href="#sisters">
					<img src="assets/downarrow.png" alt="downarrow" />
				</a>
			</div>
			<div className="right">
				<div className="imgContainer">
					<img src="assets/carolanteojosdorados.png" alt="web3sister2" />
				</div>
			</div>
		</div>
	);
}
