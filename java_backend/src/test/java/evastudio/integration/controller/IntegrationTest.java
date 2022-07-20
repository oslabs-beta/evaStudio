package evastudio.integration.controller;

import evastudio.kafka.KafkaConsumer;
import evastudio.kafka.KafkaProducer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.kafka.test.context.EmbeddedKafka;
import org.springframework.test.annotation.DirtiesContext;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
@DirtiesContext
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
