import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes/';
import registerServiceWorker from './registerServiceWorker';
const Gun = require('gun/gun');

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
var gun = Gun('https://gunjs.herokuapp.com/gun');
gun.get('random/bFq4hrDCT').put({hello: "world"});
var ref = gun.get('random/bFq4hrDCT');
ref.on(function(data){
  console.log(data);
});
ref.get("tim").put('sync');
