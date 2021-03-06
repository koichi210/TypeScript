import * as http from "http";

class Main {
    constructor() {
        // httpサーバーを設定する
        const server: http.Server = http.createServer(
            (request: http.IncomingMessage, response: http.ServerResponse) =>
                this.requestHandler(request, response));
        // サーバーを起動してリクエストを待ち受け状態にする
        server.listen('5000');
    }

    /*
    * サーバーにリクエストがあった時に実行される関数
    */
    private requestHandler(request: http.IncomingMessage,
        response: http.ServerResponse): void {
        response.end("Hello!!World.\r\nexecute Node.js from TypeScript code");
    }
}

const main = new Main();
