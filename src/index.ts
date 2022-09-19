import ProxyServer from "./proxy/ProxyServer";
import color from "colors"
import { EProcess } from "./enums/EProcess";
import { MockServer } from "./mocks/MockServer";

const logo = `
  ▄▄▄▄███▄▄▄▄    ▄██████▄     ▄█   ▄█▄    ▄████████ 
▄██▀▀▀███▀▀▀██▄ ███    ███   ███ ▄███▀   ███    ███ 
███   ███   ███ ███    ███   ███▐██▀     ███    ███ 
███   ███   ███ ███    ███  ▄█████▀      ███    ███ 
███   ███   ███ ███    ███ ▀▀█████▄    ▀███████████ 
███   ███   ███ ███    ███   ███▐██▄     ███    ███ 
███   ███   ███ ███    ███   ███ ▀███▄   ███    ███ 
 ▀█   ███   █▀   ▀██████▀    ███   ▀█▀   ███    █▀  
`;

class Moka {
    static async main() {

        const proxyServer = new ProxyServer();
        const serverMocks = new MockServer();

        console.log(color.yellow(logo))

        try {
            const portProxy = await proxyServer.start();
            this.printProcess(EProcess.PROXY, portProxy);
        } catch (error) {
            this.printProcess(EProcess.PROXY);
        }

        try {
            const portServer = await serverMocks.start();
            this.printProcess(EProcess.MOCKS, portServer);
        } catch (error) {
            this.printProcess(EProcess.MOCKS);
        }
    }

    static printProcess(ps: EProcess, port?: number): void {
        process.stdout.write(color.bold(`> Server ${ps} ${port ? color.yellow(`http://localhost:${port} ${color.green('[OK]')}`): `FAIL [❌]`}\n`));
    }
}

Moka.main();