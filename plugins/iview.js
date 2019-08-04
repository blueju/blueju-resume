import Vue from 'vue'

// 全量引入
// import iView from 'iview'
// Vue.use(iView)

// 按需引入
import {
    Row,
    Col,
    Card,
    Icon
} from 'iview'
Vue.component('Row', Row);
Vue.component('Col', Col);
Vue.component('Card', Card);
Vue.component('Icon', Icon);
// import Row from 'iview'
// import Col from 'iview'
// import Card from 'iview'
// import Icon from 'iview'
// Vue.use(Row)
// Vue.use(Col)
// Vue.use(Card)
// Vue.use(Icon)

// 这个我也不知道是啥，可能是国际化
// import locale from 'iview/dist/locale/en-US' // Change locale, check node_modules/iview/dist/locale