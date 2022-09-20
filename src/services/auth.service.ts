import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserService from '../services/user.service';
import config from '../config';


const service = new UserService();

class AuthService {
    async getUser(email: string, password: string) {
        const user: any = await service.findByEmail(email);
        if (!user) {
            throw new Error('chispas no existe el usuario');
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            throw new Error('Acces denied');
        }
        return user;
    }


    async singToken(user: any) {
        const payload = {
            sub: user.id,
            name: user.name,
        }
        const token = jwt.sign(payload, config.jwtSecret);

        return { user, token };
    }
}


export default AuthService;