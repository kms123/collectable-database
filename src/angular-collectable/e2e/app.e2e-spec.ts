import { AngularCollectablePage } from './app.po';

describe('angular-collectable App', () => {
  let page: AngularCollectablePage;

  beforeEach(() => {
    page = new AngularCollectablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
