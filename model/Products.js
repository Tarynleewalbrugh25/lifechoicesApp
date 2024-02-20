import { Connection as db } from "../config/index.js";
class Products{
    fetchProducts(req, res){
        const qry = `
        SELECT prodID, prodName,prodQuantity, prodAmount, userID
        FROM Products;
        `
        db.query(qry,(err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchProduct(req,res){
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
            msg: 'new product Added'
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
    deleteProduct(req, res){
        const qry = `
        DELETE 
        FROM Products
        WHERE prodID = ${req.params.id}
        `
    db.query(qry, [req.body], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: 'Product deleted'
            })
        })
            db.query(qry,(err)=>{
                if(err) throw err
                res.json({
                    status: statusCode,
                    msg: 'Product deleted'
                })
            })
        }   
    
    }
export{
    Products
}