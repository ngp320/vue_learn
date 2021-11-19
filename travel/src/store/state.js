
// 因为 store/index.js 会越来越复杂, 所以进行拆分
// try catch
let defaultCity = '上海'

try {
  if (localStorage.city) {
  // 如果使用 localStorage.city , 建议外层包一层 try catch, 某些浏览器如果用户关闭了本地存储的功能 或者 开启了隐身模式, 代码会直接运行不了了
    defaultCity = localStorage.city
  }
} catch (error) {
}

export default {
  city: defaultCity
}
