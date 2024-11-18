import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLanguage } from "@/stores";
import zh from './modules/zh.json';
import en from './modules/en.json';

i18n
    .use(initReactI18next) // 将 i18n 绑定到 react-i18next
    .init({
        fallbackLng: getLanguage(), // 默认语言
        debug: import.meta.env.MODE === 'development' ? true : false, // 开启调试模式
        interpolation: {
            escapeValue: false, // React 已经内置了 XSS 防护
        },
        resources: {
            zh: {
                translation: zh
            },
            en: {
                translation: en
            }
        }
    });

export default i18n;