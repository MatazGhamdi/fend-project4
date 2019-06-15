/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {

    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {

        /* to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. */

        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* test if URL is defined and not empty */
        it('urls are defined', function () {
            for (i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* test if Names is defined and not empty */

        it('names are defined', function () {
            for (i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });

    });


    /* Testing the Menu */
    describe('The Menu', function () {

        /* check if the body has a menu-hidden class */

        it('Menu is hidden', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });


        /* Check if the menu (hide/unhide) toggle is working */

        it('Menu toggle', function () {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });




    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {

        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            })
        })

        /* test if there is at least a single feed */
        it('At least a single entry', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0)
        });

    });


    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {

        /* Test if content actually changed */
        var previousEntry;
        var newEntry;

        beforeEach(function (done) {

            // check new entry, index 0
            loadFeed(0, function () {
                newEntry = $('.feed').find(allFeeds.name);

                //check index 1
                loadFeed(1, function () {
                    previousEntry = $('.feed').find(allFeeds.name);
                    done();
                })

            })

        })

        it('Entry changed', function () {
            expect(newEntry).not.toBe(previousEntry);
        });

    });


    

}());
