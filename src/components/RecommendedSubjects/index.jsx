import subjectData from "../../fixtures/data.json";
import "../css/recommend.css";
import Fuse from "fuse.js";
import { toast } from "react-toastify";

const RecommendedSubjects = ({ year, bucketList, setBucketList }) => {
	const YearToNumber = {
		First: "1",
		Second: "2",
		Third: "3",
		Fourth: "4",
	};
	const options = {
		keys: ["recommendedYear"],
	};
	const fuse = new Fuse(subjectData, options);
	const results = fuse.search(YearToNumber[year]);
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
		<div className="recommend-main">
			<div className="recommend-title">Subjects Recommended in {year} Year</div>
			{results.map((result) => {
				return (
					<div className="recommend-card">
						<div>
							Subject : {result.item.subject}
							<div className="recommend-info">
								<div>Code : {result.item.code}</div>
								<div style={{ marginLeft: "20px" }}>
									Credit : {result.item.details.credit}
								</div>
								<div style={{ marginLeft: "30px" }}>
									<button
										className="addto"
										onClick={() => addToBucketList(result.item)}
										disabled={disabled(result.item)}
									>
										{!disabled(result.item) ? "Add To Bucket List" : "Added"}
									</button>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default RecommendedSubjects;
