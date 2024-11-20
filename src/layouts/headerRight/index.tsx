import { Avatar, Dropdown, Modal, Space } from "antd";
import type { MenuProps } from "antd";
import { SunOutlined, TranslationOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { setLoginOut } from "@/stores";
import avatarImg from "@/assets/image/avatar.png";
import useAppStore from "@/stores";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";

function HeaderRight() {
	const navigate = useNavigate();
	const { language, setLanguage, systemTheme, setSystemTheme } = useAppStore();
	const { t, i18n } = useTranslation();
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
	const changeTheme = useCallback(
		(theme: "light" | "dark") => {
			setSystemTheme(theme);
		},
		[setSystemTheme],
	);
	const changeLanguage = useCallback(
		(language: "zh" | "en") => {
			setLanguage(language);
			i18n.changeLanguage(language);
		},
		[setLanguage, i18n],
	);
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
		<div className="pr-8">
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
		</div>
	);
}

export default HeaderRight;
