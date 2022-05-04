
const {Router} = require('express')
const PostsController =  require('../controllers/post.controller')

const postRoute = new Router()

postRoute.get('/formPosts',PostsController.formPosts)
postRoute.get('/formPosts/:id',PostsController.formPosts)

postRoute.post('/posts',PostsController.create)
postRoute.post('/post-delete/:id',PostsController.delete)
postRoute.post('/post-edite/:id',PostsController.edite)

postRoute.get('/listPosts',PostsController.index)

module.exports = postRoute