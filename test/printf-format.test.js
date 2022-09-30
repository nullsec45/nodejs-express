import winston from "winston";

test("logging with printf format", () =>{
    const logger=winston.createLogger({
        level:"debug",
        format:winston.format.printf(info =>{
            return `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`;
        }),
        transports:[
            new winston.transports.Console({})
       ]
    });

    logger.error("Error Message");
    logger.warn("Warn Message");
    logger.info("Info Messsage");
    logger.http("HTTP Message");
    logger.verbose("Verbose Message");
    logger.debug("Debug Message");
    logger.silly("Silly Message");
});
