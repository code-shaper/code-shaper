# Code Shaper

CLI for generating code

## Developer notes

To test the `shaper` CLI locally, build it and then symlink this folder using
`npm link`:

```shell
# Starting in the root directory of the repo
npm ci
npm run build

# Now change directory to this folder and create a symlink
cd apps/code-shaper
npm link

# Make sure link has been correctly created
# Output should be similar to this:
# /Users/naresh/.nvm/versions/node/v16.15.0/lib
# `--- code-shaper@0.0.18 -> ./../../../../../projects/code-shaper/apps/code-shaper
npm ls -g

# Change directory back to root directory
cd ../..

# Rebuild shaper after any changes and try it out
npm run build
shaper
```
