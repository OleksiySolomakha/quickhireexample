const { test, expect } = require('@playwright/test');
const { PlaywrightDevPage } = require('../../pageObjects/loginPage');

let email = 'playwrightcom@g.com';
let jobName = 'Test Company for Close';
let employerAddress = 'One strange street.Utah';
let ZIP = '84635';

test('Check usual create/close job by employer', async ({ page }) => {
    // ----------- use page object ----------
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.login(email);
    // ----------------------------------------
    await page.click('a[data-qa="employer-dashboard-link"]');
    await page.click('text=Not Yet');
    await page.click('button[data-qa="post-job-button"]');
    //  Create Job
    // let uploadImage = await page.$('input[data-qa="image-input"]');
    await page.setInputFiles('input[data-qa="image-input"]','./img/12.jpg');
    await page.fill('input[data-qa="location-input"]', employerAddress);
    await page.fill('input[data-qa="city-input"]', employerAddress);
    await page.fill('input[data-qa="zip-input"]', ZIP);
    await page.click('div[id="countryId-select"]');
    await page.click('li[data-qa="country-option-0"]');
    await page.click('div[id="countryId-select"]');
    await page.click('li[data-qa="country-option-1"]');
    await page.fill('input[data-qa="title-input"]', jobName);
    await page.fill('input[data-qa="payMin-input"]', '50');
    await page.fill('input[data-qa="payMax-input"]', '100');
    await page.click('div[id="stateId-select"]');
    await page.click('li[data-qa="state-option-4"]');
    await page.fill('textarea[data-qa="description-input"]', 'some');
    await page.fill('textarea[data-qa="requirements-input"]', 'new test');
    await page.fill('input[data-qa="applicantAmount-input"]', '100');
    //  Add skills
    await page.click('button[data-qa="skills-modal-trigger-button"]');
    await page.click('label[data-qa="checkbox-Customer Service"]');
    await page.click('label[data-qa="checkbox-Management"]');
    await page.click('button[data-qa="close-modal-button"]');
    //  Add Industries
    await page.click('button[data-qa="industry-modal-trigger-button"]');
    await page.click('label[data-qa="checkbox-Arts"]');
    await page.click('label[data-qa="checkbox-Banking"]');
    await page.click('button[data-qa="close-modal-button"]');
    //  Create Job
    await page.click('button[data-qa="post-job-button"]');
    // await page.pause();
    console.log(`a[data-qa="job-link-${jobName}"]`);
    await expect(page.locator(`a[data-qa="job-link-${jobName}"]`), 'should be visible').toBeVisible();
    await page.click(`a[data-qa="job-link-${jobName}"]`);
    // await page.pause();
    // Close Job Posting
    await page.click('text=Close Job Posting');
    await page.click('label:has-text("Hired Someone for the Job")');
    await page.click('label:has-text("Hiring is on hold/canceled")');
    await page.click('button[data-qa="close-job-modal-submit-button"]');
    // await page.click('a[data-qa="go-to-employer-dashboard-button"]');
    // Logout
    await page.click('[aria-label="profile"]');
    await page.click('button[data-qa="logout-button"]');
});
