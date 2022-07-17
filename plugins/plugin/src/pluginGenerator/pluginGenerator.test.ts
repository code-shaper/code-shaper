import path from 'path';
import { FileUtils } from '@code-shaper/shaper-utils';
import { pluginGenerator } from './index';

describe('pluginGenerator', () => {
  test('should create a new plugin from templates', async () => {
    // suppress console logs
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});

    // Delete test-output if it exists
    const testOutput = path.join(__dirname, 'test-output');
    FileUtils.deletePath(testOutput);

    // Run the generator
    await pluginGenerator.generate(testOutput, {
      pluginName: 'react-patterns',
      parentDir: path.join(testOutput, 'plugins'),
      packageName: '@movie-magic/react-patterns',
    });

    // Compare test-output with expected-output
    const expectedOutput = path.join(__dirname, 'expected-output');
    const result = FileUtils.compareDirectories(expectedOutput, testOutput);
    expect(result.same).toBe(true);

    // restore console logs
    jest.restoreAllMocks();
  });
});
