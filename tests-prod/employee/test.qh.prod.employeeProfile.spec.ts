import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from '../../pageObjects/loginPage';

let email = 'playwrightemp2@g.com';
let pass = 'pass';
let faker = require('faker');
let name =  faker.name.firstName();
let location =  faker.address.streetAddress();
let motto =  faker.lorem.sentence();
let education =  faker.commerce.department();
let study =  faker.commerce.productName();
let jobName =  faker.company.companyName();
let jobPos =  faker.name.jobTitle();
let telephoneNum1 = '223344556677';
let telephoneNum2 = '998877445566';
let standartCity = 'Hinckley';
let standartZIP = '84635';
let canadaCity = 'Kinngait';
let canadaZIP = 'X0A0A1';
let certificates = 'Some new Certificate';

test('Check edit profile for employee', async ({ page }) => {
    // ----------- use page object ----------
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.login(email);
    // ----------------------------------------
    await page.click('a[data-qa="employee-profile-button"]');
    //  Edit name
    await page.click('text=edit');
    await page.fill('input[data-qa="employee-profile-name-input"]', `Playwright Employee2 ${name}`);
    await page.click('text=Save');
    //  Edit Location
    await page.click('text=edit');
    await page.fill('input[data-qa="employee-profile-address-input"]', location);
    await page.click('text=Save');
    //  Edit Motto
    await page.click('text=edit');
    await page.fill('input[name="motto"]', motto);
    await page.click('text=Save');
    // Check ZIP
    await page.click('text=edit');
    await page.click('[id="countryId-select"]');
    await page.click('[data-qa="country-option-0"]');
    await page.click('[id="stateId-select"]');
    await page.click('[data-qa="state-option-7"]');
    await page.fill('[data-qa="city-input"]',canadaCity);
    await page.fill('[data-qa="zip-input"]',canadaZIP);
    await page.click('text=Save');
    //  Change again
    await page.click('text=edit');
    await page.click('[id="countryId-select"]');
    await page.click('[data-qa="country-option-1"]');
    await page.click('[id="stateId-select"]');
    await expect(page.locator('[data-qa="state-option-44"]'), 'should be visible').toBeVisible();
    await page.click('[data-qa="state-option-44"]');
    await page.fill('[data-qa="city-input"]',standartCity);
    await page.fill('[data-qa="zip-input"]',standartZIP);
    await page.click('text=Save');
    await page.click('button[data-qa="logout-button"]');
});

test('Check edit gender /phone/ industries/ skills profile for employee', async ({ page }) => {
    // ----------- use page object ----------
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.login(email);
    // ----------------------------------------
    await page.click('a[data-qa="employee-profile-button"]');
    // // Change gender
    await page.click('text=edit');
    await page.click('text=I Prefer Not to Answer');
    await page.click('text=Female');
    await page.click('text=Save');
    await page.click('text=edit');
    await page.click('text=Female');
    await page.click('text=I Prefer Not to Answer');
    await page.click('text=Save');
    // Check phone
    await page.click('text=edit');
    await page.fill('input[name="phone"]', telephoneNum1);
    await page.click('text=Save');
    await page.click('text=edit');
    await page.fill('input[name="phone"]', telephoneNum2);
    // Save changes
    await page.click('text=Save');
    // Change skills
    await page.click('text=edit');
    await page.click('button[data-qa="employee-profile-skills-button"]');
    await page.click('input[data-qa="checkbox-input-Back of House"]');
    await page.click('input[data-qa="checkbox-input-Landscaping"]');
    await page.click('input[data-qa="checkbox-input-Stocker"]');
    await page.click('[aria-label="return"]');
    await page.click('text=Save');
    // Change industry
    await page.click('text=edit');
    await page.click('button[data-qa="employee-profile-industries-button"]');
    await page.click('input[data-qa="checkbox-input-Beauty"]');
    await page.click('input[data-qa="checkbox-input-Retail"]');
    await page.click('input[data-qa="checkbox-input-Healthcare"]');
    await page.click('[aria-label="return"]');
    await page.click('text=Save');
    await page.click('button[data-qa="logout-button"]');
});

