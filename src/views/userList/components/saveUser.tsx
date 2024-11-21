import { Form, Input, InputNumber, Modal, Select } from "antd";
import { useState, forwardRef, useImperativeHandle, useCallback } from "react";

interface PropsType {
	onSaveData: (data: any, index: number | undefined) => void;
}

function SaveUser({ onSaveData }: PropsType, ref: any) {
	const [show, setShow] = useState(false);
	const [index, setIndex] = useState<undefined | number>(undefined);
	const [form] = Form.useForm();
	useImperativeHandle(
		ref,
		() => ({
			showModal: (data?: any, editIndex?: undefined | number) => {
				setShow(true);
				setIndex(editIndex);
				form.resetFields();
				// 创建
				if (data) {
					// 编辑
					form.setFieldsValue(data);
				}
			},
		}),
		[form],
	);
	const handleOk = useCallback(() => {
		form.validateFields().then(() => {
			setShow(false);
			onSaveData(form.getFieldsValue(), index);
		});
	}, [form, index, onSaveData]);
	return (
		<>
			<Modal title={index !== undefined ? "编辑" : "新增"} open={show} onOk={handleOk} onCancel={() => setShow(false)}>
				<Form form={form} name="saveUser">
					<Form.Item label="姓名" name="name" rules={[{ required: true, message: "请输入姓名" }]}>
						<Input placeholder="请输入姓名" allowClear />
					</Form.Item>
					<Form.Item label="年龄" name="age" rules={[{ required: true, message: "请输入年龄" }]}>
						<InputNumber className="w-full" controls={false} placeholder="请输入年龄" max={200} min={0} />
					</Form.Item>
					<Form.Item label="性别" name="sex" rules={[{ required: true, message: "请输入性别" }]}>
						<Select
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
					<Form.Item label="地址" name="address" rules={[{ required: true, message: "请输入地址" }]}>
						<Input.TextArea
							placeholder="请输入地址"
							allowClear
							count={{
								max: 200,
								show: true,
							}}
						/>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
}

export default forwardRef(SaveUser);
