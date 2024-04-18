// pageObjects/LoginPage.ts
import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private signInButton = async () => this.page.locator('.space-y-4 button');
  private forgotPasswordLink = async () => this.page.locator('.space-y-4 a');
  private signUpLink = async () => this.page.locator('.flex a');
  private emailInput = async () => this.page.locator('input[name="username"]');
  private passwordInput = async () => this.page.locator('input[name="password"]');
  private errorMessages = async () => this.page.locator('.text-red-500');
  private successMessage = async () => this.page.locator('.text-green-500');

  public async clickSignInButton() {
    await (await this.signInButton()).click();
  }

  public async clickForgotPasswordLink() {
    await (await this.forgotPasswordLink()).click();
  }

  public async clickSignUpLink() {
    await (await this.signUpLink()).click();
  }

  public async enterCredentials(email: string, password: string) {
    await (await this.emailInput()).fill(email);
    await (await this.passwordInput()).fill(password);
  }

  public async getErrorMessages() {
    return await (await this.errorMessages()).innerText();
  }

  public async getSuccessMessage() {
    return await (await this.successMessage()).innerText();
  }
}