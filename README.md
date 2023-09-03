**Start test**

# Update playwright

   npm install -D @playwright/test@latest

# Start tests using command in terminal

   npm start

**Watch test in browser**

By default Playwright start tests in all browsers in headless mode from playwright.config.ts file.
If you want launches it only in one of browsers,  use this command:

    npx playwright test --project=chromium

If you want to watch how they go use flag --headed, like this:

    npx playwright test --headed

**Description**

   We use playwright only for testing functionality like for smoke test! We don't check all icons, texts,
   buttons etc. Only checking how works our main functionality.

# Now these tests cases don't update and I am sure they wouldn't pass, also I use TS and JS in this example because I can xD.
