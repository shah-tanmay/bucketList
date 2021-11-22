import "./App.css";
import { useState } from "react";
import Main from "./components/App";
import Input from "./components/Input";
import RecommendedForYear from "./components/RecommendedForYear";

function App() {
	const [year, setYear] = useState(0);
	return (
		<div className="App">
			<div
				style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
			>
				<Input year={year} setYear={setYear} />
			</div>
			<div style={{ display: "flex", gap: "10rem", justifyContent: "center" }}>
				<Main />
				<RecommendedForYear year={year} />
			</div>
		</div>
	);
}

export default App;
