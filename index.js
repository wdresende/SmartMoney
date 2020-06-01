import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remover quando atualizar a versão
]);

/**
 * @format
 */

// if (__DEV__) {
//   import('./config/ReactotronConfig');
// }

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
