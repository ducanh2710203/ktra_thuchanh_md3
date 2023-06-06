let DatabaseModel = require('./Database.model');
class homeModel extends DatabaseModel {
    static async getAllCourse() {
       try{
           let sql = 'select * from managerhomestay.homestay';
           return await DatabaseModel.querySql(sql);
       }
       catch (error){
           console.log(error.message)
       }
    }
    static async deleteCourseByCourseID(id) {
        let sql = `delete from homeStay where id = ${id};`;
        await DatabaseModel.querySql(sql);
    }
}
module.exports = homeModel;