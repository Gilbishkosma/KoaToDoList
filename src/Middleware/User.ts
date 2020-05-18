



const UserCheck =  () => {
	return async (ctx,next) =>{
		const {user} = ctx.session
		if (user) ctx.state = {
			...ctx.state, user
		};
		await next()
	}
}

export default UserCheck