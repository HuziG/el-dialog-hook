import { defineConfig } from 'windicss/helpers';
export default defineConfig({
    darkMode: 'class',
    attributify: false,
    plugins: [],
    theme: {},
    // 基于 windicss 的基础工具类，自定义组合成自己需要的类
    shortcuts: {
        // 单个标签自定义类名
        'flex-center': 'flex items-center justify-center',
        'flex-center-x': 'flex justify-center',
        'flex-center-y': 'flex items-center',
        'active-button': 'hover:opacity-50 active:opacity-30 transition-all cursor-pointer select-none'
    },
    extract: {
        include: ['example/**/*.{vue,html,jsx,tsx}'],
        exclude: ['node_modules', '.git'],
    },
});
