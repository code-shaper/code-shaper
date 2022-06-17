import plugin from '../index';

describe('appGenerator', () => {
  test('should create a new app from templates', async () => {
    // suppress console logs
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});

    await plugin.run({
      generator: 'app',
    });

    // TODO: Compare test-output with expected-output
    expect(true).toBeTruthy();

    // restore console logs
    jest.restoreAllMocks();
  });
});
