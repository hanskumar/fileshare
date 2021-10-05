import React from 'react'
import { Route,Redirect } from 'react-router-dom'
import Layout from '../Layout';
import {useDispatch,useSelector} from 'react-redux'

const PrivateRoute = ({children,...rest}) => {

	const auth = useSelector(state=>state.auth);
	console.log("Data form Redux.",auth)	

    return (
        <Route
			{...rest}
			render={({ location }) =>
				auth.isAuth ? (
					<Layout>{children}</Layout>
				) : (
					<Redirect
						to={{
							pathname: "/",
							state: { from: location },
						}}
					/>
				)
			}
		/>
    )
}

export default PrivateRoute
