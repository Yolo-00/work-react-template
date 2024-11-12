import { Button, DatePicker, Form, Input, InputNumber, Select, Space } from "antd";
import { useCallback } from "react";
function UserList() {
	const [form] = Form.useForm();
	// 查询表单
	const handleQuery = useCallback(() => {
		console.log(form.getFieldsValue());
	}, [form]);
	// 重置表单
	const handleReset = useCallback(() => {
		form.resetFields();
	}, [form]);
	return (
		<>
			<Form form={form} name="query" layout="inline">
				<Form.Item label="姓名" name="name">
					<Input className="w-48" placeholder="请输入姓名" allowClear />
				</Form.Item>
				<Form.Item label="年龄" name="age">
					<InputNumber className="w-48" controls={false} placeholder="请输入年龄" max={200} min={0} />
				</Form.Item>
				<Form.Item label="性别" name="sex">
					<Select
						className="w-48"
						placeholder="请输入性别"
						allowClear
						showSearch
						optionFilterProp="label"
						defaultActiveFirstOption={false}
						options={[
							{ label: "男", value: 1 },
							{ label: "女", value: 2 },
						]}
					/>
				</Form.Item>
				<Form.Item label="时间" name="time">
					<DatePicker className="w-48" placeholder="请选择时间" format={"YYYY-MM-DD HH:mm:ss"} showTime />
				</Form.Item>
				<Form.Item>
					<Space wrap size="middle">
						<Button type="primary" onClick={handleQuery}>
							搜索
						</Button>
						<Button onClick={handleReset}>重置</Button>
					</Space>
				</Form.Item>
			</Form>
		</>
	);
}

export default UserList;
