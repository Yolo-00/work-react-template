import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme, Watermark } from "antd";
import { useState, useEffect, type ReactNode, useCallback } from "react";
import { useTranslation } from "react-i18next";
import HeaderRight from "./headerRight";
import reactSvg from "/react.svg";
import { routers } from "@/routers/modules/root";
import { type CustomRouteObject, changeOpenKeys, changeClicks } from "./utils/index";
import useAppStore from "@/stores";

const { Header, Footer, Sider, Content } = Layout;
interface CustomMenuItem {
	key: string;
	label: string;
	icon: ReactNode;
	children?: CustomMenuItem[];
}

function LayoutPage() {
	const navigate = useNavigate();
	const location = useLocation();
	const { t } = useTranslation();
	const [collapsed, setCollapsed] = useState(false);
	const [openKeys, setOpenKeys] = useState<string[]>([]);
	const { setCrumbsList } = useAppStore();
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	// 处理菜单列表
	const changeMenuList = (list: CustomRouteObject[] = routers): CustomMenuItem[] => {
		return list.map(item => ({
			key: item.path || "",
			label: item.meta?.title ? t(item.meta?.title) : "",
			icon: item.meta?.icon,
			children: item?.children && changeMenuList(item.children),
		}));
	};

	// 处理菜单点击事件
	const handleMenu = (e: any) => {
		navigate(e.key);
		setCrumbsList(changeClicks(e.key, routers));
	};
	// 设置当前展开的 subMenu
	const onOpenChange = useCallback(
		(openKeys: string[]) => {
			if (openKeys.length === 0 || openKeys.length === 1) return setOpenKeys(openKeys);
			const latestOpenKey = openKeys[openKeys.length - 1];
			if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys);
			setOpenKeys([latestOpenKey]);
		},
		[setOpenKeys],
	);
	useEffect(() => {
		console.log("layout page");
		if (!collapsed) {
			setOpenKeys(changeOpenKeys(location.pathname, routers));
		}
		setCrumbsList(changeClicks(location.pathname, routers));
	}, [collapsed, location.pathname, setCrumbsList]);
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
						<Footer className="w-full flex justify-center items-center p-1" style={{ background: colorBgContainer }}>
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
