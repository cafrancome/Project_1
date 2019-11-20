var fs = require('fs')
var path = require('path')

module.exports = {
    _path =  __dirname + path.join('/data.json') ,

    GetAllData =  () => {      
        return new Promise(function (resolve, reject) {
            fs.readFile(dataPath, 'utf8', function (err, readData) {
                if (err) reject(err)
                resolve(JSON.parse(readData))
            })
        })
    }

    // GetCity = () => {
    //     return new Promise(function (resolve, reject) {
    //         fs.readFile(dataPath, 'utf8', function (err, readData) {
    //             if (err) reject(err)
    //             resolve(JSON.parse(readData))
    //         })
    //     })
    // },

    // GetType = () => {
    //     return new Promise(function (resolve, reject) {
    //         fs.readFile(dataPath, 'utf8', function (err, readData) {
    //             if (err) reject(err)
    //             resolve(JSON.parse(readData))
    //         })
    //     })
    // }


}