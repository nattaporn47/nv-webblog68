const express = require('express')
const { sequelize } = require('./models') // เรียกใช้ sequelize object
const config = require('./config/config')

const app = express()

// --- Middleware Section ---
// ใช้ express.json() แทน body-parser ตามหนังสือหน้า 6 และ 12
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

// --- Routes Section ---
require('./routes')(app) 

// --- Server Startup Section ---
const port = config.port 

// สั่ง Sync ฐานข้อมูลก่อน แล้วค่อยเริ่ม Server
// force: false หมายถึง ถ้ามีตารางอยู่แล้ว ไม่ต้องลบสร้างใหม่ [cite: 197, 214]
sequelize.sync({ force: false })
    .then(() => {
        app.listen(port, function () {
            console.log('Server running on port ' + port) 
        })
    })