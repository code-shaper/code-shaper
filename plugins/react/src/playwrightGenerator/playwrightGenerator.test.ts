import path from 'path';
import { FileUtils } from '@code-shaper/shaper-utils';
import { playwrightGenerator } from './index';

describe('playwrightGenerator', () => {
  test('should create a new playwright workspace from templates', async () => {
    // suppress console logs
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});

    // Delete test-output if it exists
    const testOutput = path.join(__dirname, 'test-output');
    FileUtils.deletePath(testOutput);

    // Run the generator
    await playwrightGenerator.generate(testOutput, {
      repoName: 'movie-magic',
      parentDir: path.join(testOutput, 'apps'),
    });

    // restore console logs
    jest.restoreAllMocks();

    // Compare test-output with expected-output
    const expectedOutput = path.join(__dirname, 'expected-output');
    const result = FileUtils.compareDirectories(expectedOutput, testOutput);
    if (!result.same) {
      console.log('%s did not match the expected output', testOutput);
      FileUtils.logDirCompareResult(result);
    }
    expect(result.same).toBe(true);
  });
});
