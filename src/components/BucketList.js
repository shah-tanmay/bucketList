import "./css/bucket.css";
const BucketList = ({ bucketList }) => {
	console.log(bucketList);
	let totalCredits = 0;
	bucketList.map((data) => {
		totalCredits = totalCredits + data.details.credit;
	});
	return (
		<div className="bucket">
			{bucketList.length > 0 && "Bucket List"}
			{bucketList.length > 0 ? (
				<div className="bucketlist">
					{bucketList.map((data) => {
						return (
							<div key={data.code} className="bucket-card">
								Subject: {data.subject}
								<div className="border-info">
									<div>Code: {data.code}</div>
									<div style={{ marginLeft: "20px" }}>
										Credit: {data.details.credit}
									</div>
								</div>
							</div>
						);
					})}
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
			) : (
				<div>Bucket List</div>
			)}
		</div>
	);
};

export default BucketList;
