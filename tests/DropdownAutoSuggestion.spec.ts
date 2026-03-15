import { test, expect } from '@playwright/test';
import { text } from 'node:stream/consumers';

test('has title', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  

  const title=await page.title()
  console.log("Title of the page is: "+title);
  await expect(page).toHaveTitle(/Automation Testing Practice/);
// await page.locator('#country').selectOption('Japan')
// await page.waitForTimeout(5000);
// await page.locator('#country').selectOption({value:'uk'})
// await page.waitForTimeout(5000);
// await page.locator('#country').selectOption({label:'Germany'})
// await page.waitForTimeout(5000)
// await page.locator('#country').selectOption({index:2})
const list  =await page.locator('#country>option')

const count = await list.count()
console.log("Total number of options in dropdown is: "+await list.allTextContents())

const optionText :string[]=(await list.allTextContents()).map(text=>text.trim())

console.log(optionText);

// console.log("Total number of options in dropdown is: "+count);
// await expect(list).toHaveCount(10);
// for(let i=0;i<count;i++){
//   console.log(await list.nth(i).textContent());
// } 
await page.waitForTimeout(5000);








  

});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.waitForTimeout(1000);

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await page.waitForTimeout(1000);

});
test.only('Handle Multipe Window', async ({browser }) => {
const context=await browser.newContext();
const page1=await context.newPage();
await page1.goto('https://testautomationpractice.blogspot.com/');

const [newPage]=await Promise.all([
  context.waitForEvent('page'),
  page1.locator('//a[text()="Comments (Atom)"]').click()
]);

await newPage.waitForLoadState();
const title=await newPage.title();
console.log("Title of the new page is: "+title);
// await expect(newPage).toHaveTitle(/Comments/);
await newPage.waitForTimeout(5000);
page1.bringToFront();
await page1.waitForTimeout(5000);
//New changes fro vs code
console.log("This canges in main branch ");

//


}
)
