const studentArray = [
	{ name: "Niharika Gupta", regNo: "19MIS0263" },
	{ name: "Thimmareddy Sirisha Reddy", regNo: "20MIS0168" },
	{ name: "Mohammad Intiaz", regNo: "19MIS0392" },
];

const Footer = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				padding: "20px 50px",
				gap: "5rem",
			}}
		>
			{studentArray.map((data, idx) => {
				return (
					<div
						style={{
							display: "flex",
							gap: "1rem",
							fontSize: "20px",
							fontWeight: "bold",
						}}
						key={idx}
					>
						<div>{data.name}</div>
						<div>{data.regNo}</div>
					</div>
				);
			})}
		</div>
	);
};

export default Footer;
