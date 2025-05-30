import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'

//在这里我们给Vite增加了React插件
//同时设置根目录到src路径
export default defineConfig({
    plugins: [react()],
    root: path.resolve(__dirname, 'React'),
    css: {
        modules: {
            generateScopedName: '[name]__[local]___[hash:base64:5]',
            localsConvention: 'camelCase'
        },
    }
});