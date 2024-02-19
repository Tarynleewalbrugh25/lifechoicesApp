import { Connection as db } from "../config/index.js";
class Products{
    fetchProducts(req, res){
        const qry = `
        SELECT prodID, prodName,prodQuantity, prodAmount, userID
        FROM Products
        WHERE prodID = ${res.params.id};
        `
        db.query(qry,(err, result)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    fetchProducts(req,res){
        const qry = `
        SELECT prodID, prodName,prodQuantity, prodAmount, userID
        FROM Products
        WHERE prodID = ${req.params.id};
        `
        db.query(qry,(err, result)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    addProduct(req, res){
        const qry = `
        INSERT INTO Products
        SET ?;`
    db.query(qry, [req.body], (err)=>{
        if(err) throw err
        res.json({
            status: res.statusCode,
            msg: ''
        })
    })
        db.query(qry,(err)=>{
            if(err) throw err
            res.json({
                status: statusCode,
                msg: 'new Product added'
            })
        })
    }
}
export{
    Products
}