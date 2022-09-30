import TransportStream from "winston-transport";
import winston from "winston";

test("create new transport",() =>{
    class MyTransport extends TransportStream{
        constructor(option){
            super(option);
        }

        log(info, next){
            console.log(`${new Date()} : ${info.level.toUpperCase()} : ${info.message}`);
            next();
        }
    }

    const logger=winston.createLogger({
        level:"silly",
        transports:[
            new MyTransport({})
        ]
    });
    logger.info("Info Message");
    logger.warn("Hello Message");
    logger.error("Error Message");

})