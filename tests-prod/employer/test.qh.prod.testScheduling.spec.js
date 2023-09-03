const { test, expect } = require('@playwright/test');
const { PlaywrightDevPage } = require('../../pageObjects/loginPage');

let emailEmployer = 'playwrightScheduleEmployer@g.com';
let emailEmployee = 'playwrightemp4@g.com';
let jobName = 'Test Scheduling For Playwright';
let payMin = '50';
let payMax = '65';
let applicantsAmount = '150';
let someDesc = 'Only for Scheduling';
let someRequire = 'Some New Story';

test('Login like employer and create job for check scheduling',
    async ({ page }) => {
        // ----------- use page object ----------
        const playwrightDev = new PlaywrightDevPage(page);
        await playwrightDev.login(emailEmployer);
        // ----------------------------------------
        await page.click('a[data-qa="employer-dashboard-link"]');
        // await page.click('text=Not Yet');
        await page.click('text=Post a Job');
        //  Create Job
        // let uploadImage = await page.$('input[data-qa="image-input"]');
        await page.setInputFiles('input[data-qa="image-input"]','./img/12.jpg');
        await expect(page.locator('input[id="title-input"]')).toHaveCount(1);
        await expect(page.locator('input[data-qa="location-input"]')).toHaveCount(1);
        await expect(page.locator('input[data-qa="city-input"]')).toHaveCount(1);
        await expect(page.locator('[data-qa="stateId-input"]')).toHaveCount(1);
        await expect(page.locator('input[data-qa="zip-input"]')).toHaveCount(1);
        await expect(page.locator('[data-qa="countryId-input"]')).toHaveCount(1);
        await expect(page.locator('input[data-qa="payMax-input"]')).toHaveCount(1);
        await page.fill('input[id="title-input"]', jobName);
        await page.fill('textarea[data-qa="description-input"]', someDesc);
        await page.fill('input[data-qa="payMin-input"]', payMin);
        await page.fill('input[data-qa="payMax-input"]', payMax);
        await page.fill('textarea[data-qa="requirements-input"]', someRequire);
        await page.fill('input[data-qa="applicantAmount-input"]', applicantsAmount);
        //  Create Job
        await page.click('button[data-qa="post-job-button"]');
        //  Logout
        // await page.pause();
        await page.click('a[aria-label="profile"]');
        await page.click('button[data-qa="logout-button"]');
    });

test('Login like employee and schedule/reschedule/cancel this job for check modals and scheduling functional',
    async ({ page }) => {
        // ----------- use page object ----------
        const playwrightDev = new PlaywrightDevPage(page);
        await playwrightDev.login(emailEmployee);
        // ----------------------------------------
        await page.click('text=View Jobs');
        await page.click('text=Got it');
        //  Search some job
        await page.fill('input[data-qa="search-input"]',jobName);
        await page.click('div[id="react-autowhatever-1"]');
        await page.click(`button[data-qa="job-button-${jobName}"]`);
        //  ----------Schedule-------------
        await page.click('text=Schedule Interview');
        // await page.click('button[data-qa="confirm-modal-accept-button"]');
        await page.click(`button[data-qa="job-schedule-next-week-button-${jobName}"]`);
        await page.click('text=Wednesday');
        // await page.pause();
        await page.click(`button[data-qa="job-schedule-time-button-3-20-00-${jobName}"]`);
        await page.click(`button[data-qa="schedule-modal-submit-button"]`);
        //  ---------Reschedule------------
        await page.click('text=Re-Schedule');
        await page.click(`button[data-qa="job-schedule-next-week-button-${jobName}"]`);
        await page.click('text=Wednesday');
        await page.click(`button[data-qa="job-schedule-time-button-3-19-00-${jobName}"]`);
        await page.click(`button[data-qa="schedule-modal-submit-button"]`);
        await page.click('text=Re-Schedule');
        await page.click(`button[data-qa="job-schedule-next-week-button-${jobName}"]`);
        await page.click('text=Wednesday');
        await page.click(`button[data-qa="job-schedule-time-button-3-20-00-${jobName}"]`);
        await page.click(`button[data-qa="schedule-modal-submit-button"]`);
        await page.click('text=Re-Schedule');
        expect(await page.isVisible('text=You’ve been busy.')).toBeTruthy();
        await page.click('text=Yes');
        await page.click(`button[data-qa="job-schedule-next-week-button-${jobName}"]`);
        await page.click('text=Wednesday');
        await page.click(`button[data-qa="job-schedule-time-button-3-19-00-${jobName}"]`);
        await page.click(`button[data-qa="schedule-modal-submit-button"]`);
        //  ---------Cancel--------------
        await page.click('text=Cancel');
        expect(await page.isVisible('text=Are you sure you want to cancel this interview?')).toBeTruthy();
        await page.click('text=Yes');
        await page.click('text=Yes');
        // expect(await page.isVisible('text=Apply')).toBeTruthy();
        //  Log Out
        await page.click('a[data-qa="employee-profile-button"]');
        await page.click('button[data-qa="logout-button"]');
    });

test('Close job after scheduling',
    async ({ page }) => {
        // ----------- use page object ----------
        const playwrightDev = new PlaywrightDevPage(page);
        await playwrightDev.login(emailEmployer);
        // ----------------------------------------
        await page.click('a[data-qa="employer-dashboard-link"]');
        // await page.click('text=Not Yet');
        await page.click(`a[data-qa="job-link-${jobName}"]`);
        //  Close Job Posting
        await page.click('text=Close Job Posting');
        await page.click('label:has-text("Hiring is on hold/canceled")');
        await page.click('button[data-qa="close-job-modal-submit-button"]');
        await page.isVisible('button[data-qa="job-dashboard-open-job-button"]');
        //  Logout
        await page.click('[aria-label="profile"]');
        await page.click('button[data-qa="logout-button"]');
    });
