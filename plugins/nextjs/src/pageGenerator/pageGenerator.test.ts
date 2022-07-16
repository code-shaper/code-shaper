import path from 'path';
import { pageGenerator } from './index';

describe('pageGenerator', () => {
  test('should create a new page from templates', async () => {
    // suppress console logs
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});

    const rootDir = path.join(__dirname, 'test-output');
    await pageGenerator.generate(rootDir, {
      itemName: 'SettingsPage',
      workspace: path.join('apps', 'movie-magic'),
      dirInWorkspace: 'src/pages',
      filename: 'settings.tsx',
    });

    // TODO: Compare test-output with expected-output
    expect(true).toBeTruthy();

    // restore console logs
    jest.restoreAllMocks();
  });
});
