const UserController = require('./controllers/UserController')
const CoffeeController = require('./controllers/CoffeeController')

module.exports = (app) => {
    /* --- ส่วนจัดการ User (ผู้ใช้งาน) --- */
    // สร้างผู้ใช้งานใหม่
    app.post('/user', UserController.create)

    // แก้ไขข้อมูลผู้ใช้งาน
    app.put('/user/:userId', UserController.put)

    // ลบผู้ใช้งาน
    app.delete('/user/:userId', UserController.remove)

    // ดูผู้ใช้งานทั้งหมด
    app.get('/users', UserController.index)

    // ดูผู้ใช้งานรายคน
    app.get('/user/:userId', UserController.show)

    /* --- ส่วนจัดการ Coffee (เมนูกาแฟ) --- */
    // ดูเมนูทั้งหมด
    app.get('/coffees', CoffeeController.index)

    // ดูเมนูรายตัว
    app.get('/coffee/:coffeeId', CoffeeController.show)

    // สร้างเมนูใหม่
    app.post('/coffee', CoffeeController.create)

    // แก้ไขเมนู
    app.put('/coffee/:coffeeId', CoffeeController.put)

    // ลบเมนู
    app.delete('/coffee/:coffeeId', CoffeeController.remove)
}