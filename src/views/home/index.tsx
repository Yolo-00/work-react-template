import { Button } from "antd";
import { setIsReLogin } from "@/stores";
import { useTranslation } from "react-i18next";
function Home() {
	const { t } = useTranslation();
	return (
		<>
			<h1 className="dark:text-red-500">{t("home")}</h1>
			<Button type="primary">Home Button</Button>
			<Button onClick={() => setIsReLogin(true)}>模仿请求token失效</Button>
			<div style={{ height: "100vh" }}></div>
			<h1>这是首页</h1>
		</>
	);
}

export default Home;
