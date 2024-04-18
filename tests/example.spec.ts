import { test, expect } from '@playwright/test';

const baseUrl = 'https://staging-app.theenglishworks.com/login';

test('Login and out from English works', async ({ page }) => {
  await page.getByPlaceholder('Your email/username').click();
  await page.getByPlaceholder('Your email/username').fill('student@gmail.com');
  await page.getByPlaceholder('Your password').click();
  await page.getByPlaceholder('Your password').fill('123456');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Announcements' }).click();
  await page.getByRole('button', { name: 'Support' }).click();
  await page.getByRole('button', { name: 'student student @student' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.getByRole('button', { name: 'Logout' }).click();
});