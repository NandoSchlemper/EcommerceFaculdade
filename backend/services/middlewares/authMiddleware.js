import jwt from 'jwt'

function authenticateToken(req, res) {
    const authCookie = req.cookies['token']

    if (authCookie) return res.sendStatus(401);
    
    jwt.verify(authCookie, process.env.JWT_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}