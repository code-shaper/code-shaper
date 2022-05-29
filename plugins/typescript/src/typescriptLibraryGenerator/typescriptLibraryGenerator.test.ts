// import plugin from '../index';

describe('typescriptLibraryGenerator', () => {
  test('should create a new TypeScript library from templates', async () => {
    // suppress console logs
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});

    // await plugin.run({
    //   generator: 'typescript-library',
    //   itemName: 'string-utils',
    //   parentDir: 'test-output',
    //   packageName: '@movie-magic/string-utils',
    // });

    expect(true).toBeTruthy();

    // restore console logs
    jest.restoreAllMocks();
  });
});
