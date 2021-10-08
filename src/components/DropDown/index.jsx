import { useState } from "react";
import dropDownArrow from "./drop-down-arrow (1).png";
import "../css/dropdown.css";

const DropDown = ({ year, setYear }) => {
	const [hide, setHide] = useState(false);
	const DropDownArray = [
		{
			year: "First",
			id: 1,
		},
		{
			year: "Second",
			id: 2,
		},
		{
			year: "Third",
			id: 3,
		},
		{
			year: "Fourth",
			id: 4,
		},
	];
	return (
		<div>
			<div className="select-main" onClick={() => setHide(!hide)}>
				<div className="select-year">{year}</div>
				<div className="select-arrow">
					<img src={dropDownArrow} alt="Arrow" className="arrow" />
				</div>
			</div>
			<div className="select-list">
				{hide &&
					DropDownArray.map((data) => {
						return (
							<div
								key={data.id}
								className="year-dropdown"
								onClick={() => {
									setHide(false);
									setYear(data.year);
								}}
							>
								{data.year}
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default DropDown;
