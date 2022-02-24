import './sisters.scss';

export default function Sisters() {
	return (
		<div className="sisters" id="sisters">
			<h1>The Sisters</h1>
			<div className="container">
				<div className="card">
					<div className="top">
						<img
							src="assets/pamelaanteojosdoradoslogo.png"
							alt="pamela"
							className="user"
						/>
					</div>
					<div className="center">
						Art Director/Curator. Event design and implementation. Community
						building.
					</div>
					<div className="bottom">
						<a href="https://www.linkedin.com/in/pamelamurphyschiuma/">
							<h3>Pamela Murphy</h3>
						</a>
					</div>
				</div>
				<div className="card">
					<div className="top">
						<img
							src="assets/carolanteojosdoradoslogo.png"
							alt="pamela"
							className="user"
						/>
					</div>
					<div className="center">
						Head of strategy and Integration. Brand collaborations and
						purpose-driven experiences.
					</div>
					<div className="bottom">
						<a href="https://www.linkedin.com/in/carol-murphy-79537550/">
							<h3>Carol Murphy</h3>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
