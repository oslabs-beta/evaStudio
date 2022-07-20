package evastudio.integration.controller;

import evastudio.kafka.KafkaConsumer;
import evastudio.kafka.KafkaProducer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.kafka.test.context.EmbeddedKafka;
import org.springframework.test.annotation.DirtiesContext;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest

// Tells Spring that the application context created as part of this test is dirty and should be cleared after the test is finished
@DirtiesContext

// Provides an in-memory Kafka instance in Spring-based tests, and creates an instance of EmbeddedKafkaBroker bean that can be injected and used in tests
@EmbeddedKafka(partitions = 2, brokerProperties = {"listeners=PLAINTEXT:localhost:9092", "port=9092"})

public class IntegrationTest {

    @Autowired
    private KafkaConsumer consumer;

    @Autowired
    private KafkaProducer producer;

    @Value("${test.topic}")
    private String topic;

    public void givenEmbeddedKafkaBroker()
        throws Exception {
        String data = "Testing with KafkaProducer";
        producer.sendMessage(topic);

        boolean messageConsumed = consumer.consume();
        assertTrue(messageConsumed);
    }
}