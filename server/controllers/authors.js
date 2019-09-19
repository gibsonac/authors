const mongoose = require('mongoose');
const Author = mongoose.model('Author');
let errorHandler = require('./helpers/error-handler'); // error handling never changes, so let's make it general

module.exports = {
    index(req, res) {
        Author.find()
            .sort({ name: 1 })
            .then(results => res.json(results))
            .catch(errorHandler.bind(res));
    },
    show(req, res) {
        Author.findById(req.params.id)
            .populate("_ratings")
            .exec()
            .then(cake => res.json(cake))
            .catch(errorHandler.bind(res));
    },
    createAuthor(req, res) {
        Author.create(req.body)
            .then(cake => res.json(cake))
            .catch(errorHandler.bind(res));
    },
    update(req, res) {
        Author.update({ _id: req.params.id }, { name: req.body.name }, { new: true, runValidators: true })
            // Author.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true })
            .then(task => res.json(task))
            .catch(errorHandler.bind(res));
    },
    destroy(req, res) {
        Author.findByIdAndRemove(req.params.id)
            .then(result => res.json(result))
            .catch(errorHandler.bind(res));
    }
}