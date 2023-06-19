import path from 'path';
import { FileUtils } from '@code-shaper/shaper-utils';
import { storybookGenerator } from './index';

describe('storybookGenerator', () => {
  test('should create a storybook app from templates', async () => {
    // suppress console logs
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});

    // Delete test-output if it exists
    const testOutput = path.join(__dirname, 'test-output');
    FileUtils.deletePath(testOutput);

    // Run the generator
    await storybookGenerator.generate(testOutput, {
      itemName: 'movie-magic-storybook',
      parentDir: path.join(testOutput, 'apps'),
      packageName: '@movie-magic/movie-magic-storybook',
    });

    // Compare test-output with expected-output
    const expectedOutput = path.join(__dirname, 'expected-output');
    const result = FileUtils.compareDirectories(expectedOutput, testOutput);
    expect(result.same).toBe(true);

    // restore console logs
    jest.restoreAllMocks();
  });
});
