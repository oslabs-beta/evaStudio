package evastudio.kafka;

import evastudio.payload.KafkaMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class JsonKafkaConsumer {
    private static final Logger LOGGER = LoggerFactory.getLogger(JsonKafkaConsumer.class);

    @KafkaListener(topics = "jsonTopic", groupId = "myGroup")
    public void consumer(KafkaMessage kafkaMessage) {
        LOGGER.info(String.format("Json message received -> %s", kafkaMessage.toString()));
    }
}
