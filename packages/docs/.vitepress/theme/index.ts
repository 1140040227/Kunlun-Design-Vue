// import DefaultTheme from 'vitepress/theme'
import { define } from '../utils/types'
import type { Theme as ThemeType } from 'vitepress'
import Theme from 'vitepress/dist/client/theme-default/index'
import { globals } from '../vitepress'
import * as KunlunDesign from '@kunlun-design/components'
import { registerIcons } from '@kunlun-design/utils'

import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: defineAsyncComponent(() => import('../../zh/index.md'))
        },
        {
            path: '/list',
            component: defineAsyncComponent(
                () => import('../../zh/document/data-display/list/list.md')
            )
        }
    ]
})

export default define<ThemeType>({
    ...Theme,
    enhanceApp: ({ app }) => {
        app.use(router)
        Object.keys(KunlunDesign).forEach(key => {
            if (key.startsWith('Kl') && KunlunDesign[key].name) {
                app.component(KunlunDesign[key].name, KunlunDesign[key])
            }
        })
        globals.forEach(([name, comp]) => app.component(name, comp))
        // 注册全部图标
        registerIcons(app)
    }
})
