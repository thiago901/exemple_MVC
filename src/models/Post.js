const db = require('../configs/db')


const Post = db.sequelize.define('postagens',{
  title:{
    type:db.Sequelize.STRING
  },
  content:{
    type:db.Sequelize.STRING
  }
})

// Post.sync({force:true})
module.exports = Post