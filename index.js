import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import {AppProvider} from './context';
// console.log(AppProvider);
ReactDOM.render(
  <React.StrictMode>
  	<AppProvider>
		<App />
	</AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
  )
