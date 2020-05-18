import {  getHome, UserLogin, UserSignUp, UserLogOut } from '../Controller'


export const  UserRoutes = [
	{
		'path':'/login',
		'method':'get',
		'action': UserLogin
	},
	{
		'path':'/login',
		'method':'post',
		'action': UserLogin
	},
	{
		'path':'/logout',
		'method':'get',
		'action': UserLogOut
	},
    {
		'path':'/register',
		'method':'get',
		'action': UserSignUp
	},
	{
		'path':'/register',
		'method':'post',
		'action': UserSignUp
	}

]


export const AppRoutes = [
	{
		'path':'/',
		'method':'get',
		'action': getHome
	},
]