import Button from "../Button";
import "../css/card.css";

const Card = ({
	type = "main" | "bucketlist",
	text,
	code,
	credits,
	onClick,
	onClickRemove = "",
}) => {
	const customStyles = {
		width: type === "bucketlist" ? "260px" : "",
	};
	return (
		<div className="card-main" style={customStyles}>
			<div style={{ height: "140px" }}>
				<p className="card-text">{text}</p>
				<p className="card-code">{code}</p>
				<div className="card-flex">
					<div className="card-credits" style={{ height: "40px" }}>
						Credits: <span className="credits">{credits}</span>
					</div>
					{type === "bucketlist" && (
						<div style={{ marginTop: "15px" }}>
							<Button type="remove" onClick={onClickRemove} />
						</div>
					)}
				</div>
			</div>
			<div className="add-button">
				{type === "main" && <Button type="add" onClick={onClick} />}
			</div>
		</div>
	);
};

export default Card;
