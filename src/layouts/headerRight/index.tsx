import { Avatar, Dropdown, Modal } from "antd";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { setLoginOut } from "@/stores";
import avatarImg from "@/assets/image/avatar.png";
function HeaderRight() {
	const navigate = useNavigate();
	const items: MenuProps["items"] = [
		{
			key: "1",
			label: <div>退出登录</div>,
			onClick: () => {
				loginOut();
			},
		},
	];
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
			<Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
				<Avatar className="select-none" size={45} src={avatarImg} shape="square" />
			</Dropdown>
		</div>
	);
}

export default HeaderRight;
