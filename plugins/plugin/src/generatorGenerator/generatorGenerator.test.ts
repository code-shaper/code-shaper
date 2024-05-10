import path from 'path';
import { FileUtils } from '@code-shaper/shaper-utils';
import { generatorGenerator } from './index';

describe('generatorGenerator', () => {
  test('should create a new generator from templates', async () => {
    // suppress console logs
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});

    // Delete test-output if it exists
    const testOutput = path.join(__dirname, 'test-output');
    FileUtils.deletePath(testOutput);

    // Run the generator
    await generatorGenerator.generate(testOutput, {
      itemName: 'movie-magic-website',
      generatorName: 'simple-site',
      workspace: path.join(testOutput, 'plugins', 'instant-sites'),
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
