const { test, expect } = require('@playwright/test');
const { PlaywrightDevPage } = require('../../pageObjects/loginPage');

let email = 'playwrightcomdraft@g.com';
let jobName =  'Job Draft Delete';
let employerAddress = 'Hinckley,UT,USA';
let city = 'Kinngait';
let ZIP = 'X0A0C0';
console.log('new Job: ', jobName);

test('Check create/delete draft of job', async ({ page }) => {
    // ----------- use page object ----------
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.login(email);
    // ----------------------------------------
    await page.click('a[data-qa="employer-dashboard-link"]');
    await page.click('text=Not Yet');
    await page.click('button[data-qa="post-job-button"]');
    //  Create Draft
    await page.isVisible('input[data-qa="title-input"]', 1000);
    await page.setInputFiles('input[data-qa="image-input"]','./img/12.jpg');
    await page.fill('input[data-qa="title-input"]', jobName);
    await page.fill('input[data-qa="location-input"]', employerAddress);
    await page.fill('input[data-qa="city-input"]', city);
    await page.fill('input[data-qa="zip-input"]', ZIP);
    await page.click('div[id="countryId-select"]');
    await page.click('li[data-qa="country-option-0"]');
    await page.click('[id="stateId-select"]');
    await page.click('li[data-qa="state-option-7"]');
    await page.fill('input[data-qa="payMin-input"]', '50');
    await page.fill('input[data-qa="payMax-input"]', '100');
    await page.click('div[id="stateId-select"]');
    await page.click('li[data-qa="state-option-4"]');
    await page.fill('textarea[data-qa="description-input"]', 'some');
    await page.fill('textarea[data-qa="requirements-input"]', 'new test');
    await page.fill('input[data-qa="applicantAmount-input"]', '100');
    await page.fill('input[data-qa="title-input"]', jobName);
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
    await page.click(`button[data-qa="save-draft-button"]`);
    //  Delete Draft
    await page.click(`a[data-qa="job-link-${jobName}"]`);
    await expect(page.locator('button[data-qa="delete-job-button"]'), 'should be visible').toBeVisible();
    await expect(page.locator('button[data-qa="save-draft-button"]'), 'should be visible').toBeVisible();
    await expect(page.locator('button[data-qa="post-job-button"]'), 'should be visible').toBeVisible();
    await page.click('button[data-qa="delete-job-button"]');
    await expect(page.locator('button[data-qa="confirm-modal-accept-button"]'), 'should be visible').toBeVisible();
    await page.click('button[data-qa="confirm-modal-accept-button"]');
    // Logout
    await page.click('[aria-label="profile"]');
    await page.click('button[data-qa="logout-button"]');
});

test('Check create draft then post this job and close it', async ({ page }) => {
    // ----------- use page object ----------
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.login(email);
    // ----------------------------------------
    await page.click('a[data-qa="employer-dashboard-link"]');
    await page.click('text=Not Yet');
    await page.click('button[data-qa="post-job-button"]');
    //  Create Draft
    await page.isVisible('input[data-qa="title-input"]', 1000);
    await page.setInputFiles('input[data-qa="image-input"]','./img/12.jpg');
    await page.fill('input[data-qa="title-input"]', jobName);
    await page.fill('input[data-qa="location-input"]', employerAddress);
    await page.fill('input[data-qa="city-input"]', city);
    await page.fill('input[data-qa="zip-input"]', ZIP);
    await page.click('div[id="countryId-select"]');
    await page.click('li[data-qa="country-option-0"]');
    await page.click('[id="stateId-select"]');
    await page.click('li[data-qa="state-option-7"]');
    await page.fill('input[data-qa="payMin-input"]', '50');
    await page.fill('input[data-qa="payMax-input"]', '100');
    await page.click('div[id="stateId-select"]');
    await page.click('li[data-qa="state-option-4"]');
    await page.fill('textarea[data-qa="description-input"]', 'some');
    await page.fill('textarea[data-qa="requirements-input"]', 'new test');
    await page.fill('input[data-qa="applicantAmount-input"]', '100');
    await page.fill('input[data-qa="title-input"]', jobName);
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
    await page.click(`button[data-qa="save-draft-button"]`);
    //  Post Job
    await page.click(`a[data-qa="job-link-${jobName}"]`);
    await expect(page.locator('button[data-qa="delete-job-button"]'), 'should be visible').toBeVisible();
    await expect(page.locator('button[data-qa="save-draft-button"]'), 'should be visible').toBeVisible();
    await expect(page.locator('button[data-qa="post-job-button"]'), 'should be visible').toBeVisible();
    await page.click('button[data-qa="post-job-button"]');
    //  Close Job
    await expect(page.locator('button[data-qa="copy-job-button"]'), 'should be visible').toBeVisible();
    await expect(page.locator('button[data-qa="activate-job-button"]'), 'should be visible').toBeVisible();
    await expect(page.locator('button[data-qa="post-job-button"]'), 'should be visible').toBeVisible();
    await page.click('button[data-qa="activate-job-button"]');
    // Logout
    await page.click('[aria-label="profile"]');
    await page.click('button[data-qa="logout-button"]');
});
