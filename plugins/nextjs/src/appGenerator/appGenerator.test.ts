import path from 'path';
import { appGenerator } from './index';

describe('appGenerator', () => {
  test('should create a new app from templates', async () => {
    // suppress console logs
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});

    const rootDir = path.join(__dirname, 'test-output');
    await appGenerator.generate(rootDir, {
      itemName: 'movie-magic',
      parentDir: path.join(rootDir, 'apps'),
      packageName: '@movie-magic/movie-magic',
    });

    // TODO: Compare test-output with expected-output
    expect(true).toBeTruthy();

    // restore console logs
    jest.restoreAllMocks();
  });
});
