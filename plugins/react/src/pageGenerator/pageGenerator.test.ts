import path from 'path';
import { FileUtils } from '@code-shaper/shaper-utils';
import { pageGenerator } from './index';

describe('pageGenerator', () => {
  test('should create a new page from templates', async () => {
    // suppress console logs
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});

    // Delete test-output if it exists
    const testOutput = path.join(__dirname, 'test-output');
    FileUtils.deletePath(testOutput);

    // Run the generator
    await pageGenerator.generate(testOutput, {
      itemName: 'SettingsPage',
      workspace: path.join(testOutput, 'apps', 'movie-magic'),
      dirInWorkspace: 'src/pages/SettingsPage',
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
