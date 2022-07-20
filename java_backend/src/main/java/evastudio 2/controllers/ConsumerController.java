package evastudio.controllers;

import evastudio.kafka.KafkaConsumer;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1/kafka")

public class ConsumerController {

    private KafkaConsumer kafkaConsumer;

    public ConsumerController(KafkaConsumer kafkaConsumer){this.kafkaConsumer = kafkaConsumer;}

    @GetMapping("/data")
//    @KafkaListener(topics = "httpTopic", groupId = "http")
    public ResponseEntity<String> data(@RequestParam("topic") String topic) {
        return ResponseEntity.ok("Data sent to server");
    }

}

//findall
//@RequestParam("data") String data
//    @GetMapping("/hello")
//    ResponseEntity<String> hello() {
//        return new ResponseEntity<>("Hello World!", HttpStatus.OK);
//    }
