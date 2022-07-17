import path from 'path';
import { FileUtils } from '@code-shaper/shaper-utils';
import { typescriptLibraryGenerator } from './index';

describe('typescriptLibraryGenerator', () => {
  test('should create a new TypeScript library from templates', async () => {
    // suppress console logs
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});

    // await plugin.run({
    //   generator: 'typescript-library',
    //   itemName: 'string-utils',
    //   parentDir: 'test-output',
    //   packageName: '@movie-magic/string-utils',
    // });

    // Delete test-output if it exists
    const testOutput = path.join(__dirname, 'test-output');
    FileUtils.deletePath(testOutput);

    // Run the generator
    await typescriptLibraryGenerator.generate(testOutput, {
      itemName: 'string-utils',
      parentDir: path.join(testOutput, 'packages'),
      packageName: '@movie-magic/string-utils',
    });

    // Compare test-output with expected-output
    const expectedOutput = path.join(__dirname, 'expected-output');
    const result = FileUtils.compareDirectories(expectedOutput, testOutput);
    expect(result.same).toBe(true);

    // restore console logs
    jest.restoreAllMocks();
  });
});
