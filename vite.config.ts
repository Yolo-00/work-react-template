import { defineConfig, loadEnv, ConfigEnv, UserConfig, type PluginOption } from "vite";
import path from "node:path";
import { wrapperEnv } from "./src/utils/getEnv";
import react from '@vitejs/plugin-react';
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import postcssPresetEnv from "postcss-preset-env";
import tailwindcss from "tailwindcss";
import { viteServeInfoPlugin } from "./vite/plugin/vite-serve-info";
import { cdn } from "./vite/plugin/cdn";
import { name, version } from "./vite/plugin/app-info";

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  const viteEnv = wrapperEnv(env);
  return {
    base: "./",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    },
    server: {
      open: viteEnv.VITE_OPEN,
      host: true,
      port: viteEnv.VITE_PORT,
      proxy: {
        "/api": {
          target: "http://117.72.43.202:8099", // 本地node路径
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, "")
        }
      }
    },
    plugins: [
      react(),
      // * 是否生成包预览(分析依赖包大小,方便做优化处理)
      viteEnv.VITE_REPORT &&
      (visualizer({
        emitFile: true,
        filename: "stats.html"
      }) as PluginOption),
      // * gzip压缩
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: "gzip",
        ext: ".gz",
        deleteOriginFile: false
      }),
      // * 使用 svg 图标
      createSvgIconsPlugin({
        iconDirs: [path.resolve(__dirname, "./src/assets/icons")],
        symbolId: "icon-[dir]-[name]"
      }),
      viteEnv.VITE_CDN && cdn,
      viteServeInfoPlugin(),
    ],
    css: {
      // * postcss后处理器
      postcss: {
        // * postcssPresetEnv css语法降级
        plugins: [postcssPresetEnv(), tailwindcss]
      },
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          importers: [],
        },
      }
    },
    esbuild: {
      pure: ["console.log", "debugger"]
    },
    build: {
      outDir: "dist",
      rollupOptions: {
        output: {
          compact: true,
          // * 分包策略
          manualChunks: (id: string) => {
            if (id.includes("node_modules")) return "vendor";
          },
          // * 静态资源分类包装
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
        }
      }
    },
    define: {
      __APP_INFO__: JSON.stringify({
        pkg: {
          name,
          version
        },
        lastBuildTime: new Date().getTime()
      })
    }
  };
});
