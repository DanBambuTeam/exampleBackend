const userList = [{
    id: 1,
    name: 'Danielo',
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

    async create(body: any) {
        const newUser = await body;
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
        return userList[index] ;
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