import { Button, DatePicker, Form, Input, InputNumber, Modal, Select, Space, Table } from "antd";
import dayjs from "dayjs";
import { useCallback, useEffect, useRef, useState } from "react";
import SaveUser from "./components/saveUser";

const dataSource = [
	{
		key: "1",
		name: "胡彦斌",
		age: 32,
		address: "西湖区湖底公园1号",
		sex: 1,
		createTime: "2022-01-01 00:00:00",
	},
	{
		key: "2",
		name: "胡彦祖1",
		age: 42,
		address: "西湖区湖底公园1号",
		sex: 1,
		createTime: "2022-01-01 00:00:00",
	},
	{
		key: "3",
		name: "胡彦祖2",
		age: 42,
		address: "西湖区湖底公园1号",
		sex: 1,
		createTime: "2022-01-01 00:00:00",
	},
	{
		key: "4",
		name: "胡彦祖3",
		age: 42,
		address: "西湖区湖底公园1号",
		sex: 1,
		createTime: "2022-01-01 00:00:00",
	},
	{
		key: "5",
		name: "胡彦祖4",
		age: 42,
		address: "西湖区湖底公园1号",
		sex: 1,
		createTime: "2022-01-01 00:00:00",
	},
];

const columns = [
	{
		title: "姓名",
		dataIndex: "name",
		key: "name",
	},
	{
		title: "年龄",
		dataIndex: "age",
		key: "age",
		width: 80,
		sorter: (a: { age: number }, b: { age: number }) => a.age - b.age,
	},
	{
		title: "性别",
		dataIndex: "sex",
		key: "sex",
		render: (_: any, record: any) => {
			return record.sex === 1 ? "男" : "女";
		},
	},
	{
		title: "住址",
		dataIndex: "address",
		key: "address",
	},
	{
		title: "创建时间",
		dataIndex: "createTime",
		key: "createTime",
	},
];

function UserList() {
	const [form] = Form.useForm();
	const [tableList, setTableList] = useState([...dataSource]);
	const [queryData, setQueryData] = useState({
		current: 1,
		pageSize: 5,
		total: tableList.length,
	});
	const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
	const [loading, setLoading] = useState(true);
	const saveUserRef = useRef<any>(null);
	// 查询表单
	const handleQuery = useCallback(() => {
		console.log(form.getFieldsValue());
	}, [form]);
	// 重置表单
	const handleReset = useCallback(() => {
		form.resetFields();
	}, [form]);
	// 获取表格数据
	const getTableData = (pagination: any) => {
		setQueryData({
			current: pagination.current,
			pageSize: pagination.pageSize,
			total: pagination.total,
		});
	};
	// 删除表格数据
	const handleDelete = (index: number) => {
		Modal.confirm({
			centered: true,
			destroyOnClose: true,
			title: "提示",
			content: "是否确认删除?",
			onOk: () => {
				const newList = [...tableList];
				newList.splice(index, 1);
				setTableList(newList);
				setQueryData({
					...queryData,
					total: queryData.total - 1,
				});
			},
		});
	};

	// 批量删除
	const handleBatchDelete = () => {
		if (selectedRowKeys.length === 0) {
			Modal.warning({
				centered: true,
				destroyOnClose: true,
				title: "提示",
				content: "请选择数据",
			});
			return;
		}
		Modal.confirm({
			centered: true,
			destroyOnClose: true,
			title: "提示",
			content: "是否确认删除?",
			onOk: () => {
				setTableList(tableList.filter(item => !selectedRowKeys.includes(item.key)));
				setQueryData({
					...queryData,
					total: queryData.total - selectedRowKeys.length,
				});
			},
		});
	};

	// 创建表格数据
	const handleAdd = () => {
		saveUserRef.current?.showModal();
	};

	// 编辑表格数据
	const handleUpdate = (record: any, index: number) => {
		saveUserRef.current?.showModal(record, index);
	};

	const getSaveData = (data: any, index: undefined | number) => {
		if (index !== undefined) {
			const newList = [...tableList];
			newList[index] = { ...data, createTime: newList[index].createTime, key: newList[index].key };
			setTableList(newList);
		} else {
			setTableList([
				{
					...data,
					createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
					key: tableList.length > 0 ? tableList[tableList.length - 1].key + 1 : 1,
				},
				...tableList,
			]);
			setQueryData({
				...queryData,
				total: queryData.total + 1,
			});
		}
	};

	// 获取选中数据
	const getSelectChange = (selectedRowKeys: any) => {
		setSelectedRowKeys(selectedRowKeys);
	};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, [loading]);
	return (
		<>
			<Space direction="vertical" size="large" className="w-full">
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
					<Form.Item
						label="时间"
						name="time"
						getValueFromEvent={(_, valueString) => valueString}
						getValueProps={value => ({ value: value && dayjs(value) })}>
						<DatePicker
							className="w-48"
							presets={[
								{ label: "前一天", value: dayjs().add(-1, "d") },
								{ label: "前一周", value: dayjs().add(-7, "d") },
								{ label: "前一月", value: dayjs().add(-1, "month") },
							]}
							placeholder="请选择时间"
							format={"YYYY-MM-DD HH:mm:ss"}
							showTime
						/>
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
				<Space>
					<Button type="primary" onClick={handleAdd}>
						创建
					</Button>
					<Button type="primary" danger onClick={handleBatchDelete}>
						批量删除
					</Button>
				</Space>
				<Table
					dataSource={tableList}
					bordered
					sticky
					loading={loading}
					tableLayout="auto"
					pagination={{
						showQuickJumper: true,
						showTotal: total => `共 ${total} 条`,
						...queryData,
					}}
					rowSelection={{
						type: "checkbox",
						onChange: getSelectChange,
					}}
					onChange={getTableData}>
					<Table.Column
						title="索引"
						dataIndex="index"
						key="index"
						render={(_: any, __: any, index: number) => index + 1}></Table.Column>
					{columns.map(item => {
						return <Table.Column {...item} key={item.key} />;
					})}
					<Table.Column
						title="操作"
						dataIndex="operation"
						key="operation"
						render={(_: any, record: any, index: number) => (
							<Space size="large">
								<Button type="primary" onClick={() => handleUpdate(record, index)}>
									编辑
								</Button>
								<Button type="primary" danger onClick={() => handleDelete(index)}>
									删除
								</Button>
							</Space>
						)}></Table.Column>
				</Table>
				<SaveUser ref={saveUserRef} onSaveData={getSaveData} />
			</Space>
		</>
	);
}

export default UserList;
