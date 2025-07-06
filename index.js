import {AppRegistry} from 'react-native';
import App from './ep_code/awesome_01/App';
import {name as appName} from './app.json';
import AppPro from './ep_code/awesome_01/AppPro';
import AppStyler from './ep_code/styler_02/App';
import BgChanger from './ep_code/bgChanger_04/bgChanger';
import PassApp from './ep_code/password_generator_03/PasswordApp';
import DiceApp from './ep_code/roll_dice_05/App';
import counterApp from './ep_code/coding_ques';

// AppRegistry.registerComponent(appName, () => AppPro);
// AppRegistry.registerComponent(appName, () => AppStyler);
// AppRegistry.registerComponent(appName, () => PassApp);
// AppRegistry.registerComponent(appName, () => BgChanger);
AppRegistry.registerComponent(appName, () => DiceApp);
// AppRegistry.registerComponent(appName, () => counterApp);
