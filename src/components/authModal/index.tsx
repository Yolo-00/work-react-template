import useAppStore, { setIsReLogin } from "@/stores";
import { Modal } from "antd";
import { useEffect } from "react";
function AuthModule() {
	const { isReLogin, loginOut } = useAppStore();
	useEffect(() => {
		if (isReLogin) {
			Modal.error({
				title: "警告",
				content: "登录失效请重新登录",
				okText: "去登录",
				onOk: () => {
					setIsReLogin(false);
					loginOut();
					window.location.href = location.origin + location.pathname;
				},
			});
		}
	}, [isReLogin, loginOut]);
	return <></>;
}

export default AuthModule;
