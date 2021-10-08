import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
	<React.StrictMode>
		<ToastContainer
			position="top-right"
			autoClose={2000}
			hideProgressBar={false}
			newestOnTop={false}
			style={{ width: "fit-content", marginRight: "4px" }}
			closeOnClick
			rtl={false}
			toastClassName="dark-toast"
			pauseOnFocusLoss
			draggable
			pauseOnHover
		/>
		<App />
	</React.StrictMode>,
	document.getElementById("root"),
);
