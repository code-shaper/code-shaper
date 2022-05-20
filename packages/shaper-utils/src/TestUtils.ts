import {FileUtils} from './FileUtils';

function createE2eDirectory(): string {
  const tmpDirPath = FileUtils.createTempDirectory();
  return FileUtils.createDirectory(tmpDirPath, 'e2e', true);
}

export const TestUtils = {
  createE2eDirectory
};
