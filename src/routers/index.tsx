import { createHashRouter, redirect } from "react-router-dom";
import React from "react";
import Layout from "@/layouts";
import NotFound from "@/pages/notFound";
import { HomeOutlined, MenuOutlined, UnorderedListOutlined } from "@ant-design/icons";

// 使用 React.lazy 动态导入页面组件
const Login = React.lazy(() => import("@/pages/login/index"));
const Home = React.lazy(() => import("@/pages/home/index"));
const UserList = React.lazy(() => import("@/pages/userList"));
const Menu1 = React.lazy(() => import("@/pages/menu/menu-1"));
const Menu2_1 = React.lazy(() => import("@/pages/menu/menu-2/menu-2-1"));

export const routers = [
	{
		path: "/",
		element: <Home />,
		meta: {
			title: "首页",
			icon: <HomeOutlined />,
		},
		loader: beforeRouter,
	},
	{
		path: "/userList",
		element: <UserList />,
		meta: {
			title: "用户列表",
			icon: <UnorderedListOutlined />,
		},
		loader: beforeRouter,
	},
	{
		path: "/menu",
		meta: {
			title: "菜单",
			icon: <MenuOutlined />,
		},
		loader: beforeRouter,
		children: [
			{
				path: "/menu/menu-1",
				element: <Menu1 />,
				meta: {
					title: "菜单-1",
				},
			},
			{
				path: "/menu/menu-2",
				meta: {
					title: "菜单-2",
				},
				children: [
					{
						path: "/menu/menu-2/menu-2-1",
						element: <Menu2_1 />,
						meta: {
							title: "菜单-2-1",
						},
					},
				],
			},
		],
	},
];

const router = createHashRouter(
	[
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
			children: [...routers],
		},
		{
			path: "*", // 处理未匹配的路由
			element: <NotFound />,
		},
	],
	{
		future: {
			v7_fetcherPersist: true,
			v7_normalizeFormMethod: true,
			v7_partialHydration: true,
			v7_relativeSplatPath: true,
			v7_skipActionErrorRevalidation: true,
		},
	},
);

function beforeRouter() {
	if (!localStorage.getItem("token")) {
		return redirect("/login");
	}
	return null;
}

export default router;
