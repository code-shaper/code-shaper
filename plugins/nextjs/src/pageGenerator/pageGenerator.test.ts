import plugin from '../index';

describe('pageGenerator', () => {
  test('should create a new page from templates', async () => {
    // suppress console logs
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});

    await plugin.run({
      generator: 'page',
      itemName: 'movie-magic',
      rootDir: '../../',
      workspace: '/plugins/nextjs',
      dirInWorkspace: '/test-output/movie-magic/src/pages',
      filename: 'test.tsx',
    });

    // TODO: Compare test-output with expected-output
    expect(true).toBeTruthy();

    // restore console logs
    jest.restoreAllMocks();
  });
});
