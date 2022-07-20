package evastudio.kafka;

import com.fasterxml.jackson.core.JsonProcessingException;
import evastudio.payload.KafkaMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;

@Service
public class JsonKafkaProducer {

    private static final Logger LOGGER = LoggerFactory.getLogger(JsonKafkaProducer.class);
    private KafkaTemplate<String, String> kafkaTemplate;

    public JsonKafkaProducer(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void sendMessage(KafkaMessage data) throws JsonProcessingException {

        LOGGER.info(String.format("Message sent to -> %s", data.toString()));

        ObjectWriter writer = new ObjectMapper().writer().withDefaultPrettyPrinter();
        String jsonData = writer.writeValueAsString(data);

        // Message<String> message = MessageBuilder
        // .withPayload(jsonData)
        // .setHeader(KafkaHeaders.TOPIC, "jsonTopic")
        // .build();

        kafkaTemplate.send("jsonTopic", jsonData);
    }

    public KafkaTemplate<String, String> getKafkaTemplate() {
        return kafkaTemplate;
    }

    public void setKafkaTemplate(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }
}
