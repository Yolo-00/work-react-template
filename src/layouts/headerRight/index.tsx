import { Avatar, Dropdown, Modal, Space, Flex, Breadcrumb } from "antd";
import type { MenuProps } from "antd";
import { SunOutlined, TranslationOutlined } from "@ant-design/icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCallback, useMemo } from "react";
import { setLoginOut } from "@/stores";
import avatarImg from "@/assets/image/avatar.png";
import useAppStore from "@/stores";

function HeaderRight() {
	const navigate = useNavigate();
	const { language, setLanguage, systemTheme, setSystemTheme, crumbsList } = useAppStore();
	const { t, i18n } = useTranslation();
	const { pathname } = useLocation();
	const breadcrumbItem = useMemo(
		() =>
			crumbsList.map(item => ({
				path: item.path,
				title: t(item.title),
			})),
		[crumbsList, t],
	);
	const themeItems: MenuProps["items"] = [
		{
			key: "light",
			label: <div>{t("layout.header.locales.theme.light")}</div>,
			onClick: () => {
				changeTheme("light");
			},
		},
		{
			key: "dark",
			label: <div>{t("layout.header.locales.theme.dark")}</div>,
			onClick: () => {
				changeTheme("dark");
			},
		},
	];
	const languageItems: MenuProps["items"] = [
		{
			key: "zh",
			label: <div>{t("layout.header.locales.zh")}</div>,
			onClick: () => {
				changeLanguage("zh");
			},
		},
		{
			key: "en",
			label: <div>{t("layout.header.locales.en")}</div>,
			onClick: () => {
				changeLanguage("en");
			},
		},
	];
	const infoItems: MenuProps["items"] = [
		{
			key: "1",
			label: <div>{t("layout.header.info.out")}</div>,
			onClick: () => {
				loginOut();
			},
		},
	];
	const changeTheme = (theme: "light" | "dark") => {
		setSystemTheme(theme);
	};
	const changeLanguage = (language: "zh" | "en") => {
		setLanguage(language);
		i18n.changeLanguage(language);
	};
	const breadcrumbItemRender = (currentRoute: any) => {
		return currentRoute.path === pathname ? (
			<span>{currentRoute.title}</span>
		) : (
			<Link to={crumbsList.find(item => item.path == currentRoute.path)?.url || ""}>{currentRoute.title}</Link>
		);
	};
	const loginOut = useCallback(() => {
		Modal.confirm({
			centered: true,
			destroyOnClose: true,
			title: "提示",
			content: "是否退出登录?",
			onOk: () => {
				setLoginOut();
				navigate("/login", {
					replace: true,
				});
			},
		});
	}, [navigate]);
	return (
		<div className="pr-8 flex-auto">
			<Flex justify="space-between">
				<Breadcrumb items={breadcrumbItem} itemRender={breadcrumbItemRender} className="flex items-center" />
				<Space align="center" size="large">
					<Dropdown menu={{ items: themeItems, selectedKeys: [systemTheme] }} placement="bottom" arrow={{ pointAtCenter: true }}>
						<SunOutlined className="text-2xl cursor-pointer block py-2 px-3" />
					</Dropdown>
					<Dropdown menu={{ items: languageItems, selectedKeys: [language] }} placement="bottom" arrow={{ pointAtCenter: true }}>
						<TranslationOutlined className="text-2xl cursor-pointer block py-2 px-3" />
					</Dropdown>
					<Dropdown menu={{ items: infoItems }} placement="bottom" arrow={{ pointAtCenter: true }}>
						<Avatar className="select-none" size={45} src={avatarImg} shape="square" />
					</Dropdown>
				</Space>
			</Flex>
		</div>
	);
}

export default HeaderRight;
