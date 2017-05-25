import { LacanchitaPage } from './app.po';

describe('lacanchita App', () => {
  let page: LacanchitaPage;

  beforeEach(() => {
    page = new LacanchitaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
