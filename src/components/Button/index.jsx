import add from "./add.png";
import remove from "./remove.png";
import "../css/button.css";

const Button = ({ type = "add" | "remove", onClick, className, style }) => {
	return (
		<button
			onClick={onClick}
			style={style}
			className={`${type} === "add" ? "add" : "remove" ${className}`}
		>
			<div className="button">
				<div>
					<img
						src={type === "add" ? add : remove}
						alt="icon"
						className="button-icon"
					/>
				</div>
				<div className="button-text">
					{type === "add" ? "Add to Bucket" : "Remove"}
				</div>
			</div>
		</button>
	);
};

export default Button;
