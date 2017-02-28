import { BridalShowAgPage } from './app.po';

describe('bridal-show-ag App', () => {
  let page: BridalShowAgPage;

  beforeEach(() => {
    page = new BridalShowAgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
