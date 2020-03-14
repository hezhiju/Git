import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import 'uikit/dist/css/uikit.min.css'

UIkit.use(Icons)

export default (Vue) => {
  Vue.prototype.$uikit = UIkit
}