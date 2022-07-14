package net.javaguides.springboot.config.kafka;

import net.javaguides.springboot.config.payload.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class JsonKafkaConsumer {
    private static final Logger LOGGER = LoggerFactory.getLogger(JsonKafkaConsumer.class);

    @KafkaListener(topics = "javaguides_json", groupId = "myGroup")
    public void consumer(User user) {
        LOGGER.info(String.format("Json message received -> %s", user.toString()));
    }
}
