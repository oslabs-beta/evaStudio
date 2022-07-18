package evaStudio.config.controllers;

import com.fasterxml.jackson.annotation.JsonCreator;
import evaStudio.config.kafka.JsonKafkaProducer;
import evaStudio.config.payload.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/kafka")
public class JsonMessageController {
    private JsonKafkaProducer kafkaProducer;

    @JsonCreator
    public JsonMessageController(JsonKafkaProducer kafkaProducer) {
        this.kafkaProducer = kafkaProducer;
    }

    @PostMapping("/publish")
    public ResponseEntity<String> publish (@RequestBody User user) {
        kafkaProducer.sendMessage(user);
        return ResponseEntity.ok("Json Message sent to kafka topic");
    }
}
