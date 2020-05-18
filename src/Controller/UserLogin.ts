import {Context} from "koa"
import { getManager } from "typeorm"
import { User } from '../entity/User'
const bcrypt = require('bcrypt');


const UserLogin = async (ctx) => {
	const UserRepository = getManager().getRepository(User)
	let message: string

	if(ctx.request.method === 'GET'){
		await ctx.render('login',{message})
	}
	else if(ctx.request.method === 'POST'){
		let {body} = ctx.request
		const user = await UserRepository.findOne({name:body.name})
		if (!user){
	 		ctx.throw(404,'User not found')
	 	};
	 	const isValid = await bcrypt.compare(body.password,user.password)
	 	if(isValid){
	 		ctx.session.user = user;
	 		ctx.redirect('/')
	 	}
	 	else{
	 		message = "Invalid password"
	 	 	}
		await ctx.render('login',{message: message ? message : "OOPS some error occured"})
	}
	await ctx.render('login',{message})
}

export default UserLogin