const home = require('../controllers/home')
let router = {
"/": home.getHomePage,
"/list": home.handleCoursePage,
"/add" : home.getAddPage

}

module.exports = router;