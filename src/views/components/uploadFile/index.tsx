import FileUpload from "@/components/FileUpload";
import { useState } from "react";
import "./app.scss";

function UploadFile() {
	const [state, setState] = useState("https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg");
	return (
		<div  className="custom-upload-file-container">
			<FileUpload setValue={setState} value={state} limit={2} />
		</div>
	);
}

export default UploadFile;
