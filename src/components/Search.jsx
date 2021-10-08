import { useState } from "react";
import subjectData from "../fixtures/data.json";
import Fuse from "fuse.js";
import { toast } from "react-toastify";
import "./css/serach.css";
import searchicon from "./utils/search.svg";

const Search = ({ bucketList, setBucketList }) => {
	const [query, setQuery] = useState("");

	const numberToYear = {
		1: "First",
		2: "Second",
		3: "Third",
		4: "Fourth",
	};
	const options = {
		keys: ["subject", "code"],
	};
	const disabled = (data) => {
		if (bucketList.includes(data)) {
			return true;
		}
		return false;
	};
	const fuse = new Fuse(subjectData, options);
	var charResults = [];
	if (query) {
		const results = fuse.search(query);
		charResults = results.map((result) => result.item);
	}
	let totalCredits = 0;
	bucketList.map((data) => {
		totalCredits = totalCredits + data.details.credit;
	});
	const addToBucketList = (data) => {
		if (totalCredits + data.details.credit <= 27) {
			if (bucketList.includes(data)) {
				toast.error("Subject Already Present in BucketList");
			} else {
				const result = fuse.search(data.code);
				setBucketList((prevSubjects) => [...prevSubjects, result[0].item]);
				toast.success("Subject Sucessfully Added to BucketList");
			}
		} else {
			toast.error("Cannot Have more than 27 credits");
		}
	};
	return (
		<div>
			<div className="searchbar-div">
				<div className="searchbar">
					<img src={searchicon} alt="search" className="searchicon" />
					<input
						type="text"
						className="search-style"
						onChange={(e) => setQuery(e.target.value)}
						value={query}
						placeholder="Search by Subject Name or Code"
					/>
				</div>
			</div>
			<div className="card-groups">
				{charResults.length > 0 &&
					charResults.map((data) => {
						return (
							<div key={data.code} className="card">
								<div>Subject: {data.subject}</div>
								<div className="card-info">
									<div>Code: {data.code}</div>
									<div style={{ marginLeft: "10px" }}>
										Credit: {data.details.credit}
									</div>
									<div style={{ marginLeft: "20px" }}>
										<button
											className="addto"
											onClick={() => addToBucketList(data)}
											disabled={disabled(data)}
										>
											{!disabled(data) ? "Add to Bucket List" : "Added"}
										</button>
									</div>
								</div>
								<div>
									Recommended Year: {numberToYear[data.recommendedYear]}
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Search;
