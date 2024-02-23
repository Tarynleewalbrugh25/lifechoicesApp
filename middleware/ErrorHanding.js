    function errorHandling(err, req, res, next){
        if(err || res.statusCode >= 400 ){
            res.json({
                status: err.status || res.
                statusCode || 500,
                msg: 'An error, try again later .'
            })
        }else {
            next()
        }
    }
    export {
        errorHandling
    }

// to know it error handling middleware using keyword next tells us its middleware 