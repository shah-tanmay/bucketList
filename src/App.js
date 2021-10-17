import { useState } from "react";
import "./App.css";
import HeaderMain from "./components/HeaderMain";
import Pill from "./components/Pill";
import RecommendedSubjects from "./components/RecommendedSubjects";
import SearchBar from "./components/SearchBar";
import BucketList from "./components/BucketList";

function App() {
	const upperDivStyles = {
		marginTop: "20px",
		width: "65%",
		display: "flex",
		justifyContent: "space-between",
		marginLeft: "32px",
	};
	const [year, setYear] = useState(0);
	const [bucketList, setBucketList] = useState([]);
	return (
		<div className="App">
			<HeaderMain />
			<div style={upperDivStyles}>
				<Pill year={year} setYear={setYear} />
				<SearchBar />
			</div>
			<div style={{ display: "flex" }}>
				<RecommendedSubjects
					year={year}
					bucketList={bucketList}
					setBucketList={setBucketList}
					style={{ width: "75%" }}
				/>
				<BucketList
					year={year}
					bucketList={bucketList}
					setBucketList={setBucketList}
				/>
			</div>
		</div>
	);
}

export default App;
