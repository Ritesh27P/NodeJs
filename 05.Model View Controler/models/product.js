const { json } = require('body-parser');
const fs = require('fs')
const path = require('path')
const products = [];

module.exports = class Product{
    constructor(title){
        this.title = title;
    }

    save() {
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
        fs.readFile(p, (err, fileContent)=>{
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err)=>{
            })
        });

    }

    static fetchAll(cb){
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
        fs.readFile(p, (err, fileContent)=>{
            if(err){
                cb([]);
            }
            cb(JSON.parse(fileContent));
        });
    }
}