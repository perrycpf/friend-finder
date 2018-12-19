let path = require('path');

// Export HTML routing
module.exports = (app) => {
    // Home page
    app.get('/', (req, res)=>{
        res.sendFile(path.join(__dirname,'../public/home.html'));
    });
    // Survey page
    app.get('/survey', (req, res) =>{
        res.sendFile(path.join(__dirname,'../public/survey.html'));
    });
}