import { WebapplPage } from './app.po';

describe('webappl App', () => {
  let page: WebapplPage;

  beforeEach(() => {
    page = new WebapplPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
