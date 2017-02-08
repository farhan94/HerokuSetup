import { WiFiMeshRCPage } from './app.po';

describe('wi-fi-mesh-rc App', function() {
  let page: WiFiMeshRCPage;

  beforeEach(() => {
    page = new WiFiMeshRCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
