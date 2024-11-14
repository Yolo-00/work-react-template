import { create } from "zustand";

type State = {
    token: string;
}

type Action = {
    setToken: (token: State['token']) => void;
    loginOut: () => void;
}
const useStore = create<State & Action>((set) => ({
    token: "",
    setToken: (token: string) => set({ token }),
    loginOut: () => set({ token: "" }),
}));

export default useStore;