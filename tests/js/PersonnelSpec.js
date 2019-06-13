var selenium = require('selenium-webdriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

beforeAll(function() {
    //
});

afterAll(function() {
    //
});

beforeEach(function(done) {
    this.driver = new selenium.Builder().forBrowser('chrome').build();
    this.driver.get('http://localhost:1962//#personnelview').then(done);
});

// Close the website after each test is run (so that it is opened fresh each time)
afterEach(function(done) {
    this.driver.quit().then(done);
});


describe("Loading the personnel page", function() {
    it("should show the personnel in the grid", function(done) {
        var pv = this.driver.findElement(selenium.By.className("personnelview"));
        var children = pv.findElements(selenium.By.className("x-gridrow"));
        children.then(function(res) {
            expect(res.length).toBe(4);
            done();
        });
    });
});