import { createHashRouter, redirect } from "react-router-dom";
import React from "react";
import Layout from "@/layouts";
import NotFound from "@/views/notFound";
import { HomeOutlined, MenuOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { getToken } from "@/stores/index";
// 使用 React.lazy 动态导入页面组件
const Login = React.lazy(() => import("@/views/login/index"));
const Home = React.lazy(() => import("@/views/home/index"));
const UserList = React.lazy(() => import("@/views/userList"));
const Menu1 = React.lazy(() => import("@/views/menu/menu-1"));
const Menu2_1 = React.lazy(() => import("@/views/menu/menu-2/menu-2-1"));
export const routers = [
	{
		path: "/",
		element: <Home />,
		meta: {
			title: "menu.home",
			icon: <HomeOutlined />,
			desc: "首页",
		},
		loader: beforeRouter,
	},
	{
		path: "/userList",
		element: <UserList />,
		meta: {
			title: "menu.userList",
			icon: <UnorderedListOutlined />,
			desc: "用户列表",
		},
		loader: beforeRouter,
	},
	{
		path: "/menu",
		meta: {
			title: "menu.menu",
			icon: <MenuOutlined />,
			desc: "多级菜单",
		},
		loader: beforeRouter,
		children: [
			{
				path: "/menu/menu-1",
				element: <Menu1 />,
				meta: {
					title: "menu.menu-1",
				},
			},
			{
				path: "/menu/menu-2",
				meta: {
					title: "menu.menu-2",
				},
				children: [
					{
						path: "/menu/menu-2/menu-2-1",
						element: <Menu2_1 />,
						meta: {
							title: "menu.menu-2-1",
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
				if (getToken()) {
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
	if (!getToken()) {
		return redirect("/login");
	}
	return null;
}

export default router;
