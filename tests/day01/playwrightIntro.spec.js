
import {test} from '@playwright/test';

test('Simple playwright test', async({page}) => {
    await page.goto('https://www.google.ca/')

    await page.waitForTimeout(3000);


    page.locator("//textarea[@class='gLFyf']");

    let searchBox = page.locator("//textarea[@class='gLFyf']");
    await searchBox.fill("Playwritgh Automation");

    //await searchBox.type("Playwritgh Automation");

    await page.waitForTimeout(3000);



});





/*
<textarea class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Search" value="" jsaction="paste:puy29d;" aria-label="Search" aria-autocomplete="both" aria-expanded="false" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" id="APjFqb" maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" data-ved="0ahUKEwiF1-HmgtyIAxU1MNAFHd5lJK8Q39UDCAY"></textarea>
*/
//textarea[@class='gLFyf']
