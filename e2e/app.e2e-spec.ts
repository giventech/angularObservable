import { MyAppFgPage } from './app.po';

describe('my-app-fg App', function() {
  let page: MyAppFgPage;

  beforeEach(() => {
    page = new MyAppFgPage();
  });

  it('should display message saying app works', (done) => {
    page.navigateTo();
    page.getTodosItems().then(items => {
      expect(items.length).toBeGreaterThan(0);
      done();
    }, (error) => {
      fail(error);
    })
  });
});
