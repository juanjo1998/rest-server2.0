const { Router } = require('express')
const { getUsers, postUser, putUser, deleteUser } = require('../controllers/usersController')
const router = Router()

// ? GET
router.get('/', getUsers)

// ? POST
router.post('/', postUser)

// ? PUT
router.put('/:id', putUser)

// ? DELETE
router.delete('/', deleteUser)

module.exports = router