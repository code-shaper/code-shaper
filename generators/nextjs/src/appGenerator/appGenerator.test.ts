import path from 'path';
import { FileUtils } from '@code-shaper/shaper-utils';
import { appGenerator } from './index';

describe('appGenerator', () => {
  test('should create a new app from templates using css', async () => {
    // suppress console logs
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});

    // Delete test-output if it exists
    const testOutput = path.join(__dirname, 'test-output-css');
    FileUtils.deletePath(testOutput);

    // Run the generator
    await appGenerator.generate(testOutput, {
      itemName: 'movie-magic',
      parentDir: path.join(testOutput, 'apps'),
      packageName: '@movie-magic/movie-magic',
      useTailwindcss: false,
    });

    // restore console logs
    jest.restoreAllMocks();

    // Compare test-output with expected-output
    const expectedOutput = path.join(__dirname, 'expected-output-css');
    const result = FileUtils.compareDirectories(expectedOutput, testOutput);
    if (!result.same) {
      console.log('%s did not match the expected output', testOutput);
      FileUtils.logDirCompareResult(result);
    }
    expect(result.same).toBe(true);
  });

  test('should create a new app from templates using tailwindcss', async () => {
    // suppress console logs
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});

    // Delete test-output if it exists
    const testOutput = path.join(__dirname, 'test-output-tailwindcss');
    FileUtils.deletePath(testOutput);

    // Run the generator
    await appGenerator.generate(testOutput, {
      itemName: 'movie-magic',
      parentDir: path.join(testOutput, 'apps'),
      packageName: '@movie-magic/movie-magic',
      useTailwindcss: true,
    });

    // restore console logs
    jest.restoreAllMocks();

    // Compare test-output with expected-output
    const expectedOutput = path.join(__dirname, 'expected-output-tailwindcss');
    const result = FileUtils.compareDirectories(expectedOutput, testOutput);
    if (!result.same) {
      console.log('%s did not match the expected output', testOutput);
      FileUtils.logDirCompareResult(result);
    }
    expect(result.same).toBe(true);
  });
});
