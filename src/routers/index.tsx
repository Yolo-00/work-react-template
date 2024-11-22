import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "@/layouts";
import { Modal } from "antd";
import useAppStore, { setIsReLogin } from "@/stores";
import { rootRouter, routers } from "./modules/root";
import type { CustomRouteObject } from "@/layouts/utils";

function AuthRouter({ routerList }: { routerList: Array<CustomRouteObject> }) {
	const router = useRoutes([
		{
			path: "/",
			element: <Layout />,
			children: routerList,
		},
		...rootRouter,
	]);
	return router;
}
const AppRouter = () => {
	const routes = useRoutes(rootRouter);
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const { token, isReLogin, loginOut } = useAppStore();
	const [router, setRouter] = useState([]);
	useEffect(() => {
		if (!token) {
			// 登录失效
			if (pathname !== "/login") {
				loginOut();
				navigate("/login", {
					replace: true,
				});
			}
		} else {
			if (pathname === "/login") {
				navigate("/", {
					replace: true,
				});
			}
			// 获取路由
			setRouter(routers as any);
		}
		if (isReLogin) {
			Modal.error({
				title: "警告",
				content: "登录失效请重新登录",
				okText: "去登录",
				onOk: () => {
					setIsReLogin(false);
					loginOut();
					navigate("/login", {
						replace: true,
					});
				},
			});
		}
	}, [isReLogin, pathname, token, loginOut, navigate]);
	return <>{token ? <AuthRouter routerList={router} /> : routes}</>;
};

export default AppRouter;
