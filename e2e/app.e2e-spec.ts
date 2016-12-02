import { RegisterInsolvenciiPage } from './app.po';

describe('register-insolvencii App', function() {
  let page: RegisterInsolvenciiPage;

  beforeEach(() => {
    page = new RegisterInsolvenciiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
