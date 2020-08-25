import { by, element } from 'protractor';
import { AppPage } from './app.po';

describe('angular-weather App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display welcome message', () => {
    expect(element(by.css('.navbar-brand')).getText()).toEqual('AgileSphere coding test by Omar Mirza - The Weather App');
  });

  it('should show no records message on page load', () => {
    expect(element(by.css('strong')).getText()).toEqual('No records to list.');
  });

  it('should submit form and populate table with data', () => {
    element(by.id('city')).sendKeys('Birmingham');
    element(by.css('.btn-search')).submit();
    expect(element(by.css('table')).isDisplayed()).toBeTruthy();
    expect(element.all(by.css('table th')).count()).toEqual(5);
    expect(element.all(by.css('table td')).count()).toEqual(5);
    expect(element(by.css('table td:first-child')).getText()).toEqual('Birmingham');
  });
});
