import winston from "winston";

test("logging with combine format", () =>{
    const logger=winston.createLogger({
        level:"debug",
        format:winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.json()
        ),
        transports:[
            new winston.transports.Console({})
       ]
    });

    logger.info("Info Message");
    logger.warn("Hello Message");
    logger.error("Error Message");
});
