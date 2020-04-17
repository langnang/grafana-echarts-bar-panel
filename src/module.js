import {
  Controller
} from './controller';
import {
  loadPluginCss
} from 'app/plugins/sdk';

loadPluginCss({
  dark: 'plugins/echarts-bar-panel/css/dark.css',
  light: 'plugins/echarts-bar-panel/css/light.css',
});

export {
  Controller as PanelCtrl
};