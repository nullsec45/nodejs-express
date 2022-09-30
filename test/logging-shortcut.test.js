import winston from "winston";

test("logging shortcut", () =>{
    const logger=winston.createLogger({
        level:"debug",
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
