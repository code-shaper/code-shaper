import { execSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';

/**
 * Use Case
 * 1. Initialize git repo
 * 2. Do npm install
 * 3. Create an initial git commit
 *
 * // Initialize git repo
 * process.chdir(dstDir);
 * let initializedGit = false;
 *
 * if (tryGitInit()) {
 *   initializedGit = true;
 *   console.log();
 *   console.log('Initialized git repository');
 * }
 *
 * // TODO: Do npm install
 *
 * // Create an initial git commit
 * if (initializedGit && tryGitCommit(dstDir, 'Initial commit')) {
 *   console.log('Created an initial commit');
 * }
 */

function isInGitRepository() {
  try {
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

function tryGitInit() {
  try {
    execSync('git --version', { stdio: 'ignore' });
    if (isInGitRepository()) {
      return false;
    }

    execSync('git init', { stdio: 'ignore' });
    return true;
  } catch (e) {
    console.warn('Git repo not initialized', e);
    return false;
  }
}

function tryGitCommit(dstDir: string, message: string) {
  try {
    execSync('git add -A', { stdio: 'ignore' });
    execSync(`git commit -m "${message}"`, {
      stdio: 'ignore',
    });
    return true;
  } catch (e) {
    // Couldn't commit in an already initialized git repo.
    // Remove the Git files to avoid a half-done state.
    console.warn('Git commit not created', e);
    console.warn('Removing .git directory...');
    try {
      fs.removeSync(path.join(dstDir, '.git'));
    } catch (removeErr) {
      // Ignore.
    }
    return false;
  }
}

export const GitUtils = {
  tryGitInit,
  tryGitCommit,
};
