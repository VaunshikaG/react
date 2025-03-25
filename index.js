/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './ep_code/awesome01/App';
import {name as appName} from './app.json';
import AppPro from './ep_code/awesome01/AppPro';
import AppStyler from './ep_code/styler02/App';

// AppRegistry.registerComponent(appName, () => AppPro);
AppRegistry.registerComponent(appName, () => AppStyler);
