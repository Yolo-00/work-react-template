import React from "react";
import NotFound from "@/views/notFound";
import { GithubOutlined, HomeOutlined, MenuOutlined, UnorderedListOutlined } from "@ant-design/icons";
import type { CustomRouteObject } from "@/layouts/utils";

// 使用 React.lazy 动态导入页面组件
const Login = React.lazy(() => import("@/views/login/index"));

export const rootRouter = [
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "*", // 处理未匹配的路由
		element: <NotFound />,
	},
];

const Home = React.lazy(() => import("@/views/home/index"));
const UserList = React.lazy(() => import("@/views/userList"));
const UploadFile = React.lazy(() => import("@/views/components/uploadFile"));
const Menu1 = React.lazy(() => import("@/views/menu/menu-1"));
const Menu2_1 = React.lazy(() => import("@/views/menu/menu-2/menu-2-1"));

export const routers: Array<CustomRouteObject> = [
	{
		path: "/",
		element: <Home />,
		meta: {
			title: "menu.home",
			icon: <HomeOutlined />,
			desc: "首页",
		},
	},
	{
		path: "/userList",
		element: <UserList />,
		meta: {
			title: "menu.userList",
			icon: <UnorderedListOutlined />,
			desc: "用户列表",
		},
	},
	{
		path: "/components",
		meta: {
			title: "components.components",
			icon: <GithubOutlined />,
			desc: "自定义组件",
		},
		children: [
			{
				path: "/components/uploadFile",
				element: <UploadFile />,
				meta: {
					title: "components.uploadFile",
				},
			},
		],
	},
	{
		path: "/menu",
		meta: {
			title: "menu.menu",
			icon: <MenuOutlined />,
			desc: "多级菜单",
		},
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
