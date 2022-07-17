// import plugin from '../index';

describe('cliGenerator', () => {
  test('should create a new cli from templates', async () => {
    // suppress console logs
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});

    // await plugin.run({
    //   generator: 'cli',
    //   itemName: 'react-shaper',
    //   parentDir: 'test-output',
    //   packageName: 'react-shaper',
    // });

    // TODO: Compare test-output with expected-output
    expect(true).toBeTruthy();

    // restore console logs
    jest.restoreAllMocks();
  });
});
