package evastudio.kafka;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
//import jdk.internal.org.jline.utils.Log;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaProducer {
    ObjectMapper objectMapper;
    private static final Logger LOGGER = (Logger) LoggerFactory.getLogger(KafkaProducer.class);

    private org.springframework.kafka.core.KafkaTemplate <String, String> kafkaTemplate = null;
    private Exception ex;

    // Constructor
    public KafkaProducer (KafkaTemplate<String, String> kafkaTemplate, ObjectMapper objectMapper) {

        this.kafkaTemplate = kafkaTemplate;
        this.objectMapper = objectMapper;
    }

    public void sendMessage(String message) throws JsonProcessingException {

        LOGGER.info(String.format("Message sent %s", message));
        kafkaTemplate.send("httpTopic", message);

        // ListenableFuture<SendResult<Integer, String>> listenableFuture =  kafkaTemplate.sendDefault(message);
    }
//    private void handleFailure(Integer key, String value) {
//        try {
//            Log.error("Error Sending the Message. This is the exception: {}", ex.getMessage());
//        } catch (Throwable throwable) {
//            Log.error("Error is OnFailure: {}", throwable.getMessage());
//        }
//    }
//
//   private void handleSuccess(Integer key, String value) {
//     Log.info("Message Sent SuccessFully for the key : {} and the value is {}", key, value); }
}
