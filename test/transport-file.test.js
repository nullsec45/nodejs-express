import winston from "winston";

test("Create new logger  with console & file transport", () =>{
    const logger=winston.createLogger({
        level:"debug",
        format:winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.json()
        ),
        transports:[
            new winston.transports.Console({}),
            new winston.transports.File({
                filename:"application.log"
            })
       ]
    });

    logger.info("Info Message");
    logger.warn("Hello Message");
    logger.error("Error Message");
});
