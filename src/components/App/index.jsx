import { useState } from "react";
import starData from "../../fixtures/data.json";

const Main = () => {
	const [checkedArray, setCheckedArray] = useState([]);
	const [recommendArray, setRecommendArray] = useState(starData);
	const [showList, setShowList] = useState(false);
	return (
		<div style={{ color: "white" }}>
			{starData.map((item) => {
				return (
					<div>
						<input
							type="checkbox"
							name={item.subject}
							onChange={(e) => {
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
								console.log(checkedArray);
								console.log(recommendArray);
							}}
						/>
						<label for={item.subject}>{item.subject}</label>
					</div>
				);
			})}
			<button onClick={() => setShowList(true)}>Recommend</button>
			{showList &&
				recommendArray.map((item) => {
					return <div>{item.subject}</div>;
				})}
		</div>
	);
};

export default Main;
