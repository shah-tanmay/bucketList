import subjectData from "../../fixtures/data.json";
import "../css/recommend.css";
import Fuse from "fuse.js";
import Card from "../Card";
import { toast } from "react-toastify";

const RecommendedSubjects = ({ year, bucketList, setBucketList, style }) => {
	const NumberToYear = {
		1: "First",
		2: "Second",
		3: "Third",
		4: "Fourth",
	};
	const options = {
		keys: ["recommendedYear"],
	};
	const fuse = new Fuse(subjectData, options);
	const results = fuse.search((year + 1).toString());
	console.log(results);
	const disabled = (data) => {
		if (bucketList.includes(data)) {
			return true;
		}
		return false;
	};
	let totalCredits = 0;
	bucketList.map((data) => {
		totalCredits = totalCredits + data.details.credit;
	});
	const addToBucketList = (data) => {
		if (totalCredits + data.details.credit <= 27) {
			if (bucketList.includes(data)) {
				toast.error("Subject Already Present in BucketList");
			} else {
				const optionsData = {
					keys: ["code"],
				};
				const fuse1 = new Fuse(subjectData, optionsData);
				const result = fuse1.search(data.code);
				setBucketList((prevSubjects) => [...prevSubjects, result[0].item]);
				toast.success("Subject Sucessfully Added to BucketList");
			}
		} else {
			toast.error("Cannot Have more than 27 credits");
		}
	};
	console.log("result", results);
	return (
		<div className="recommend-main" style={style}>
			<div className="recommend-title">
				Subjects Recommended in{" "}
				<span className="year">{NumberToYear[year + 1]}</span> Year
			</div>
			<div className="card-div">
				{results.map((result) => {
					return (
						<Card
							type="main"
							text={result.item.subject}
							code={result.item.code}
							credits={result.item.details.credit}
							onClick={() => addToBucketList(result.item)}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default RecommendedSubjects;
