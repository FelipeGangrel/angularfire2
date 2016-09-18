import { Angular2ProjetoPage } from './app.po';

describe('angular2-projeto App', function() {
  let page: Angular2ProjetoPage;

  beforeEach(() => {
    page = new Angular2ProjetoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
