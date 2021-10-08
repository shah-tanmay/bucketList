import Search from "../Search";
import "../css/header.css";
import DropDown from "../DropDown";
import { useState } from "react";
import RecommendedSubjects from "../RecommendedSubjects";
import BucketList from "../BucketList";

const Main = () => {
	const [year, setYear] = useState("First");
	const [bucketList, setBucketList] = useState([]);
	return (
		<div>
			<div className="header-main">
				<div className="header-title">Project Name</div>
				<div>
					<Search bucketList={bucketList} setBucketList={setBucketList} />
				</div>
				<div>
					<DropDown year={year} setYear={setYear} />
				</div>
			</div>
			<div className="subdiv">
				<RecommendedSubjects
					year={year}
					bucketList={bucketList}
					setBucketList={setBucketList}
				/>
				<BucketList bucketList={bucketList} />
			</div>
		</div>
	);
};

export default Main;
