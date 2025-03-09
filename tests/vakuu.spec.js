// @ts-check
import { test, expect } from '@playwright/test';

/* test('has title', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/');
  
  //Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/vacuu/);
  await page.locator('//*[@id="app"]/div[2]/div[1]/div[1]/a[2]').click();

}); */
test('Page Insurance has no 404', async ({ page }) => {

  const response = await page.request.get('https://polis812.github.io/insurance');
  await expect(response).toBeOK();

});

test('Page About has no 404', async ({ page }) => {
  const response = await page.request.get('https://polis812.github.io/about');
  await expect(response).toBeOK();

});


test('Page Review has no 404', async ({ page }) => {
  const response = await page.request.get('https://polis812.github.io/review');
  await expect(response).toBeOK();

});

test('page Blog has no 404', async ({ page }) => {
  const response = await page.request.get('https://polis812.github.io/blog');
  await expect(response).toBeOK();

});

test('Page Contact has no 404', async ({ page }) => {
  const response = await page.request.get('https://polis812.github.io/contact');
  await expect(response).toBeOK();

});

test('Page Home has no 404', async ({ page }) => {
  const response = await page.request.get('https://polis812.github.io/home');
  await expect(response).toBeOK();

});

test('Page Travel has no 404', async ({ page }) => {
  const response = await page.request.get('https://polis812.github.io/travel');
  await expect(response).toBeOK();

});

test('Page Pet has no 404', async ({ page }) => {
  const response = await page.request.get('https://polis812.github.io/pet');
  await expect(response).toBeOK();
});

test('Page Privacy has no 404', async ({ page }) => {
  const response = await page.request.get('https://polis812.github.io/privacy');
  await expect(response).toBeOK();
});

test('Page Cookies has no 404', async ({ page }) => {
  const response = await page.request.get('https://polis812.github.io/cookies');
  await expect(response).toBeOK();
});

test('Page Partners has no 404', async ({ page }) => {
  const response = await page.request.get('https://polis812.github.io/partners');
  await expect(response).toBeOK();
});

test('Wrong link Terms', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/')

  await page.locator('//*[@id="app"]/footer/div[2]/div[1]/a[1]').click();
  
  const currentUrl = page.url();

  await expect(currentUrl).toBe('https://polis812.github.io/vacuu/terms');
});

test('Wrong link Vakuu.com', async ({ page }) => {
  // const response = await page.request.get('https://polis812.github.io/privacy');
  // await expect(response).toBeOK();
  await page.goto('https://polis812.github.io/vacuu/')

  await page.locator('//*[@id="app"]/footer/div[2]/a/img').click();
  
  const currentUrl = page.url();

  await expect(currentUrl).toBe('https://polis812.github.io/vacuu/');
  
});

test('Wrong link Vakuu.com on main page', async ({ page }) => {
  // const response = await page.request.get('https://polis812.github.io/privacy');
  // await expect(response).toBeOK();
  await page.goto('https://polis812.github.io/vacuu/')

  await page.locator('//*[@id="app"]/div[2]/div[1]/div[1]/a[1]/img').click();
  
  const currentUrl = page.url();

  await expect(currentUrl).toBe('https://polis812.github.io/vacuu/');
  
});

test('Empty mail isn`t correct', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/');
 
  await page.locator('//*[@id="app"]/footer/div[1]/div[4]/div/div/input').fill('');

  await page.locator('//*[@id="app"]/footer/div[1]/div[4]/div/div/div').click();

  const response = await page.locator('#swal2-title');
  await expect(response).toHaveText('Error')
  
});





//test('get started link', async ({ page }) => {
//  await page.goto('https://playwright.dev/');

  // Click the get started link.
//  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
//  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
//});
