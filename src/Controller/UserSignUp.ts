import {Context} from "koa"
import { getManager } from "typeorm"
import { User } from '../entity/User'
const bcrypt = require('bcrypt');



const UserSignUp = async (ctx) => {
	const BCRYPT_SALT_ROUNDS = 12
	const UserRepository = getManager().getRepository(User)
	if(ctx.method === 'GET'){
		await ctx.render('signup')
	}
	else{
		try{
		const {body} = ctx.request
	 	const userData = {
	 		...body,
	 		password: await bcrypt.hash(body.password,BCRYPT_SALT_ROUNDS)
	 	}
	 	const user = await UserRepository.create(userData)
	 	await UserRepository.save(user)
	 	ctx.session.user = user;
	 	ctx.redirect('/')
	   }
	   catch(err){
	   	console.log(err)
	   }
	}
}

export default UserSignUp