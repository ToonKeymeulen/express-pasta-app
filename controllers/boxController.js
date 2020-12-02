var Box = require('../models/box');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all boxes.
exports.box_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Box list');
};

// Display detail page for a specific Box.
exports.box_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Box detail: ' + req.params.id);
};

// Display Box create form on GET.
exports.box_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Box create GET');
};

// Handle Box create on POST.
exports.box_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Box create POST');
};

// Display Box delete form on GET.
exports.box_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Box delete GET');
};

// Handle Box delete on POST.
exports.box_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Box delete POST');
};

// Display box update form on GET.
exports.box_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Box update GET');
};

// Handle Box update on POST.
exports.box_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Box update POST');
};