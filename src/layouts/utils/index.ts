import { ReactNode } from "react";
import type { RouteObject } from "react-router-dom";
// 使用交叉类型创建带 meta 的自定义路由类型
export type CustomRouteObject = RouteObject & {
    meta?: {
        title?: string;
        icon?: ReactNode;
        desc?: string
    };
    children?: CustomRouteObject[];
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

// 处理面包屑列表
export function changeClicks(path: string, router: CustomRouteObject[], list: Array<{ path: string; title: string; url: string }> = []) {
    router.forEach(item => {
        if (item.path === path) {
            list.push({ title: item.meta?.title || "", path: item.path, url: item.path });
        } else {
            if (path.includes(item.path as string) && item.children) {
                list.push({ title: item.meta?.title || "", path: item.path || "", url: item.children[0].path || "" });
                changeClicks(path, item.children, list);
            }
        }
    });
    return list;
}