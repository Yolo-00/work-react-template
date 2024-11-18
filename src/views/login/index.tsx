import "./index.scss";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";
import useAppStore from "@/stores/index";

function Login() {
	const navigate = useNavigate();
	const { setToken, setUserInfo } = useAppStore();
	const title = import.meta.env.VITE_APP_TITLE;
	const formData = {
		account: "admin",
		password: "123456",
	};
	const onFinish = (values: any) => {
		console.log("Success:", values);
		setToken(new Date().getTime().toString());
		setUserInfo({
			id: 1,
			name: "admin",
		});
		notification.success({
			message: "登录成功",
			duration: 2,
			showProgress: true,
			style: {
				width: 250,
			},
		});
		navigate("/", {
			replace: true,
		});
	};
	return (
		<div className="login-bg h-[100vh] flex justify-center items-center">
			<div className="p-5 bg-white dark:bg-black rounded-lg w-80 pb-0">
				<div className="text-center font-semibold mb-4 text-xl dark:text-white">{title}</div>
				<Form scrollToFirstError name="login" initialValues={formData} onFinish={onFinish}>
					<Form.Item name="account" rules={[{ required: true, message: "请输入账号" }]}>
						<Input prefix={<UserOutlined />} placeholder="请输入账号" />
					</Form.Item>
					<Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
						<Input prefix={<LockOutlined />} type="password" placeholder="请输入密码" />
					</Form.Item>
					<Form.Item>
						<Button block type="primary" htmlType="submit">
							登录
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}

export default Login;
