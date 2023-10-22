import { defineConfig, UserConfigExport, ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
// import basicSsl from '@vitejs/plugin-basic-ssl'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  //获取各种环境下的对应的变量
  let env = loadEnv(mode, process.cwd());
  return {
    server: {
      host: '127.0.0.1',
      port: 8000,
      historyApiFallback: true,
    allowedHosts: "all",
      proxy: {
        '/blogApi': {
          target: "http://10.100.131.111:10010", // 后端服务器的地址
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/blogApi/, '')
        },
        '/userApi': {
          target: "http://10.100.131.111:10010", // 后端服务器的地址
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/userApi/, '')
        },
        '/loginApi': {
          target: "http://www.mintac.cn:8080", // 后端服务器的地址
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/loginApi/, ''),
        }
      }
    },
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
      }
    },
    //scss全局变量的一个配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    }
  }
})
