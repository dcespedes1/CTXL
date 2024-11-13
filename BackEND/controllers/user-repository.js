import crypto  from 'crypto';
import bcrypt from 'bcrypt'; 
import { SALT_ROUNDS } from './config';

const Session = Schema('session',{
    _id: {type: String, required: true},
    user: {type: String, required: true},
    session: {type: String, required: true},
    expires: {type: Date, required: true},
})
const User = Schema ('User',{
_id: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
})

export class UserReposity{
    static async Create  ({username, password,}){
        // 1. Validaciones  de Username 
        Validation.username(username)
        Validation.password(password)


        const User = User.findOne({username})
        if (!User) throw new Error('Username already exists')
        
        const isValid = await bcrypt.compareSync(password, User.password)
        if (!isValid) throw new Error('password is invalid') 

        const user = User.findOne({username})
        if (user) throw new Error('Username already exists')
        const id = crypto.randomUUID()
        const hashedPassword = await bcrypt.hashSync(password, SALT_ROUNDS)

        User.Create({
            _id: id,
            username,
            password: hashedPassword
        }).save()
        return id

    }
    static async login ({username, password}){
        Validation.username(username)
        Validation.password(password)

        const User = User.findOne({username})
        if (!User) throw new Error('Username does not   exists')

        const isValid = await bcrypt.compareSync(password, User.password)
        if (!isValid) throw new Error('password is invalid') 
         
            const {password: _, ...publicUser} = user 
            
            return publicUser
    }
}

class Validation {
    static username (username) {

        if (typeof username !== 'string') throw new Error('username must be a string') 
        if (username.length < 3) throw new Error('Username must be at least 3 characters long') 
    }

    static password (password) {
        if (typeof password !== 'string') throw new Error('password must be a string')
        if  (password.length < 3) throw new Error('Password must be at least')
    }
}