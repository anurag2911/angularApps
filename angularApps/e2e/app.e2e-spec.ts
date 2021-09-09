import { AngularAppsPage } from './app.po';

describe('angular-apps App', function() {
  let page: AngularAppsPage;

  beforeEach(() => {
    page = new AngularAppsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
