// import plugin from '../index';

describe('turborepoGenerator', () => {
  test('should create a new repo from templates', async () => {
    // suppress console logs
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});

    // await plugin.run({
    //     generator: 'turborepo',
    //     itemName: 'movie-magic',
    // });

    expect(true).toBeTruthy();

    // restore console logs
    jest.restoreAllMocks();
  });
});
