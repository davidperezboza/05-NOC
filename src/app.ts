import { Server } from "./presentation/server"

const main = () => {
    //Server.start();
    console.log(process.env.MAILER_EMAIL);
}

(async() => {
    main();
})();
