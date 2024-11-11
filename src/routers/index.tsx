import { createHashRouter, redirect } from "react-router-dom";
import React from "react";
import Layout from "@/layouts";
import NotFound from "@/pages/notFound";

// 使用 React.lazy 动态导入页面组件
const Login = React.lazy(() => import("@/pages/login/index"));
const Home = React.lazy(() => import("@/pages/home/index"));
const UserList = React.lazy(() => import("@/pages/userList"));

const routers = [
	{
		path: "/login",
		element: <Login />,
		loader: () => {
			if (localStorage.getItem("token")) {
				return redirect("/");
			}
			return null;
		},
	},
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: beforeRouter,
			},
			{
				path: "/userList",
				element: <UserList />,
				loader: beforeRouter,
			},
		],
	},
	{
		path: "*", // 处理未匹配的路由
		element: <NotFound />,
	},
];

const router = createHashRouter(routers, {
	future: {
		v7_fetcherPersist: true,
		v7_normalizeFormMethod: true,
		v7_partialHydration: true,
		v7_relativeSplatPath: true,
		v7_skipActionErrorRevalidation: true,
	},
});

function beforeRouter() {
	if (!localStorage.getItem("token")) {
		return redirect("/login");
	}
	return null;
}

export default router;
