import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import router from "./routers";

function App() {
	return (
		<>
			<ConfigProvider locale={zhCN}>
				<RouterProvider router={router} future={{ v7_startTransition: true }} />
			</ConfigProvider>
		</>
	);
}

export default App;
