import path from 'path';
import { FileUtils } from '@code-shaper/shaper-utils';
import { appGenerator } from './index';

describe('appGenerator', () => {
  test('should create a new app from templates', async () => {
    // suppress console logs
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});

    // Delete test-output if it exists
    const testOutput = path.join(__dirname, 'test-output');
    FileUtils.deletePath(testOutput);

    // Run the generator
    await appGenerator.generate(testOutput, {
      itemName: 'movie-magic',
      parentDir: path.join(testOutput, 'apps'),
      packageName: '@movie-magic/movie-magic',
    });

    // Compare test-output with expected-output
    const expectedOutput = path.join(__dirname, 'expected-output');
    const result = FileUtils.compareDirectories(expectedOutput, testOutput);
    expect(result.same).toBe(true);

    // restore console logs
    jest.restoreAllMocks();
  });
});
