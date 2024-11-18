import { RouterProvider } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import { HappyProvider } from "@ant-design/happy-work-theme";
import AuthModule from "@/components/authModal";
import zhCN from "antd/locale/zh_CN";
import "dayjs/locale/zh-cn";
import router from "@/routers";
import "@/locales/index";
import useAppStore from "@/stores";
import { useEffect } from "react";

function App() {
	const { language, systemTheme } = useAppStore();
	useEffect(() => {
		if (systemTheme === "dark") {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [systemTheme]);
	return (
		<>
			<ConfigProvider
				locale={language === "zh" ? zhCN : undefined}
				theme={{
					algorithm: systemTheme === "dark" ? theme.darkAlgorithm : undefined,
				}}>
				<HappyProvider>
					<RouterProvider router={router} future={{ v7_startTransition: true }} />
					<AuthModule />
				</HappyProvider>
			</ConfigProvider>
		</>
	);
}

export default App;
