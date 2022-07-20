package evastudio.controllers;


import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import evastudio.kafka.JsonKafkaProducer;
import evastudio.payload.KafkaMessage;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/kafka")
public class JsonMessageController {
    private JsonKafkaProducer kafkaProducer;

    @JsonCreator
    public JsonMessageController(JsonKafkaProducer kafkaProducer) {
        this.kafkaProducer = kafkaProducer;
    }

    @PostMapping("/publish")
    public ResponseEntity<String> publish(@RequestBody KafkaMessage kafkaMessage) throws JsonProcessingException {
        kafkaProducer.sendMessage(kafkaMessage);
        return null;
    }
}

