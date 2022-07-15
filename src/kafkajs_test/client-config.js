const { Kafka, logLevel } = require('kafkajs');

// kafka client
const kafka = new Kafka({
    clientId: 'testapp',
    brokers: ['localhost:9092'],
    connectionTimeout: 3000,   // time in ms default value is 1000
    requestTimeone: 25000,   // default is 30000 ms
    retry: { 
        initialRetryTime: 100,
        retries: 8
    },
    logLevel: logLevel.INFO
}); 

kafka.logger() // for logging errors or warnings