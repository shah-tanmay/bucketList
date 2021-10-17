import { useState } from "react";
import "../css/pill.css";

const Pill = ({ year, setYear }) => {
	const [active, setActive] = useState(0);
	return (
		<div className="pill-main">
			{[0, 1, 2, 3].map((year) => {
				return (
					<div
						className={active === year ? "pill-selected pill" : "pill"}
						onClick={() => {
							setActive(year);
							setYear(year);
						}}
					>{`${year + 1} year`}</div>
				);
			})}
		</div>
	);
};

export default Pill;
