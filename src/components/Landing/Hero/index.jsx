import { Link } from "react-router-dom";
import HeroSectionArray from "../../../fixtures/hero.json";
import "./index.css";

const HeroSection = () => {
	return (
		<div>
			{HeroSectionArray.map((item, idx) => {
				return (
					<div
						style={{
							display: "flex",
							flexDirection: `${item.flex}`,
							width: "90%",
							margin: "auto",
							gap: "5rem",
							marginTop: "50px",
						}}
						key={idx}
					>
						<div className="hero-image-div">
							<img src={item.image} alt="SectionImage" className="hero-image" />
						</div>
						<div className="hero-main">
							<div className="hero-title">{item.title}</div>
							<div className="hero-text">{item.textMain}</div>
							<div className="hero-text">{item.subText}</div>
							{item.buttonText && (
								<div className="button-div">
									<Link to="/subjectlist" style={{ textDecoration: "none" }}>
										<button className="button">{item.buttonText}</button>
									</Link>
								</div>
							)}
						</div>
					</div>
				);
			})}
			<div style={{ width: "90%", margin: "auto", marginTop: "30px" }}>
				<div
					style={{ fontSize: "50px", fontWeight: "bold", marginTop: "10px" }}
				>
					Guide
				</div>
				<img
					src="/images/illustration3.svg"
					alt="Guide"
					className="advisor-image"
				/>
			</div>
		</div>
	);
};

export default HeroSection;
