import jwt from 'jsonwebtoken';
function userMiddleware(request, reqsponse, next){
    const token = request.headers.token;
    const decoded = jwt.verify(token, process.env.JWT_USER_SECRET)

    if(decoded){
        request.userId = decoded.id;
        next()
    }else{
        reqsponse.status(403).json({
            message: 'You are not signed in '
        })
    }
}

export { userMiddleware }