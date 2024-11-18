import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import { HappyProvider } from "@ant-design/happy-work-theme";
import AuthModule from "@/components/authModal";
import zhCN from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";
import router from "@/routers";
import "@/locales/index";
import useAppStore from "@/stores";

function App() {
	const { language } = useAppStore();
	return (
		<>
			<ConfigProvider
				locale={language === "zh" ? zhCN : undefined}
				theme={
					{
						// algorithm: theme.darkAlgorithm,
					}
				}>
				<HappyProvider>
					<RouterProvider router={router} future={{ v7_startTransition: true }} />
					<AuthModule />
				</HappyProvider>
			</ConfigProvider>
		</>
	);
}

export default App;
