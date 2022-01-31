const Review = require('../Models/reviews');


const reviewDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateReview: updateReview
}

async function findAll() {
    return Review().findAll();
}

async function findById(id) {
    return Review().findOne({where : {id : id}});
     
}

async function deleteById(id) {
    return Review().destroy({ where: { id: id } });
}

async function create(review) {
    const newReview = new Review();
    return newReview.build(review).save();
}

async function updateReview(review, id) {
    const updateReview = {
        lastname: review.lastname,
        firstname: review.firstname,
    };
    return Review().update(updateMovie, { where: { id: id } });
}
module.exports = reviewDao;