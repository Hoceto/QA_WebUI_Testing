const { Given, When, Then, After, Before, BeforeAll, AfterAll } = require('@cucumber/cucumber');
var assert = require('assert');
const { log } = require('console');
const { Builder, By, until, WebDriver, error, promise } = require('selenium-webdriver');
// var driver = new Builder()
//     .forBrowser('chrome')
//     .build();
var driver;


Before(function(){
    this.driver = new Builder()
        .forBrowser('chrome')
        .build();
    
    console.log("AAAAAAAAAAAA");    
})



Given('user is at the main page for the first time', async function () {
    // this.driver = await new Builder()
    // .forBrowser('chrome')
    // .build();

    (await this.driver).manage().window().maximize();

    (await this.driver).get("https://www.epam.com/");
});
    
When('user clicks the accept cookie button', {timeout: 4 * 5000}, async function () {
    const cookieButton = await this.driver.findElement(By.className("button-ui bg-color-light-blue cookie-disclaimer__button"));
    await cookieButton.click();
});

Then('the cookie window is closed', {timeout: 4 * 5000}, async function () {
    var cookieWindowExists = await this.driver.findElement(By.className("cookie-disclaimer-ui cookie-disclaimer--short-view"))
    .then(()=> {
        return true;
    }, (err) => {
        if (err instanceof error.NoSuchElementError){
            return false;
        }
        else {
            promise.rejected(err);
        }
    })
    assert.strictEqual(cookieWindowExists, false, "Test done");
});



Given('user is at the main page', {timeout: 4 * 5000}, async function () {    
    (await this.driver).manage().window().maximize();
    (await this.driver).get("https://www.epam.com/");
    const cookieButton = await this.driver.findElement(By.className("button-ui bg-color-light-blue cookie-disclaimer__button"));
    await cookieButton.click();
});

When('user clicks \"TELESCOPEAI\" button in the footer', {timeout: 4 * 5000}, async function () {
    const telescopeButton = await this.driver.findElement(By.css("img[alt=TelescopeAI]"));
    await telescopeButton.click();
});

Then('user gets redirected to TelescopeAI site: {string}', {timeout: 4 * 5000}, async function (string) {    
    const windows = await this.driver.getAllWindowHandles();
    var oo = this.driver;  
    this.driver.switchTo().window(windows[1]).then(function(){
        
    })
    await this.driver.close();
    this.driver.getCurrentUrl().then(url => {
        assert.strictEqual(url, "https://www.telescopeai.com/");
    })
});



Given('user is at the insights page', {timeout: 4 * 5000}, async function () {
    (await this.driver).manage().window().maximize();
    (await this.driver).get("https://www.epam.com/insights");
    const cookieButton = await this.driver.findElement(By.className("button-ui bg-color-light-blue cookie-disclaimer__button"));
    await cookieButton.click();
});

When('user clicks logo the top-left corner', {timeout: 4 * 5000}, async function () {
    const logoButton = await this.driver.findElement(By.xpath("/html/body/div[2]/div[2]/div[2]/div/div/header/div/a/img"));
    await logoButton.click();
});

Then('user goes to the main page: {string}', {timeout: 4 * 5000}, async function (targetUrl) {
    await this.driver.sleep(5000);
    await this.driver.getCurrentUrl().then(url => {
        assert.strictEqual(url, targetUrl);
    });
});




When('user clicks the drop down menu with languages in header and clicks Россия', {timeout: 4 * 5000}, async function () {
    const locationSelectorButton = await this.driver.findElement(By.className("location-selector__button"));
    await locationSelectorButton.click();
    await this.driver.sleep(5000);
    const russianLocationButton = await this.driver.findElement(By.xpath("/html/body/div[2]/div[2]/div[1]/header/div/ul/li[2]/div/nav/ul/li[9]/a"));
    await russianLocationButton.click();
});

Then('user gets redirected to {string}', {timeout: 4 * 5000}, async function (targetUrl) {
    await this.driver.sleep(5000);
    await this.driver.getCurrentUrl().then(url => {
        assert.strictEqual(url, targetUrl);
    });
});



When('user clicks the {string} button in the header of the site', {timeout: 4 * 5000}, async function (headerSection) {
    const carrersButton = await this.driver.findElement(By.css("a[href=\"/"+headerSection+"\""));
    await carrersButton.click();
});


After({timeout: 4 * 50000}, async function(){
    await this.driver.quit();
})