test('Check edit education/ experience/ certificates/ pass profile for employee', async ({ page }) => {
    // ----------- use page object ----------
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.login(email);
    // ----------------------------------------
    await page.click('a[data-qa="employee-profile-button"]');
    // Add education
    await page.click('text=edit');
    await expect(page.locator('button[data-qa="education-remove-form-0"]'), 'should be visible').toBeVisible();
    await page.click('button[data-qa="education-remove-form-0"]');
    await expect(page.locator('button[data-qa="employee-profile-add-education-button"]'), 'should be visible').toBeVisible();
    await page.click('button[data-qa="employee-profile-add-education-button"]');
    await expect(page.locator('input[data-qa="education-name-input-1"]'), 'should be visible').toBeVisible();
    await expect(page.locator('input[data-qa="education-pos-input-1"]'), 'should be visible').toBeVisible();
    await page.fill('input[data-qa="education-name-input-1"]', education);
    await page.fill('input[data-qa="education-pos-input-1"]', study);
    await page.click('button[data-qa="education.1.startDate-picker-button"]');
    await page.click('text=2015');
    await page.click('input[data-qa="education-currentJob-input-1"]');
    // // Save changes
    await page.click('text=Save');
    // // Add Job Experience
    await page.click('text=edit');
    await expect(page.locator('button[data-qa="experience-remove-form-0"]'), 'should be visible').toBeVisible();
    await page.click('button[data-qa="experience-remove-form-0"]');
    await expect(page.locator('input[data-qa="education-name-input-1"]'), 'should be visible').toBeVisible();
    await page.click('button[data-qa="employee-profile-add-experience-button"]');
    await expect(page.locator('input[data-qa="experience-name-input-1"]'), 'should be visible').toBeVisible();
    await expect(page.locator('input[data-qa="experience-pos-input-1"]'), 'should be visible').toBeVisible();
    await page.fill('input[data-qa="experience-name-input-1"]', jobName);
    await page.fill('input[data-qa="experience-pos-input-1"]', jobPos);
    await page.click('button[data-qa="experience.1.startDate-picker-button"]');
    await page.click('text=2019');
    await page.click('text=May');
    await page.click('input[data-qa="experience-currentJob-input-1"]');
    await page.click('text=Save');
    // Add certificates
    // await page.pause();
    await page.click('text=edit');
    expect(page.locator('text=You can add certificates you\’ve trained for here. Classes to get certificates will also ' +
        'populate here to complete them. Ask your employer to verify your certificates!')).toBeTruthy();
    expect( await page.locator('[data-qa="certificates-remove-form-0"]')).toContainText('Remove');
    await page.click('[data-qa="certificates-remove-form-0"]');
    expect( await page.locator('[data-qa="employee-profile-add-certificate-button"]')).toContainText('Add Certificate');
    await page.click('[data-qa="employee-profile-add-certificate-button"]');
    await page.fill('[data-qa="certificates-name-input-0"]', certificates);
    await page.click('[data-qa="certificates.0.date-picker-button"]');
    await page.click('text=2020');
    await page.click('text=Jun');
    await page.click('text=Save');
    //  Notifications
    expect(await page.locator('input[data-qa="in-app-new-messages-checkbox"]')).toBeTruthy();
    expect(await page.locator('input[data-qa="email-new-messages-checkbox"]')).toBeTruthy();
    expect(await page.locator('input[data-qa="in-app-new-jobs-checkbox"]')).toBeTruthy();
    expect(await page.locator('input[data-qa="email-new-jobs-checkbox"]')).toBeTruthy();
    expect(await page.locator('input[data-qa="in-app-qh-tips-checkbox"]')).toBeTruthy();
    expect(await page.locator('input[data-qa="email-qh-tips-checkbox"]')).toBeTruthy();
    //  Change password
    await page.fill('input[name="oldPwd"]', pass);
    await page.fill('input[name="newPwd"]', pass);
    await page.fill('input[name="repeatPwd"]', pass);
    await page.click('button[data-qa="change-password-submit"]');
    // // Save changes Log Out
    await page.click('button[data-qa="logout-button"]');
});
