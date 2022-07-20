package evastudio.kafka;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumer {

    private static final Logger LOGGER = LoggerFactory.getLogger(KafkaConsumer.class);

    @KafkaListener(topics = "httpTopic", groupId = "http")
    public boolean consume(){
        LOGGER.info(String.format("Message received."));
        return true;
    }
}


//Logger: configures how messages are written, and by wich class.