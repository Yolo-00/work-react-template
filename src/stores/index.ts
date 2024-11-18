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
    language: 'zh' | 'en';
}

type Action = {
    setToken: (token: string) => void;
    setUserInfo: (userInfo: UserInfo) => void;
    loginOut: () => void;
    setLanguage: (language: 'zh' | 'en') => void;
}

const useAppStore = create<State & Action>()(devtools(
    persist((set) => ({
        token: "",    // 登录凭证
        userInfo: {},   // 用户信息
        isReLogin: false,   // 是否重新登录
        language: 'zh',  // 语言
        setUserInfo: (userInfo: UserInfo) => set({ userInfo }),   // 设置用户信息
        setToken: (token: string) => set({ token }),      // 设置登录凭证
        loginOut: () => set({ token: "", userInfo: {} }),     // 退出登录
        setLanguage: (language: 'zh' | 'en') => set({ language }),    // 设置语言
    }), {
        name: "appStore"
    })
));

export const getToken = () => {
    return useAppStore.getState().token;
}

export const getLanguage = () => {
    return useAppStore.getState().language;
}

export const setLoginOut = () => {
    useAppStore.getState().loginOut();
}
export const setIsReLogin = (isReLogin: boolean) => useAppStore.setState({ isReLogin });


export default useAppStore;