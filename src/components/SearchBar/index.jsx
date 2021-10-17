import "../css/searchbar.css";

const SearchBar = () => {
	return (
		<div>
			<input
				type="text"
				placeholder="Search by subject name or code"
				className="search-bar"
			/>
		</div>
	);
};

export default SearchBar;
