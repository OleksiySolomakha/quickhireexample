
import {expect,type Locator ,type Page } from '@playwright/test';

let URL = 'https://login.worktorch.io/';

export class PlaywrightDevPage {
    readonly page: Page;
    readonly titleSignIn: Locator;
    readonly signInGoogle: Locator;
    readonly signInFacebook: Locator;
    readonly emailField: Locator;
    readonly passField: Locator;
    readonly signIn: Locator;
    readonly forgotPass: Locator;
    readonly question: Locator;
    readonly signUp: Locator;
    readonly errorEmail: Locator;
    readonly errorPass: Locator;

    constructor(page: Page) {
        this.page = page;
        this.titleSignIn = page.locator('h1');
        // this.signInGoogle = page.locator('button[data-qa="sign-in-google-button"]');
        // this.signInFacebook = page.locator('button[data-qa="sign-in-fb-button"]');
        this.emailField = page.locator('input[id="email"]');
        this.passField = page.locator('input[id="password"]');
        this.signIn = page.locator('button[data-qa="sign-in-submit-button"]');
        // this.forgotPass = page.locator('button[data-qa="go-to-forgot-password-page"]');
        this.question = page.locator('p');
        this.signUp = page.locator('button[data-qa="go-to-sign-up-page"]');
        this.errorEmail = page.locator('p[id="email-helper"]');
        this.errorPass = page.locator('p[id="password-helper"]');
    }

    async login(email) {
        let Email = email;
        let pass = 'pass';
        await this.page.goto(URL);
        await expect(this.titleSignIn, 'should be visible').toContainText('Sign In');
        // await expect(this.signInGoogle, 'should be visible').toContainText('Sign In With Google');
        // await expect(this.signInFacebook, 'should be visible').toContainText('Sign In With Facebook');
        // await expect(this.forgotPass, 'should be visible').toContainText('Forgot Password');
        // await expect(this.question, 'should be visible').toContainText('Don’t Have an Account?');
        // await expect(this.signUp, 'should be visible').toContainText('Sign Up');
        await this.signIn.click();
        // await expect(this.errorEmail, 'should be visible').toContainText('Cannot be blank');
        // await expect(this.errorPass, 'should be visible').toContainText('Cannot be blank');
        await this.emailField.fill(Email);
        await this.passField.fill(pass);
        await this.signIn.click();
    }
};
