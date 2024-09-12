import jwt from 'jsonwebtoken'
import UserModule from '../models/userSchemas.js'

const secret_key = process.env.JWT_KEY

export async function registerUser(req, res) {
    try {
        const {name, email, password} = req.body
        console.log(req.body)

        await UserModule.createUser(name, email, password);

        const newUser = UserModule.getUserByEmail(email)
        if (!newUser) {console.log("Usuário não encontrado")}
        const token = jwt.sign({userId: newUser._id}, secret_key, {expiresIn: '1h'})
        
        res.cookie('token', token)
        res.status(201).json({message: "Registrado e Token Enviado"})
    } catch (err) {
        res.status(500).json({message: 'Erro ao registrar o usuário!'})
    }

}

export async function loginUser(req, res) {
    try {
        const { email, password } = req.body;
        const result = await UserModule.loginParameters(email, password);

        if (result) {
            const LogedUser = await UserModule.getUserByEmail(email);
            const token = jwt.sign({ userId: LogedUser._id }, secret_key, { expiresIn: '1h' });

            console.log('Resultado positivo!');
            res.cookie('token', token);
            res.status(200).json({ token });
        } else {
            res.status(401).json({ message: 'Invalid email or password.' });
        }
    } catch (err) {
        console.error('Error during login:', err.message); 
        res.status(500).json({ message: 'Erro ao logar!' });
    }
}
