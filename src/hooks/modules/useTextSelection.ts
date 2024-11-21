import { useEffect, useState } from "react";
export function useTextSelection() {
    const [state, setState] = useState({
        text: "",
        x: 0,
        y: 0,
    });
    useEffect(() => {
        const handleSelection = () => {
            const selection = window.getSelection();
            if (!selection?.rangeCount) return; // 没有选区时返回

            const range = selection.getRangeAt(0); // 获取选区的范围
            const rect = range.getBoundingClientRect(); // 获取选中区域的位置信息
            setState({
                text: selection.toString(), // 获取选中的文本
                x: rect.x, // 获取选区的起始位置
                y: rect.y, // 获取选区的起始位置
            });
        };
        // 监听文本选择变化
        document.addEventListener("mouseup", handleSelection);

        return () => {
            document.removeEventListener("mouseup", handleSelection);
        };
    }, [])
    return state;
}

export default useTextSelection;