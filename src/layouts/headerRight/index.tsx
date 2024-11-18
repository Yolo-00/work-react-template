import { Avatar, Dropdown, Modal, Space } from "antd";
import type { MenuProps } from "antd";
import { TranslationOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { setLoginOut } from "@/stores";
import avatarImg from "@/assets/image/avatar.png";
import useAppStore from "@/stores";
import { useTranslation } from "react-i18next";
function HeaderRight() {
	const navigate = useNavigate();
	const { language, setLanguage } = useAppStore();
	const { t, i18n } = useTranslation();

	const infoItems: MenuProps["items"] = [
		{
			key: "1",
			label: <div>{t("layout.header.info.out")}</div>,
			onClick: () => {
				loginOut();
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
	const changeLanguage = (language: "zh" | "en") => {
		setLanguage(language);
		i18n.changeLanguage(language);
	};
	const loginOut = () => {
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
	};

	return (
		<div className="pr-8">
			<Space align="center" size="large">
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
