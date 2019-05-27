import React from 'react'
import { Route, Redirect} from 'react-router-dom'
import MapG from '../pages/map/index'

export default () => [
	<Route path='/' render={() => <Redirect to="/map" />} exact key='index'/>,
	<Route path='/map' component = {MapG} exact key='map'/>,
	//<Route path='/edit' component = {Edit} exact key='edit'/>,
	//<InjectedRoute path='/more' component = {More} exact key='more'/>,
	//<InjectedRoute path='/detail/:id' component = {Detail} exact key='detail'/>
]