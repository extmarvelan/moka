import HttpProxy from "http-proxy";
import Http from "http";
import config from "../config/config.json";
import routes from "../config/routes.json";
import { match } from "path-to-regexp";


class ProxyServer {

    private proxy:HttpProxy;

    constructor(){
        this.proxy = HttpProxy.createProxyServer();
    }

    private verifyRoute(path:string):boolean{
        for (const iterator of routes) {
            const fn = match(iterator.path, { decode: decodeURIComponent });
            if(fn(path)) return true
        }
        return false;
    }

    private handleServer(proxy:HttpProxy, req: Http.IncomingMessage, res: Http.ServerResponse, validate:(path:string)=>boolean): void {
        const urlObject = new URL(req.url!);
        
        const handleError = (error:Error) =>{
            res.writeHead(400, {'Content-Type': 'application/json'});
            res.write(JSON.stringify({error}));
            res.end();
        }
        
        if (validate(urlObject.pathname)) {
            proxy.web(req, res, { target: `http://localhost:${config.mocks.port}` }, handleError);
        } else {
            proxy.web(req, res, { target: `${urlObject.protocol}//${urlObject.host}`, }, handleError);
        }
    }

    public start(): Promise<number> {
        return new Promise((resolve, reject) => {
            try {
                const server: Http.Server = Http.createServer((req: Http.IncomingMessage, res: Http.ServerResponse)=>{
                    this.handleServer(this.proxy, req, res, this.verifyRoute)
                });
                server.listen(config.proxy.port);
                resolve(config.proxy.port);
            } catch (error) {
                reject(error);
            }

        })
    }

}

export default ProxyServer;