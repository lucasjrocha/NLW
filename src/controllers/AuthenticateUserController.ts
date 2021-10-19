import {Request, Response} from "express";
import { AuntenticateUserService } from "../services/AutenticateUserService";


class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        
        const {code} = request.body;

        const service = new AuntenticateUserService();
        const result = await service.execute(code);

        return response.json(result);
    }
}


export {AuthenticateUserController};