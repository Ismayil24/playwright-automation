
import { test } from '@playwright/test';

test('', async ({ page }) => {

    // go to https://www.google.ca/
    await page.goto('https://www.google.ca/');

    // pause the automation for 3 seconds
    await page.waitForTimeout(3000);

    let searchBox = page.locator("//textarea[@class='gLFyf']");

    // enter "Cydeo" into the search box
    await searchBox.fill('Cydeo');

    // pause the automation for 3 seconds
    await page.waitForTimeout(3000);
    


});

