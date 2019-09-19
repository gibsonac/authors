const controller = require('../controllers/authors.js');
const path = require('path')

module.exports = function (app) {
    app.get('/authors/', controller.index)
    app.get('/authors/:id', controller.show)
    app.post('/authors/', controller.createAuthor)
    app.put('/authors/:id', controller.update)
    app.delete('/authors/:id', controller.destroy)
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}