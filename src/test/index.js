const glob = require('glob')
const path = require('path')

function getPages() {
    console.log(path.join(__dirname, './src/pages'), 'path.join(__dirname, \'../pages/*\')')
    const pagesDir = glob.sync(path.join(__dirname, '../pages/*'))
    console.log(pagesDir, 'pagesDir')
    return pagesDir.map(item=> item.lastIndexOf('/'))
}
getPages()

// const options = {
//     matchBase: true
// }
//
// glob(path.join(__dirname, '../pages/*'), options, function (er, files) {
//
//     console.log(er, files, 'er, files')
// })
