package evastudio.kafka;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.stereotype.Service;
import com.fasterxml.jackson.databind.ObjectMapper;
@Service
public class KafkaProducer {

    private static final Logger LOGGER = (Logger) LoggerFactory.getLogger(KafkaProducer.class);

    private final org.springframework.kafka.core.KafkaTemplate <String, String> kafkaTemplate;

    public KafkaProducer (KafkaTemplate<String, String> kafkaTemplate) {

        this.kafkaTemplate = kafkaTemplate;
    }

    public <onFailure> void sendMessage(String message){
        ObjectMapper objectMapper;
//        String value = objectMapper.writeValueAsString(Message);

        LOGGER.info(String.format("Message sent %s", message));
        kafkaTemplate.send("httpTopic", message);

//        private onFailure Object Object Integer;
//        java.lang.Object integer = Integer;
//        Integer Integer key;
//        Object String;
//        key, String Object Throwable;
//        value, Throwable Object ex;
//        Object ex1 = ex;) {
//            handleFailure(key, value);
//        }
//
//        private onSuccess Object SendResult;
//        Object result = null;
//        (SendResult Integer, String result) {
//            handleSuccess(key, value, result);
//        }
    }

//    private void handleFailure(Integer key, String value) {
//        ch.qos.logback.classic.Logger log;
//        log.error("Error Sending the Message. This is the exception: {}", ex.getMessage());
//        try {
//            throw ex;
//        } catch (Throwable throwable) {
//            log.error("Error is OnFailure: {}", throwable.getMessage());
//        }
//    }
//
//    private void handleSuccess(Integer key, String value, Throwable ex) {
//        SendResult<Object, Object> result;
//        log.info("Message Sent SuccessFully for the key : {} and the value is {} , partition is {}", key, value, result.getRecordMetadata().partition());
//    }
}
