var fs = require('fs'),
    path = require('path'),
    $ = require('jquery');

module.exports = {
    GetAllData: () => {
        let dataPath = path.join(__dirname, '/data/data.json')
        return new Promise((resolve, reject) => {
            fs.readFile(dataPath, 'utf8', (err, readData) => {
                if (err) reject(err)
                resolve(JSON.parse(readData))
            })
        })
    }
}