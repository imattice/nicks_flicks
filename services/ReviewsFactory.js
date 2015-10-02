nicksFlicks.factory('ReviewsFactory', function ReviewsFactory() {
    var factory = {};
    factory.reviews = [
        { id: 1,
            title: 'Titanic is the best movie!',
            review: 'Boats are the best!'},
        { id: 2,
            title: 'Jurassic World',
            review: 'Not realistic!  She ran from dinosaurs while wearing heels the whole movie!'},
        { id: 3,
            title: 'Minions suXx',
            review: 'I did not watch this movie but I have very strong opinons about it!!!'}
    ];

    factory.addReview = function() {
        factory.reviews.push({
            id: factory.reviews.length+1,
            title: factory.review_title,
            review: factory.review_content
        });
        factory.review_title = null;
        factory.review_content = null;
    };

    return factory;
});
