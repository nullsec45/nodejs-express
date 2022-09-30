import winston from "winston";
import DailyRotatFile from "winston-daily-rotate-file";

test("logging with daily rotate file", () =>{
    const logger=winston.createLogger({
        level:"debug",
        transports:[
            new winston.transports.Console({}),
            new DailyRotatFile({
                filename:"app-%DATE%.log",
                maxSize:"1m",
                maxFiles:"14d",
                zippedArchive:true
            })
        ]
    });
    for(let i=0;i<1000;i++){
        logger.info(`Info Message ${i}`);
    }
});
