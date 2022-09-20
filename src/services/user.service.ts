import bcrypt from 'bcrypt';

const userList = [{
    id: 1,
    name: 'Danielo',
    email: 'daniel.sanchez@bambu-mobile.com',
    password: '1234'
}]

class UserService {
    constructor() { }


    async find() {
        const users = await userList;
        return users;
    }

    async findOne(id: any) {
        const user = userList.find(item => item.id == id);
        if (!user) {
            return {
                message: 'Usuario no encontrado'
            }
        }
        return user;
    }

    async findByEmail(email: string) {
        const user = userList.find(item => item.email === email);
        if (!user) {
            return {
                message: 'email no encontrado'
            }
        }
        return user;
    }

    async create(body: any) {
        const hash = await bcrypt.hash(body.password, 10);
        const newUser = {
            ...body,
            password: hash
        };
        userList.push(newUser);
        return newUser;
    }

    async update(id: any, changes: any) {
        const index = userList.findIndex(item => item.id == id);
        let userUpdated = userList[index];
        userList[index] = {
            ...userUpdated,
            ...changes
        }
        return userList[index];
    }

    async delete(id: any) {
        const index = userList.findIndex(item => item.id == id);
        userList.splice(index, 1);
        return {
            message: 'Usuario eliminado'
        };
    }
}

export default UserService;