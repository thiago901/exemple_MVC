
const Sequelize = require('sequelize')


const sequelize = new Sequelize('mvc','root','123456',{
  host:'localhost',
  dialect:'sqlite',
  storage: 'database.sqlite'
})



module.exports={
  Sequelize,
  sequelize
}