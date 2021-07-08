const browserObject = require('./browser');
const scraperController = require('./pageController');

let browserInstance = browserObject.startBrowser()
// Pass the browser instance to the scraper controller

scraperController(browserInstance)

