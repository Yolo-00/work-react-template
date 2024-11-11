import { Avatar, Dropdown } from "antd";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
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
		localStorage.removeItem("token");
		navigate("/login", {
			replace: true,
		});
	};

	return (
		<div className="pr-5">
			<Dropdown menu={{ items }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
				<Avatar size={45} src={avatarImg} shape="square" />
			</Dropdown>
		</div>
	);
}

export default HeaderRight;
