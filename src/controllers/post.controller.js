const Post = require('../models/Post')
class PostsController {

  async formPosts(req,resp){
    const {id} = req.params
    if(id){
      const post = await Post.findOne({
        raw: true,
        where:{
          id
        }
      })
  
      return resp.render('postCreate',{post})
    }
    return resp.render('postCreate')  
    
    
  }
  async create(req,resp){
    const {title,content} = req.body
    await Post.create({
      title,
      content
    })
    return resp.redirect('/listPosts')
  }
  async index(req,resp){
    const posts = await Post.findAll({
      raw: true,
    })
    return resp.render('postList',{posts})
  }
  async delete(req,resp){
    const {id} =req.params
    await Post.destroy({
      where: {
        id
      } 
    })
    return resp.redirect('/listPosts')
  }
  async edite(req,resp){
    const {id} =req.params
    const {content,title} =req.body
    await Post.update({
      content,
      title
    },{
      where: {
        id
      } 
    })
    return resp.redirect('/listPosts')
  }

}

module.exports = new PostsController()
