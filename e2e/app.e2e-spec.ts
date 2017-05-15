import { PhotoPortfolioPage } from './app.po';

describe('photo-portfolio App', () => {
  let page: PhotoPortfolioPage;

  beforeEach(() => {
    page = new PhotoPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
