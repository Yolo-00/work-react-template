import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware';

type UserInfo = {
    id?: number;
    name?: string;
}

type State = {
    token: string;
    userInfo: UserInfo,
    isReLogin: boolean;
}

type Action = {
    setToken: (token: string) => void;
    setUserInfo: (userInfo: UserInfo) => void;
    loginOut: () => void;
}

const useAppStore = create<State & Action>()(devtools(
    persist((set) => ({
        token: "",    // 登录凭证
        userInfo: {},   // 用户信息
        isReLogin: false,   // 是否重新登录
        setUserInfo: (userInfo: UserInfo) => set({ userInfo }),   // 设置用户信息
        setToken: (token: string) => set({ token }),      // 设置登录凭证
        loginOut: () => set({ token: "", userInfo: {} }),     // 退出登录
    }), {
        name: "appStore"
    })
));

export const getToken = () => {
    return useAppStore.getState().token;
}

export const setLoginOut = () => {
    useAppStore.getState().loginOut();
}
export const setIsReLogin = (isReLogin: boolean) => useAppStore.setState({ isReLogin });

export default useAppStore;