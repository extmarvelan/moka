import Express, { Request, Response } from "express";
import fs from "fs";
import config from "../config/config.json";
import routes from "../config/routes.json";

class MockServer {

    private server: Express.Application;

    constructor() {
        this.server = Express();
    }

    response(find:any, req:Request, res:Response ){
        if (find!.headers.length > 0) {
            for (const header of find!.headers) {
                res.set(header.key, header.value)
            }
        }
        const data = fs.readFileSync(`${__dirname}/${find?.file}`, 'utf8');
        res.status(find!.status).json(JSON.parse(data));
    }

    redirect() {
        for (const route of routes) {
            this.server.all(route.path, (req, res) => {
                const findDefault = route.mocks.find((item => item.default));
                const find = route.mocks.find((item => item.type === req.method));
                if (findDefault) return this.response(findDefault, req, res);
                if (find) return this.response(find, req, res);
                return res.status(400).json({ message: "method not found" });
            })
        }
    }

    async start(): Promise<number> {
        return new Promise((resolve, reject) => {
            try {
                this.server.use(Express.static(`${__dirname}/../public`))
                this.server.listen(config.mocks.port, () => {
                    this.redirect();
                    resolve(config.mocks.port)
                })
            } catch (error) {
                reject(error);
            }
        })
    }
}

export { MockServer }