import { MyAppFgPage } from './app.po';

describe('my-app-fg App', function() {
  let page: MyAppFgPage;

  beforeEach(() => {
    page = new MyAppFgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
