import plugin from '../index';

describe('<%= generatorModuleName %>', () => {
  test('should create a <%= generatorNamePascalCase %> from templates', async () => {
    // suppress console logs
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});

    await plugin.run({
      generator: '<%= generatorName %>',
    });

    expect(true).toBeTruthy();

    // restore console logs
    jest.restoreAllMocks();
  });
});
