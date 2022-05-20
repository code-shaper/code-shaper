import {TestUtils} from '@code-shaper/shaper-utils';
import reactPlugin from '../src/index';
// import path from 'path';

describe('appGenerator e2e', () => {
    it('should create app from template', async () => {
        
        TestUtils.createE2eDirectory();
        await reactPlugin.run({
            generator: 'app',
            itemName: 'test',
            parentDir: 'tmp/e2e',
            packageName: '@myOrg/myApp'
        });

        expect(true).toBeTruthy();

    });
});