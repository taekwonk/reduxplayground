import { ReduxtestPage } from './app.po';

describe('reduxtest App', () => {
  let page: ReduxtestPage;

  beforeEach(() => {
    page = new ReduxtestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
