import { SigumoTodoList.Github.IoPage } from './app.po';

describe('sigumo-todo-list.github.io App', () => {
  let page: SigumoTodoList.Github.IoPage;

  beforeEach(() => {
    page = new SigumoTodoList.Github.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
