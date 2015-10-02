nicksFlicks.factory('ReviewsFactory', function ReviewsFactory() {
    var factory = {};
    factory.reivews = [
        { title: 'Titanic is the best movie!', reivew: 'Boats are the best!'},
        { title: 'Jurassic World', review: 'Not realistic!  She ran from dinosaurs while wearing heels the whole movie!'},
        { title: 'Minions suXx', review: 'I did not watch this movie but I have very strong opinons about it!!!'}
    ];

    factory.addReview = function() {
        factory.reviews.push({
            title: factory.review_title,
            review: factory.review_content
        });
        factory.review_title = null;
        factory.review_content = null;
    };

    return factory;
})
