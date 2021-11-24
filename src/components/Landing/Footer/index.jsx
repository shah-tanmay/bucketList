const studentArray = [
	{ name: "Niharika Gupta", regNo: "19MIS0111" },
	{ name: "Niharika Gupta", regNo: "19MIS0111" },
	{ name: "Niharika Gupta", regNo: "19MIS0111" },
	{ name: "Niharika Gupta", regNo: "19MIS0111" },
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
