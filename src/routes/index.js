import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../containers/Template'
import Home from '../containers/Home'
import Profiles from '../containters/Profile'

const createRoutes = () =>{
	return (
		<Route
			path='/'
			component={Template}
		>
		
		<IndexRoute
			component={Home}
		/>
		<Routes
			path={'/profile'}
		component={Profile}
		/>
		</Route>
	)
}

const Routes = createRoutes()


export default Routes