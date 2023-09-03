const { test, expect } = require('@playwright/test');
const { PlaywrightDevPage } = require('../../pageObjects/loginPage');

let email = 'playwrightcom@g.com';
let employeeName='Janny';
let employeeNameZIP='Vasia';
let addressDrop='Hinckley, UT';
let ZIP='84635';
let educationZIP='This';
let experienceZIP='0';
let education='Mantana';
let experience='2';

test('Check Employer search at Search Candidate DB', async ({ page }) => {
    // ----------- use page object ----------
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.login(email);
    // ----------------------------------------
    await page.click('a[data-qa="search-database-link"]');
    await page.fill('input[type="text"]', employeeNameZIP);
    await page.click('button[data-qa="search-db-search-button"]');
    await expect(page.locator('[data-qa="applicant-Vasia test"]'), 'should be visible').toBeVisible();
    await page.fill('#location', ZIP);
    await page.click('button[data-qa="search-db-search-button"]');
    await expect(page.locator('[data-qa="applicant-Vasia test"]'), 'should be visible').toBeVisible();
    await page.click('#industry');
    await page.click('[data-qa="checkbox-Delivery"]');
    await page.click('[aria-label="close"]');
    await page.click('button[data-qa="search-db-search-button"]');
    await expect(page.locator('[data-qa="applicant-Vasia test"]'), 'should be visible').toBeVisible();
    await page.click('#skills');
    await page.click('[data-qa="checkbox-Data Entry"]');
    await page.click('[aria-label="close"]');
    await page.click('button[data-qa="search-db-search-button"]');
    await expect(page.locator('[data-qa="applicant-Vasia test"]'), 'should be visible').toBeVisible();
    await page.fill('#education', educationZIP);
    await page.click('button[data-qa="search-db-search-button"]');
    await expect(page.locator('[data-qa="applicant-Vasia test"]'), 'should be visible').toBeVisible();
    await page.click('#experience');
    await page.fill('#experience', experienceZIP);
    await page.click('button[data-qa="search-db-search-button"]');
    await expect(page.locator('[data-qa="applicant-Vasia test"]'), 'should be visible').toBeVisible();
// Click text=Log Out
    await page.click('button[data-qa="logout-button"]');
});

test('Check Employer search at Search Candidate DB with drop down in location field', async ({ page }) => {
    // ----------- use page object ----------
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.login(email);
    // ----------------------------------------
    await page.click('a[data-qa="search-database-link"]');
    await page.fill('input[type="text"]', employeeName);
    await page.click('button[data-qa="search-db-search-button"]');
    await expect(page.locator('[data-qa="applicant-Hi Janny"]'), 'should be visible').toBeVisible();
    await page.fill('#location', addressDrop);
    await expect(page.locator('li[id="react-autowhatever-1--item-0"]'), 'should be visible').toBeVisible();
    await page.click('text=Hinckley, UT, USA');
    await page.click('button[data-qa="search-db-search-button"]');
    await expect(page.locator('[data-qa="applicant-Hi Janny"]'), 'should be visible').toBeVisible();
    await page.click('#industry');
    await page.click('[data-qa="checkbox-Healthcare"]');
    await page.click('[aria-label="close"]');
    await page.click('button[data-qa="search-db-search-button"]');
    await expect(page.locator('[data-qa="applicant-Hi Janny"]'), 'should be visible').toBeVisible();
    await page.click('#skills');
    await page.click('[data-qa="checkbox-Customer Service"]');
    await page.click('[aria-label="close"]');
    await page.click('button[data-qa="search-db-search-button"]');
    await expect(page.locator('[data-qa="applicant-Hi Janny"]'), 'should be visible').toBeVisible();
    await page.fill('#education', education);
    await page.click('button[data-qa="search-db-search-button"]');
    await expect(page.locator('[data-qa="applicant-Hi Janny"]'), 'should be visible').toBeVisible();
    await page.click('#experience');
    await page.fill('#experience', experience);
    await page.click('button[data-qa="search-db-search-button"]');
    await expect(page.locator('[data-qa="applicant-Hi Janny"]'), 'should be visible').toBeVisible();
// Click text=Log Out
    await page.click('button[data-qa="logout-button"]');
});
