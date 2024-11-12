import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme, Watermark } from "antd";
import { useState, useEffect, useMemo, type ReactNode, useCallback } from "react";
import HeaderRight from "./headerRight";
import reactSvg from "/react.svg";
import { routers } from "@/routers";
import type { RouteObject } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

// 使用交叉类型创建带 meta 的自定义路由类型
type CustomRouteObject = RouteObject & {
	meta?: {
		title: string;
		icon: ReactNode;
	};
};
interface CustomMenuItem {
	key: string;
	label: string;
	icon: ReactNode;
	children?: CustomMenuItem[];
}

function LayoutPage() {
	const navigate = useNavigate();
	const location = useLocation();
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	// 处理菜单列表
	const changeMenuList = useCallback((list: CustomRouteObject[]): CustomMenuItem[] => {
		return list.map(item => ({
			key: item.path || "",
			label: item.meta?.title || "",
			icon: item.meta?.icon,
			children: item?.children && changeMenuList(item.children),
		}));
	}, []);
	const menuList = useMemo(() => {
		return changeMenuList(routers);
	}, [changeMenuList]);
	const handleMenu = (e: any) => {
		navigate(e.key);
	};
	useEffect(() => {
		console.log("layout page");
	}, []);
	return (
		<>
			<Watermark content="Yolo">
				<Layout className="h-[100vh]">
					<Sider className="overflow-auto" trigger={null} collapsible collapsed={collapsed}>
						<div>
							<img className="w-10 h-10 mx-auto my-2" src={reactSvg} alt="" />
						</div>
						<Menu
							triggerSubMenuAction="click"
							theme="dark"
							mode="inline"
							defaultSelectedKeys={[location.pathname]}
							items={menuList}
							onClick={handleMenu}
						/>
					</Sider>
					<Layout>
						<Header style={{ padding: 0, background: colorBgContainer }}>
							<div className="flex justify-between">
								<Button
									type="text"
									icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
									onClick={() => setCollapsed(!collapsed)}
									className="w-16 h-16"
									size="large"
								/>
								<HeaderRight />
							</div>
						</Header>
						<Content
							className="p-5 m-4 overflow-auto"
							style={{
								background: colorBgContainer,
								borderRadius: borderRadiusLG,
							}}>
							<Outlet />
						</Content>
						<Footer className="w-full flex justify-center items-center bg-white p-1">
							<a href="https://github.com/Yolo-00/work-template-react" target="_blank" className="text-lg font-semibold">
								work-template-react
							</a>
						</Footer>
					</Layout>
				</Layout>
			</Watermark>
		</>
	);
}

export default LayoutPage;
