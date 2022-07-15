package net.javaguides.springboot.config.kafka;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaProducer {

    private static final Logger LOGGER = (Logger) LoggerFactory.getLogger(KafkaProducer.class);

    private final org.springframework.kafka.core.KafkaTemplate <String, String> kafkaTemplate;

    public KafkaProducer (KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void sendMessage(String message){

        LOGGER.info(String.format("Message sent %s", message));
        kafkaTemplate.send("javaguides", message);
    }
}
