import heroImg from "./assets/hero.svg";

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero-center">
				<div className="hero-title">
					<h1>Contentful CMS</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
						recusandae dicta expedita minus ipsa error ab ratione laboriosam
						laudantium? Iste sint voluptas quos nesciunt veritatis alias, eius
						nihil rem ipsum.
					</p>
				</div>
				<div className="img-container">
					<img src={heroImg} alt="woman and the browser" className="img" />
				</div>
			</div>
		</section>
	);
};
export default Hero;
