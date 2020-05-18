import {Context} from "koa"




const UserLogOut = async (ctx:Context) => {
	delete ctx.session.user
	ctx.redirect('/')
} 

export default UserLogOut