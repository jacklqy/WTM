/**
 * @author 冷 (https://github.com/LengYXin)
 * @email lengyingxin8966@gmail.com
 * @create date 2021-04-02 13:55:12
 * @modify date 2021-04-02 13:55:12
 * @desc 全局扩展函数
 */
import { ComponentOptions, defineComponent } from "vue"
import lodash from "lodash"
import $WtmConfig, { WtmConfig } from './config';
import { SystemController } from './controllers';
import { NavigationFailure } from "vue-router";
const options: ComponentOptions = {
    // data: function () {
    //     return {}
    // },
    methods: {
        /**
         * 跳转详情
         * 合并当前页面的 query 追加 detailsVisible 触发显示
         * @param {*} [query='0']
         */
        __wtmToDetails(query: any = '') {
            if (!lodash.isObject(query)) {
                query = { [$WtmConfig.detailsVisible]: query }
            }
            query = lodash.assign({}, this.$route.query, query)
            this.$router.replace({ query })
        },
        /**
         * 详情返回
         * 去除当前页面的 query 中 detailsVisible 触发隐藏
         */
        __wtmBackDetails() {
            const query = lodash.omit(lodash.assign({}, this.$route.query), [$WtmConfig.detailsVisible, '_readonly'])
            this.$router.replace({ query })
        },
        /**
         * 将组件转换为 row 组件
         * @param action  row 组件
         * @param PageController 页面控制器
         * @returns 
         */
        __wtmToRowAction(action, PageController) {
            return defineComponent({
                // extends action组件 class 组件取 __c
                extends: lodash.get(action, "__c", action),
                data() {
                    return { PageController }
                }
            })
        },
        /**
         * 记录 参数 到 url query
         * @param values 
         */
        __wtmToQuery(values) {
            const query = lodash.pickBy(
                lodash.assign({}, this.$route.query, values),
                this.lodash.identity
            );
            return this.$router.replace({ query });
        }
    },
}
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        readonly $System: SystemController;
        /**
         * 跳转详情
         * 合并当前页面的 query 追加 detailsVisible 触发显示
         * @param {*} [query]
         */
        readonly __wtmToDetails: (query?: any) => void
        /**
         * 详情返回
         * 去除当前页面的 query 中 detailsVisible 触发隐藏
         */
        readonly __wtmBackDetails: () => void
        /**
         * 将组件转换为 row 组件
         * @param action  row 组件
         * @param PageController 页面控制器
         * @returns 
         */
        readonly __wtmToRowAction: (action, PageController) => any
        /**
         * 记录 参数 到 url query
         * $router.replace
         * @param values 
         */
        readonly __wtmToQuery: (values) => Promise<void | NavigationFailure>
    }
}

export default options