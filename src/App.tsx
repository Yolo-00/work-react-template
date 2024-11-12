import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import { HappyProvider } from "@ant-design/happy-work-theme";
import zhCN from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";
import router from "./routers";

function App() {
	return (
		<>
			<ConfigProvider
				locale={zhCN}
				theme={
					{
						// algorithm: theme.darkAlgorithm,
					}
				}>
				<HappyProvider>
					<RouterProvider router={router} future={{ v7_startTransition: true }} />
				</HappyProvider>
			</ConfigProvider>
		</>
	);
}

export default App;
