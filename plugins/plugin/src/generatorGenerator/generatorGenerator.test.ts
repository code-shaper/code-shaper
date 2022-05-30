import plugin from '../index';

describe('generatorGenerator', () => {
  test('should create a new generator from templates', async () => {
    // suppress console logs
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});

    await plugin.run({
      generator: 'generator',
      generatorName: 'component-library',
      workspace: './plugins/plugin/test-output',
    });

    // TODO: Compare test-output with expected-output
    expect(true).toBeTruthy();

    // restore console logs
    jest.restoreAllMocks();
  });
});
