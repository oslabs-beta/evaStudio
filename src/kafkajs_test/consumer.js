const { Kafka } = require('kafkajs');

// kafka client
const kafka = new Kafka({
    clientId: 'testapp',
    brokers: ['localhost:9092']
}); 

const producerRun = async () => {
  // kafka producer
  const producer = kafka.producer();

  await producer.connect();

  await producer.send({ 
    topic: 'first_topic',
    messages: [
        { 
            value: 'first Nodejs message',
        },
    ]
  });

  await producer.disconnect();
}

const startConsumer = async () => {
    const consumer = kafka.consumer({ groupId: 'group1'});

    await consumer.connect();
    await consumer.subscribe({topic: 'first_topic', fromBeginning: true});

    await consumer.run({
        eachMessage: ({ topic, partition, message }) => {
            console.log({
                value: message.value.toString(),
            })
        }
    })
}

producerRun().then(() => {
    startConsumer();
});