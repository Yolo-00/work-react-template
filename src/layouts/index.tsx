import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme, Watermark } from "antd";
import { useState, useEffect, type ReactNode } from "react";
import HeaderRight from "./headerRight";
import reactSvg from "/react.svg";
import { routers } from "@/routers";
import { CustomRouteObject, changeOpenKeys } from "./utils/index";

const { Header, Footer, Sider, Content } = Layout;
interface CustomMenuItem {
	key: string;
	label: string;
	icon: ReactNode;
	children?: CustomMenuItem[];
}

// 处理菜单列表
const changeMenuList = (list: CustomRouteObject[] = routers): CustomMenuItem[] => {
	return list.map(item => ({
		key: item.path || "",
		label: item.meta?.title || "",
		icon: item.meta?.icon,
		children: item?.children && changeMenuList(item.children),
	}));
};

function LayoutPage() {
	const navigate = useNavigate();
	const location = useLocation();
	const [collapsed, setCollapsed] = useState(false);
	const [openKeys, setOpenKeys] = useState<string[]>([]);
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	// 处理菜单点击事件
	const handleMenu = (e: any) => {
		navigate(e.key);
	};
	// 设置当前展开的 subMenu
	const onOpenChange = (openKeys: string[]) => {
		if (openKeys.length === 0 || openKeys.length === 1) return setOpenKeys(openKeys);
		const latestOpenKey = openKeys[openKeys.length - 1];
		if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys);
		setOpenKeys([latestOpenKey]);
	};
	useEffect(() => {
		console.log("layout page");
		if (!collapsed) {
			setOpenKeys(changeOpenKeys(location.pathname, routers));
		}
	}, [collapsed, location.pathname]);
	return (
		<>
			<Watermark content="Yolo">
				<Layout className="h-[100vh]">
					<Sider className="overflow-auto" trigger={null} collapsible collapsed={collapsed}>
						<div>
							<img className="w-10 h-10 mx-auto my-2 select-none" src={reactSvg} alt="" />
						</div>
						<Menu
							className="select-none"
							triggerSubMenuAction="click"
							theme="dark"
							mode="inline"
							openKeys={openKeys}
							selectedKeys={[location.pathname]}
							items={changeMenuList(routers)}
							onClick={handleMenu}
							onOpenChange={onOpenChange}
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
						<Footer className="w-full flex justify-center items-center bg-white dark:bg-black p-1">
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
