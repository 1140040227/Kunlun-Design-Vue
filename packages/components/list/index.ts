
export * from './src/list'  //把所有的东西都导出去了，那么scss也就出去了。
import { withInstall } from '@kunlun-design/utils'
import List from './src/list.vue'
import ListItem from './src/list-item.vue'

export const KlList = withInstall(List)
export const KlListItem = withInstall(ListItem)

export default { KlList, KlListItem }