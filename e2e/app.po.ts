export class LiveresPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('liveres-app p')).getText();
  }
}
