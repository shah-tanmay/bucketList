import { toast } from "react-toastify";

const Input = ({ year, setYear, regNo, setRegNo }) => {
	const regNoRegex = /([0-9]{2}[MIS]{3}[0-9]{4})/;
	const onBlur = () => {
		if (!regNoRegex.test(regNo)) {
			toast.error("Please Enter Valid Registeration Number.");
		} else {
			const absoulteYear = parseInt(regNo.substring(0, 2));
			setYear(21 - absoulteYear + 1);
			if (year >= 5) {
				toast.error("This Portal is not for graduated students.");
			}
		}
	};
	return (
		<div style={{ display: "flex", gap: "25px" }}>
			<div>Registeration Number: </div>
			<input
				type="text"
				htmlFor="Registeration Number"
				placeholder="Registeration Number."
				onChange={({ target }) => {
					setRegNo(target.value);
				}}
				value={regNo}
				onBlur={onBlur}
			/>
		</div>
	);
};

export default Input;
