const { test, expect } = require('@playwright/test');
const { PlaywrightDevPage } = require('../../pageObjects/loginPage');

let email = 'playwrightedit@g.com';
let pass = 'pass';
let employerTitle = 'Test job for DELETE';
let employerAddress =  'Hinckley,UT,USA';
let testEmployerAddress = 'some, test, address';
let phoneNum1 = '2345678910';
let phoneNum2 = '1098765432';

test('Check edit for employer profile', async ({ page }) => {
    // ----------- use page object ----------
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.login(email);
    // ----------------------------------------
    // Edit Employer Profile
    await page.click('a[data-qa="employer-profile-button"]');
    expect(await page.isVisible('button[data-qa="logout-button"]')).toBeTruthy();
    await page.click('button[data-qa="profile-edit-button"]');
    expect(await page.isVisible('input[data-qa="employer-profile-name-input"]')).toBeTruthy();
    // await page.click('[aria-label="edit company profile"]');
    await page.fill('input[data-qa="employer-profile-name-input"]', 'Playwright ' + employerTitle);
    // await page.click('text=Save');
    //  Street address
    // await page.click('a[data-qa="employer-profile-button"]');
    await page.fill('input[data-qa="employer-profile-address-input"]', testEmployerAddress);
    // await page.click('text=Save');
    //  New Address fields
    await page.click('div[id="countryId-select"]');
    await page.click('li[data-qa="country-option-0"]');
    await page.click('div[id="countryId-select"]');
    await page.click('li[data-qa="country-option-1"]');
    await page.click('div[id="stateId-select"]');
    await page.click('li[data-qa="state-option-9"]');
    await page.fill('input[data-qa="city-input"]', 'Tripoli');
    await page.fill('input[data-qa="zip-input"]','84635');
    //  Phone number
    // await page.click('button[data-qa="profile-edit-button"]');
    await page.fill('input[data-qa="employer-profile-phone-input"]', phoneNum1);
    await page.click('text=Save');
    await page.click('button[data-qa="profile-edit-button"]');
    await page.fill('input[data-qa="employer-profile-phone-input"]', phoneNum2);
    await page.click('text=Save');
    // Timezone
    await page.click('button[data-qa="profile-edit-button"]');
    expect(await page.isVisible('input[data-qa="employer-profile-time-zone"]')).toBeTruthy();
    await page.click('text=Save');
    //  Choose industry
    await page.click('button[data-qa="profile-edit-button"]');
    expect(await page.isVisible('button[data-qa="logout-button"]')).toBeTruthy();
    await page.click('input[data-qa="employer-profile-industries-input"]');
    await page.click('label:has-text("Arts")');
    await page.click('label:has-text("Restaurant")');
    await page.click('[aria-label="return"]');
    await page.click('text=Save');
    // Count of employee
    await page.click('button[data-qa="profile-edit-button"]');
    await page.click('#size-input');
    await page.click('label:has-text("1-49")');
    await page.click('label:has-text("5,000 or more")');
    await page.click('[aria-label="return"]');
    await page.click('text=Save');
    // Change to default
    await page.click('button[data-qa="profile-edit-button"]');
    await page.click('input[name="address"]');
    await page.fill('input[name="address"]', employerAddress);
    await page.click('text=Save');
    //  Add new card
    expect(await page.isVisible('button[data-qa="employer-profile-add-payment-button"]')).toBeTruthy();
    //  Notifications
    expect(await page.isVisible('input[data-qa="in-app-new-applicants-checkbox"]')).toBeTruthy();
    expect(await page.isVisible('input[data-qa="email-new-applicants-checkbox"]')).toBeTruthy();
    expect(await page.isVisible('input[data-qa="in-app-inbox-checkbox"]')).toBeTruthy();
    expect(await page.isVisible('input[data-qa="in-app-respond-time-checkbox"]')).toBeTruthy();
    expect(await page.isVisible('input[data-qa="email-respond-time-checkbox"]')).toBeTruthy();
    //  Change password
    await page.fill('input[name="oldPwd"]', pass);
    await page.fill('input[name="newPwd"]', pass);
    await page.fill('input[name="repeatPwd"]', pass);
    await page.click('button[data-qa="change-password-submit"]');
    //  Deactivate
    await page.click('button[data-qa="logout-button"]');
});
