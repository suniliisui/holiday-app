import { UsaHolidaysPage } from './app.po';

describe('usa-holidays App', () => {
  let page: UsaHolidaysPage;

  beforeEach(() => {
    page = new UsaHolidaysPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
