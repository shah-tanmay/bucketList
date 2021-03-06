import { useState } from "react";
import starData from "../../fixtures/data.json";
import { toast } from "react-toastify";
import "../css/button.css";

const Main = ({ regNo }) => {
	const [checkedArray, setCheckedArray] = useState([]);
	const [recommendArray, setRecommendArray] = useState(starData);
	const [showList, setShowList] = useState(false);
	return (
		<div>
			<h3>Select checkboxes for the Subject You Have completed.</h3>

			{starData.map((item, idx) => {
				return (
					<div key={idx}>
						<input
							type="checkbox"
							htmlFor="checkbox"
							name={item.subject}
							onChange={(e) => {
								if (regNo) {
									if (e.target.checked) {
										checkedArray.push(item);
										console.log(item);
									} else if (!e.target.checked) {
										const index = checkedArray.indexOf(item);
										if (index > -1) {
											checkedArray.splice(index, 1);
										}
									}
									setRecommendArray(
										starData
											.concat(checkedArray)
											.filter(
												(item) =>
													!starData.includes(item) ||
													!checkedArray.includes(item),
											),
									);
								} else {
									toast.error("Please Fill the Registeration Number.");
								}
							}}
						/>
						<label htmlFor={item.subject}>{item.subject}</label>
					</div>
				);
			})}
			<div style={{ marginTop: "10px" }}>
				<button onClick={() => setShowList(true)} className="add">
					Recommend
				</button>
			</div>
			{showList &&
				recommendArray.map((item, idx) => {
					return <div key={idx}>{item.subject}</div>;
				})}
		</div>
	);
};

export default Main;
