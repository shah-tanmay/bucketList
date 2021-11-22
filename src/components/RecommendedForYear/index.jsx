import subjectsData from "../../fixtures/data.json";
const RecommendedForYear = ({ year }) => {
	return (
		<div>
			<h3>Subjects Recommended As Per Your Year.</h3>
			{subjectsData
				.filter((subject) => subject.recommendedYear === year)
				.map((item, idx) => {
					return <div key={idx}>{item.subject}</div>;
				})}
		</div>
	);
};
export default RecommendedForYear;
