import { Constant } from '../constants';
import { FileUtils } from '../FileUtils';

/** return true if application type is NextJs and
 *  argument is type of string for root directory of the application
 @param path 
*/
function isNextJsApplication(path: string) {
  return FileUtils.fileExists(`${path}/${Constant.NextJsConfig}`);
}

export const ApplicationUtil = { isNextJsApplication };
