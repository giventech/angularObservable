
// This is the selenium like page context
export class MyAppFgPage {
  navigateTo() {
    return browser.get('/');
  }

  // getParagraphText() {
  //   return element(by.css('app-root h1')).getText();
  // }
  getTodosItems() {
   return element.all(by.css('app-todos li')).map((elem) => { 
      return elem.getText(); 
    });
  }
}
