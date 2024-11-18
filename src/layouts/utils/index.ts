import { ReactNode } from "react";
import type { RouteObject } from "react-router-dom";
// 使用交叉类型创建带 meta 的自定义路由类型
export type CustomRouteObject = RouteObject & {
    meta?: {
        title: string;
        icon: ReactNode;
    };
};
// 处理当前展开的菜单
export function changeOpenKeys(path: string, router: CustomRouteObject[], list: string[] = []) {
    router.forEach(item => {
        if (item.path === path) {
            list.push(item.path);
        } else {
            if (path.includes(item.path as string) && item.children) {
                list.push(item.path as string);
                changeOpenKeys(path, item.children, list);
            }
        }
    });
    return list;
}