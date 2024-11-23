import { Button } from "antd";
import { setIsReLogin } from "@/stores";
import { useTranslation } from "react-i18next";
import { useSize } from "@/hooks";
import { useRef } from "react";

function Home() {
	const { t } = useTranslation();
	const domRef = useRef<any>(null);
	const [width, height] = useSize(domRef);
	return (
		<>
			<h1 ref={domRef} className="dark:text-red-500">
				{t("home")}
			</h1>
			{width + "-" + height}
			<Button type="primary">Home Button</Button>
			<Button onClick={() => setIsReLogin(true)}>模仿请求token失效</Button>
		</>
	);
}

export default Home;
