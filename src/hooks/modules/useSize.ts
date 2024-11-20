import { useEffect, useState } from "react";
export function useSize(target: { current: HTMLElement | null }) {
    const [state, setState] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {      
        const element = target.current;
        if (!element) return; // 确保 target.current 不为空

        const updateSize = () => {
            setState({
                width: element.clientWidth,
                height: element.clientHeight
            });
        };
        // 初始化尺寸
        updateSize();

        // 如果元素的尺寸发生变化，监听调整
        const resizeObserver = new ResizeObserver(() => updateSize());
        resizeObserver.observe(element);

        // 清理观察器
        return () => resizeObserver.disconnect();
    }, [target]);
    return [state.width, state.height]
};

export default useSize;