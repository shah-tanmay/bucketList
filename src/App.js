import "./App.css";
import { useState } from "react";
import Main from "./components/App";
import Input from "./components/Input";
import RecommendedForYear from "./components/RecommendedForYear";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Landing/Navbar";

function App() {
	const [year, setYear] = useState(0);
	const [regNo, setRegNo] = useState();
	return (
		<Router>
			<Switch>
				<Route path="/subjectlist">
					<Navbar />
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							width: "80%",
							margin: "auto",
						}}
					>
						<h3>
							Students can be advised which program core subjects to take up in
							the forthcoming semesters, by enlisting the courses they have
							already finished.
						</h3>
					</div>
					<div className="App">
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								marginTop: "50px",
							}}
						>
							<Input
								year={year}
								setYear={setYear}
								setRegNo={setRegNo}
								regNo={regNo}
							/>
						</div>
						<div
							style={{
								display: "flex",
								gap: "10rem",
								justifyContent: "center",
							}}
						>
							<Main regNo={regNo} />
							<RecommendedForYear year={year} />
						</div>
					</div>
				</Route>
				<Route path="/">
					<div className="App">
						<Landing />
					</div>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
