import winston from "winston";

const logger=winston.createLogger({
    level:"info",
    transports:[
        new winston.transports.Console({}),
        new winston.transports.File({
            handleExceptions:true,
            handleRejections:true,
            filename:"src/rejection.log"
        })
    ]
});


async function callAsync(){
    return Promise.reject("Ups");
}

callAsync();