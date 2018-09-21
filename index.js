/** @format */

import {AppRegistry} from 'react-native';
import PizzaTranslator from './app/PizzaTranslator';
import MoveList from './app/MoveList';
import App from './App'
import {name as appName} from './app.json';

import SimpleStack from './app/NaviTool';
import SimpleNavi from './app/SimpleNavi';
import RneDemo from './app/ElementsUI';


AppRegistry.registerComponent(appName, () => SimpleNavi);
