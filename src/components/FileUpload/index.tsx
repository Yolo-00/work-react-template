import { message, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { GetProp, UploadProps } from "antd";
import { memo, useCallback, useMemo, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

interface FileUploadProps {
	setValue?: (e: string | ((prevState: string) => string)) => void; // 更新函数
	value?: string; // value
	limit?: number; // 限制数量
	fileSize?: number; // 限制大小
	fileType?: Array<string>; // 限制类型
	disabled?: boolean; // 是否禁用
	multiple?: boolean; // 是否多选
	listType?: UploadProps["listType"]; // 展示类型
	children?: React.ReactNode; // 自定义上传按钮
	className?: string; // 自定义样式类名
	onChange?: UploadProps["onChange"]; // 上传完成回调
}
type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const fileTypeList = ["image/png", "image/jpeg"];

function FileUpload({
	setValue,
	value = "",
	limit = 1,
	fileSize = 5,
	fileType = fileTypeList,
	disabled,
	multiple = false,
	listType = "picture-card",
	children,
	className,
	onChange,
}: FileUploadProps) {
	const isBefore = useRef(true);
	const myFileList = useMemo(() => {
		return value
			.split(",")
			.filter(Boolean)
			.map(item => ({ url: item, uid: uuidv4(), name: item }));
	}, [value]);

	// 上传前校验
	const beforeUpload = useCallback(
		(file: FileType, fileList: FileType[]) => {
			if (multiple) {
				if (fileList[0].uid === file.uid) {
					const currentFileList = value.split(",").filter(Boolean);
					if (fileList.length > limit - currentFileList.length) {
						message.error(`超出最大上次数量，最多上传 ${limit - currentFileList.length} 个文件!`);
						isBefore.current = false;
						return false;
					}
					const validFiles = fileList.filter(item => {
						const isTypeOk = fileType.includes(item.type);
						if (!isTypeOk) return false;
						const isLt = item.size / 1024 / 1024 < fileSize;
						if (!isLt) return false;
						return true;
					});
					const invalidFiles = fileList.length - validFiles.length;
					if (invalidFiles > 0) {
						message.error(`${invalidFiles} 个文件未通过校验`);
						isBefore.current = false;
						return false;
					}
					isBefore.current = true;
				}
				return isBefore.current;
			} else {
				const isTypeOk = fileType.includes(file.type);
				if (!isTypeOk) {
					message.error(`文件格式不正确, 请上传${fileType.join("/")}格式文件!`);
					return false;
				}
				const isLt = file.size / 1024 / 1024 < fileSize;
				if (!isLt) {
					message.error(`上传文件大小不能超过 ${fileSize} MB!`);
					return false;
				}
				return true;
			}
		},
		[multiple, fileSize, fileType, limit, value],
	);
	const customRequest: UploadProps["customRequest"] = ({ file }) => {
		console.log(file, "自定义上传file");
		if (setValue) {
			setValue(prevValue => prevValue + "," + "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png");
		}
	};
	const handleRemove: UploadProps["onRemove"] = file => {
		const newList = myFileList.filter(item => item.uid !== file.uid).map(item => item.url);
		if (setValue) {
			setValue(newList.join(","));
		}
	};
	return (
		<>
			<Upload
				className={className}
				listType={listType}
				disabled={disabled}
				maxCount={limit}
				multiple={multiple}
				fileList={myFileList}
				beforeUpload={beforeUpload}
				customRequest={customRequest}
				onRemove={handleRemove}
				onChange={onChange}>
				{myFileList.length >= limit ? null : children ? (
					children
				) : (
					<button style={{ border: 0, background: "none" }} type="button">
						<PlusOutlined />
						<div className="mt-2">Upload</div>
					</button>
				)}
			</Upload>
		</>
	);
}

export default memo(FileUpload);
