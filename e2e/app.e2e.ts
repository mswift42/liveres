import { LiveresPage } from './app.po';

describe('liveres App', function() {
  let page: LiveresPage;

  beforeEach(() => {
    page = new LiveresPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('liveres Works!');
  });
});
