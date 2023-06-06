const qs = require('qs');
const BaseFunctionController = require('./BaseFunction.controller');
const CourseModel = require('../model/home.model.js');
const url = require("url");
const fs = require("fs");
const homeModel = require("../model/home.model");
class home{
    static async getHomePage(req, res) {
        let html = await BaseFunctionController.readFileHTML('./src/view/index.html');
        res.writeHead(200, {'Context-type': 'text/html'});
        res.write(html);
        res.end();
    }
    static async getListPage(req, res) {
        let html = await BaseFunctionController.readFileHTML('./src/view/list.html');
        res.writeHead(200, {'Context-type': 'text/html'});
        res.write(html);
        res.end();
    }
    static async getNotFoundPage(req, res) {
        let html = await BaseFunctionController.readFileHTML('./src/view/notfound.html');
        res.writeHead(200, {'Context-type': 'text/html'});
        res.write(html);
        res.end();
    }
    static async getHomePage(req, res) {
       try{

           let homestayInfoDatabase = await homeModel.getAllCourse();
           let courseHtml = "";
           homestayInfoDatabase.forEach(homestay =>{
               courseHtml += `<tr>
        <th scope="row">${homestay.id}</th>
        <td>${homestay.nameStay}</td>
        <td>${homestay.city}</td>
        <td>${homestay.	numberroom}</td>
        <td>${homestay.price}</td>
        <td>${homestay.describeRoom}</td>
        
    </tr>`
           })



           let htmlCoursePage = await BaseFunctionController.readFileHTML('./src/view/index.html');
           htmlCoursePage = htmlCoursePage.replace('{listHomestay}', courseHtml);
           res.writeHead(200, {'Context-type': 'text/html'});
           res.write(htmlCoursePage);
           res.end();
       }catch (error){
           console.log(error.message);
       }
    }
    static async getNotFoundPage(req, res) {
        let html = await BaseFunctionController.readFileHTML('./src/view/notfound.html');
        res.writeHead(200, {'Context-type': 'text/html'});
        res.write(html);
        res.end();
    }
    static async getEditPage(req, res) {
        try{

            let homestayInfoDatabase = await homeModel.getAllCourse();
            let courseHtml = "";
            homestayInfoDatabase.forEach(homestay =>{
                courseHtml += `<tr>
        <th scope="row">${homestay.id}</th>
        <td>${homestay.nameStay}</td>
        <td>${homestay.city}</td>
        <td>${homestay.	numberroom}</td>
        <td>${homestay.price}</td>
        <td>${homestay.describeRoom}</td>
        <td><button type="button">edit</button></td>
        <td><button type="submit">delete</button></td>
        
    </tr>`
            })



            let htmlCoursePage = await BaseFunctionController.readFileHTML('./src/view/list.html');
            htmlCoursePage = htmlCoursePage.replace('{listHomestay}', courseHtml);
            res.writeHead(200, {'Context-type': 'text/html'});
            res.write(htmlCoursePage);
            res.end();
        }catch (error){
            console.log(error.message);
        }
    }
    static async deleteCourse(req, res) {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', async () => {
            try {
                let stayID = qs.parse(data).id;
                await CourseModel.deleteCourseByCourseID(+stayID);
                res.writeHead(301, {Location: '/admin/Course'});
                res.end();
            } catch (err) {
                console.log(err.message);
            }
        });
    }

    static async handleCoursePage(req, res) {
        if (req.method === 'GET') {
            await home.getEditPage(req, res);
        } else {
            await home.deleteCourse(req, res);
        }
    }
    static async getAddPage(req, res) {
        let html = await BaseFunctionController.readFileHTML('./src/view/add.html');
        res.writeHead(200, {'Context-type': 'text/html'});
        res.write(html);
        res.end();
    }
}
module.exports = home;