import jwt from 'jsonwebtoken';
function adminMiddleware(request, response, next){
    const token = request.headers.token;
    const decoded = jwt.verify(token, process.env.JWT_ADMIN_SECRET)

    if(decoded){
        request.adminId = decoded.id;
        next()
    }else{
        response.status(403).json({
            message: 'You are not signed in '
        })
    }
}

export { adminMiddleware }