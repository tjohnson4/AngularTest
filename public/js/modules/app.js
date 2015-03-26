(function() {
    var app = angular.module("app", []);

    app.controller("AppController", function () {
        this.products = gems;
    });

    var gems = [{
        name        : "Cafe",
        price       : "33",
        description : "Foo bar is a bland example of what happens",
        canPurchase : true,
        soldOut     : false,
        images      : [
            {
                full : "http://lorempixel.com/400/200/cats/1/",
                thumb : "http://lorempixel.com/100/100/cats/1/"
            },
            {
                full : "http://lorempixel.com/400/200/cats/2/",
                thumb : "http://lorempixel.com/100/100/cats/2/"
            }
        ]
    },
    {
        name        : "dode",
        price       : "23",
        description : "Foo bar is a bland example of what happens",
        canPurchase : true,
        soldOut     : false,
        images      : [
            {
                full : "http://lorempixel.com/400/200/cats/3/",
                thumb : "http://lorempixel.com/100/100/cats/3/"
            },
            {
                full : "http://lorempixel.com/400/200/cats/4/",
                thumb : "http://lorempixel.com/100/100/cats/4/"
            }
        ]
    },
    {
        name        : "Fume",
        price       : "24.95",
        description : "Foo bar is a bland example of what happens",
        canPurchase : true,
        soldOut     : false,
        images      : [
            {
                full : "http://lorempixel.com/400/200/cats/5/",
                thumb : "http://lorempixel.com/100/100/cats/5/"
            },
            {
                full : "http://lorempixel.com/400/200/cats/6/",
                thumb : "http://lorempixel.com/100/100/cats/6/"
            }
        ]
    }];
})();
