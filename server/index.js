const path = require('path');
const businesses = require('./data/businesses-data.json');
const reviews = require('./data/reviews-data.json');
const isEmpty = require('lodash/isEmpty');
const find = require('lodash/find');
const flatten = require('lodash/flatten');

function getReviews(req, res) {
  if (isEmpty(req.query)) return res.json(reviews);
  const business = Number(req.query.business);
  if (business) {
    const reviewsList = flatten(Object.values(reviews));
    const businessReview = reviewsList.filter( ({ business_id, score }) => business_id === business)
    return res.json(businessReview || {})
  }
  return res.json({})
}

function getBusinesses(req, res) {
  if (isEmpty(req.params)) return res.json(businesses);
  const id = req.params.id;
  if (id) {
    const business = find(businesses, {id: Number(id)}) 
    return res.json(business || {})
  }
  return res.json({})
}

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.sendFile(path.resolve(__dirname, './../../index.html'));
    });

    app.get('/businesses', getBusinesses)

    app.get('/businesses/:id', getBusinesses)

    app.get('/reviews', getReviews)

    app.get('/favicon.ico', function (req, res) {
        res.writeHead(204, {
            'Content-Type': 'image/x-icon',
            'Cache-Control': 'public, max-age: 604800'
        });

        res.end();
    });
};
