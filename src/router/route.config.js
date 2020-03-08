
// import Login from '../pages/login/login'
// import Index from '../App'

const path = require('path')
const files = require.context('../pages', true, /\.jsx$/)

const modules = {}
files.keys().forEach(key => {
    const name = path.basename(key)
    console.log(name, key, 'name')
    modules[name] = files(key).default || files(key)
})
console.log(modules, files, 'modules files')
export default  {
    modules
}
// export const routeConfig = [
//     {
//         path: '/',
//         component: Index,
//     },
//     {
//         path: '/login',
//         component: Login
//     }
// ]
