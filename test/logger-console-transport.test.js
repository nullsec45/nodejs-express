import winston from "winston";

test("Create new logger with transport",()=>{
    const logger=winston.createLogger({
        transports:[
            new winston.transports.Console({})
        ]
    });

    logger.log({
        level:"info",
        message:"Hello Logging"
    });
});