import { useEffect } from "react";
export function useUnmounted(fun: () => void) {
	useEffect(() => {
		return () => {
			fun();
		};
	}, [fun]); // 只有当 fun 引用变化时才会重新执行
}

export default useUnmounted;