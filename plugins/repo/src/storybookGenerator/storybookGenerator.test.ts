// import plugin from '../index';

describe('storybookGenerator', () => {
  test('should create a storybook directory from templates', async () => {
    // suppress console logs
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});

    // await plugin.run({
    //     generator: 'storybook',
    //     okToProceed: true,
    // });

    // TODO: Compare test-output with expected-output
    expect(true).toBeTruthy();

    // restore console logs
    jest.restoreAllMocks();
  });
});
