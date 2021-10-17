import Card from "./Card";
import "./css/bucket.css";
const BucketList = ({ bucketList, style }) => {
	console.log("bucketList", bucketList);
	let totalCredits = 0;
	bucketList.map((data) => {
		totalCredits = totalCredits + data.details.credit;
	});
	const remove = (data) => {
		const index = bucketList.indexOf(data);
		bucketList.splice(index, 1);
	};
	return (
		<div style={style} className="bucket">
			{bucketList.length > 0 && (
				<div className="bucket-header">
					<div className="bucket-title">Bucket List</div>
					<div className="total-credits">
						Total Credits:{" "}
						<span
							className={
								totalCredits < 16 ? "total-credits-less" : "total-credits-more"
							}
						>
							{totalCredits}
						</span>
					</div>
				</div>
			)}
			{bucketList.length > 0 ? (
				<div>
					{bucketList.map((data) => {
						return (
							<div key={data.code}>
								<Card
									type="bucketlist"
									text={data.subject}
									code={data.code}
									credits={data.details.credit}
									onClickRemove={() => remove(data)}
								/>
							</div>
						);
					})}
				</div>
			) : (
				<div className="bucket-title">Bucket List</div>
			)}
		</div>
	);
};

export default BucketList;
