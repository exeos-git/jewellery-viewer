import {defineConfig, normalizePath} from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'

// export default defineConfig({
//     plugins: [
//         viteStaticCopy({
//             targets: [
//                 {
//                     src: normalizePath(path.resolve(__dirname, './assets') + '/[!.]*'), // 1️⃣
//                     dest: normalizePath('./assets'), // 2️⃣
//                 },
//             ],
//         }),
//     ]
// })


export default defineConfig({
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: normalizePath(path.resolve(__dirname, './assets') + '/[!.]*'), // 1️⃣
                    dest: normalizePath('./assets'), // 2️⃣
                },
            ],
        }),
    ],
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
                editor: path.resolve(__dirname, 'editor.html')
            }
        }
    }
});

