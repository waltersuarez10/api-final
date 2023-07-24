mport express, {Router, Request, Response} from 'express'
import AuthController from '../controller/AutController'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

class AuthRouter {

	router: Router
	authController : AuthController


	constructor(){
		this.router = Router()
		this.authController = new AuthController()
		this.routes()
	}


	private routes(){


		this.router.post('/registrar_usuario', (req:Request, res:Response)=>{
			this.authController.registrarUsuario(req, res)
		})


		this.router.post('/login', async (req: Request, res: Response) =>{

			const usuariodb:any = await this.authController.traerUsuario(req, res)