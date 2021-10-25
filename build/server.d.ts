export declare class Server {
    private httpServer;
    private app;
    private io;
    private activeSockets;
    private readonly DEFAULT_PORT;
    constructor();
    private initialize;
    private configureApp;
    private configureRoutes;
    private handleSocketConnection;
    listen(callback: (port: number) => void): void;
}
