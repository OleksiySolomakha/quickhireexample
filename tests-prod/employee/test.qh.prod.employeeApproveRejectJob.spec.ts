import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from '../../pageObjects/loginPage';


let email = 'playwrightemp3@g.com';
let allJobsSearch = 'Job For Playwright';
test('Check usual Approve/Reject for employee', async ({ page }) => {
    // ----------- use page object ----------
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.login(email);
    // ----------------------------------------
    await page.click('text=View Jobs');
    await page.click('text=Got it');
    //  Search some job
    await page.fill('input[data-qa="search-input"]',allJobsSearch);
    await page.click('li[id="react-autowhatever-1--item-0"]');
    await page.isVisible('path[d="M0 0h24v24H0V0z"]');
    await page.click(`button[data-qa="job-button-${allJobsSearch}"]`);
    //  ----------Approve-------------
    await page.isVisible('text=Show a Friend');
    await page.click('text=Apply');
    //  Cancel from modal window
    await page.click('button[data-qa="confirm-modal-cancel-button"]');
    //  Apply againe and press Ok in modal window
    await page.click('text=Apply');
    await page.click('button[data-qa="confirm-modal-accept-button"]');
    //  ---------Reject Job------------
    await page.click('text=My Jobs');
    await page.click(`button[data-qa="job-${allJobsSearch}"]`);
    await page.isVisible('text=Show a Friend');
    await page.click('text=Cancel');
    //  Log Out
    await page.click('a[data-qa="employee-profile-button"]');
    await page.click('button[data-qa="logout-button"]');
});
