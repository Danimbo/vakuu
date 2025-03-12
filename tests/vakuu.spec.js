// @ts-check
import { test, expect } from '@playwright/test';


test('№3 Page Insurance has no 404', async ({ page }) => {

  const response = await page.request.get('https://polis812.github.io/insurance');
  await expect(response).toBeOK();

});

test('№4 Page About has no 404', async ({ page }) => {
  const response = await page.request.get('https://polis812.github.io/about');
  await expect(response).toBeOK();

});


test('№6 Page Review has no 404', async ({ page }) => {
  const response = await page.request.get('https://polis812.github.io/review');
  await expect(response).toBeOK();

});

test('№5 Page Blog has no 404', async ({ page }) => {
  const response = await page.request.get('https://polis812.github.io/blog');
  await expect(response).toBeOK();

});

test('№7 Page Contact has no 404', async ({ page }) => {
  const response = await page.request.get('https://polis812.github.io/contact');
  await expect(response).toBeOK();

});

test('№12 Page Home has no 404', async ({ page }) => {
  const response = await page.request.get('https://polis812.github.io/home_insurance');
  await expect(response).toBeOK();

});

test('№10 Page Travel has no 404', async ({ page }) => {
  const response = await page.request.get('https://polis812.github.io/travel');
  await expect(response).toBeOK();

});

test('№11 Page Pet has no 404', async ({ page }) => {
  const response = await page.request.get('https://polis812.github.io/pet');
  await expect(response).toBeOK();
});

test('№17 Page Privacy has no 404', async ({ page }) => {
  const response = await page.request.get('https://polis812.github.io/privacy');
  await expect(response).toBeOK();
});

test('№14 Page Cookies has no 404', async ({ page }) => {
  const response = await page.request.get('https://polis812.github.io/cookies');
  await expect(response).toBeOK();
});

test('№16 Page Partners has no 404', async ({ page }) => {
  const response = await page.request.get('https://polis812.github.io/partners');
  await expect(response).toBeOK();
});

test('№18 Correct link Terms', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/')

  await page.locator('//*[@id="app"]/footer/div[2]/div[1]/a[1]').click();
  
  const currentUrl = page.url();

  await expect(currentUrl).toBe('https://polis812.github.io/vacuu/terms');
});

test('№2 Correct link Vakuu.com in footer', async ({ page }) => {
  // const response = await page.request.get('https://polis812.github.io/privacy');
  // await expect(response).toBeOK();
  await page.goto('https://polis812.github.io/vacuu/')

  await page.locator('//*[@id="app"]/footer/div[2]/a/img').click();
  
  const currentUrl = page.url();

  await expect(currentUrl).toBe('https://polis812.github.io/vacuu/');
  
});

test('№2 Correct link Vakuu.com on main page', async ({ page }) => {
  // const response = await page.request.get('https://polis812.github.io/privacy');
  // await expect(response).toBeOK();
  await page.goto('https://polis812.github.io/vacuu/')

  await page.locator('//*[@id="app"]/div[2]/div[1]/div[1]/a[1]/img').click();
  
  const currentUrl = page.url();

  await expect(currentUrl).toBe('https://polis812.github.io/vacuu/');
  
});

test('№15 Empty mail - isn`t correct', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/');
 
  await page.locator('//*[@id="app"]/footer/div[1]/div[4]/div/div/input').fill('');

  await page.locator('//*[@id="app"]/footer/div[1]/div[4]/div/div/div').click();

  const response = await page.locator('#swal2-title');
  await expect(response).toHaveText('Error')
  
});

test('№19 Blog has an a link element', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/');
 
  await expect(page.locator('//*[@id="app"]/div[2]/div[1]/div[1]/a')).toHaveCount(7);
});



//test('get started link', async ({ page }) => {
//  await page.goto('https://playwright.dev/');

  // Click the get started link.
//  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
//  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
//});
