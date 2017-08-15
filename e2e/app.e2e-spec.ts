import { TintTestPage } from './app.po';

describe('tint-test App', () => {
  let page: TintTestPage;

  beforeEach(() => {
    page = new TintTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
