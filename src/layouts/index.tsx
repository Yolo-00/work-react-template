import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useState, useEffect } from "react";
import HeaderRight from "./HeaderRight";
import reactSvg from "/react.svg";

const { Header, Footer, Sider, Content } = Layout;
function LayoutPage() {
	const navigate = useNavigate();
	const location = useLocation();

	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	const handleMenu = (e: any) => {
		navigate(e.key);
	};
	useEffect(() => {
		console.log("layout page");
	}, []);
	return (
		<>
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
						items={[
							{
								key: "/",
								icon: <UserOutlined />,
								label: "home",
							},
							{
								key: "/userList",
								icon: <VideoCameraOutlined />,
								label: "userList",
							},
						]}
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
								style={{
									fontSize: "16px",
									width: 64,
									height: 64,
								}}
							/>
							<HeaderRight />
						</div>
					</Header>
					<Content
						style={{
							margin: "24px 16px",
							padding: 24,
							overflow: "auto",
							background: colorBgContainer,
							borderRadius: borderRadiusLG,
							marginBottom: 0,
						}}>
						<Outlet />
					</Content>
					<Footer className="w-full h-6 flex justify-center items-center">
						<a href="https://github.com/Yolo-00/work-template-react" target="_blank" className="text-lg font-semibold">
							work-template-react
						</a>
					</Footer>
				</Layout>
			</Layout>
		</>
	);
}

export default LayoutPage;
