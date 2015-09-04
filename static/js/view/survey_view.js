require(
    [
        'jquery',
        'underscore',
        'static/js/model/collection.js',
        'text',
        'text!header.html',
    ], function($, _, ConfigCollection, text, header) {
        var header_template = _.template(header);
        $('#header_template').html( header_template );
    }
);
