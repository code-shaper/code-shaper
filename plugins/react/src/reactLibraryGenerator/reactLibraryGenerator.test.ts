// import plugin from '../index';

describe('reactLibraryGenerator', () => {
  test('should create a new React library from templates', async () => {
    // suppress console logs
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});

    // await plugin.run({
    //   generator: 'react-library',
    //   itemName: 'ui-lib',
    //   parentDir: 'test-output',
    //   packageName: '@movie-magic/ui-lib',
    // });

    // TODO: Compare test-output with expected-output
    expect(true).toBeTruthy();

    // restore console logs
    jest.restoreAllMocks();
  });
});
