import express from  'express'
import  { PORT } from './config.js'
import { UserReposity } from './user-repository.js'
import jwt from 'jsonwebtoken'
import { SECRET_JWT_KET } from './config.js'
import cookieParser from 'cookie-parser'


const app = express()
app.use(express.json)
app.use((req, res, next)=>{
    const {user} = req.session 
    res.render('', user)
    req.session={user:null} 

    try{
        const data = jwt.verify(token,SECRET_JWT_KET)
        req.session.user = data
    }catch(error){
        req.session.user = null 
    }

    next()
})
 

app.get ('/', (req, res) => {
    res.send('Hello, World!')
} )


app.post('/login', async (req, res) => {
    const {username, password} = req.body
    try{
        const user = await UserReposity.login(username, password)
        const token = jwt.sign({id: user._id, username: user.username}, 
            SECRET_JWT_KET,{
            expiresIn: '1h'
        } ) 
        res.send({user,token})
        res.send({user})
    }catch (error) {
        res.status(401 ).send(error.message )  // 400 Bad Request
    }
})



app.post('/register',async  (req, res) => {
    
    const { username, password } = req.body // ???
    console.log({username, password})

    try{
        const id =  await UserReposity.Create({ username, password})
        res.send({id})
        } catch (error) {
            res.status(400).send({ error }) 
        }
    
})


app.post('/logout', (req, res) => {  
    res
    .clearCookie('access_token')
    .json({message: 'Saliste De Tu sessión '})
})
app.get('/protected', (req, res) => {
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
} ) 

