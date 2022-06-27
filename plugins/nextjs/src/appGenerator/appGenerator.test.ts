import plugin from '../index';
import { ApplicationUtil } from '@code-shaper/shaper-utils';
describe('appGenerator', () => {
  test('should create a new app from templates', async () => {
    // suppress console logs
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});

    await plugin.run({
      generator: 'app',
      itemName: 'movie-magic',
      parentDir: 'test-output/',
      packageName: '@movie-magic/movie-magic',
    });

    const isNextJsApplication = ApplicationUtil.isNextJsApplication(
      'test-output/movie-magic'
    );

    // TODO: Compare test-output with expected-output
    expect(isNextJsApplication).toBeTruthy();

    // restore console logs
    jest.restoreAllMocks();
  });
});
