module.exports = function(sugar, models, assert, api) {
    return function getAuthor(cb) {
        api.create(null, function(err, author) {
            sugar.get(models.Author, author && author._id, function(err, d) {
                // XXX: figure out why d._id.toString() is needed (different encoding?)
                //assert.ok(equals(author, d));
                assert.equal(author && author._id, d && d._id.toString());

                cb(err, d);
            });
        });
    };
};