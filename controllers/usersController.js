const { request, response } = require('express')

// ? GET

const getUsers = (req = request, res = response) => {

    // queryParams

    const { name = 'j2dev', lastname, email } = req.query

    res.json({
        name,
        lastname,
        email
    })
}

// ? POST

const postUser = (req, res) => {

    const { id, name, nickname, email } = req.body

    res.json({
        status: true,
        content: 'api post',
        userData: {
            id,
            name,
            nickname,
            email
        }
    })
}

// ? PUT

const putUser = (req, res) => {

    const id = req.params.id

    res.json({
        userId: id
    })
}

// ? DELETE

const deleteUser = (req, res) => res.json({
    status: true,
    content: 'api delete'
})

module.exports = {
    getUsers,
    postUser,
    putUser,
    deleteUser
}