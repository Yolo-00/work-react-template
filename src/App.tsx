import { RouterProvider } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
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
				<RouterProvider router={router} future={{ v7_startTransition: true }} />
			</ConfigProvider>
		</>
	);
}

export default App;
