package net.javaguides.springboot.config.controllers;

import net.javaguides.springboot.config.kafka.KafkaConsumer;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.annotation.KafkaListener;
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
//    @KafkaListener(topics = "javaguides", groupId = "myGroup")
    public ResponseEntity<String> data(@RequestParam("javaguides") String javaguides) {
        return ResponseEntity.ok("Data sent to server");
    }

}

//findall
//@RequestParam("data") String data
//    @GetMapping("/hello")
//    ResponseEntity<String> hello() {
//        return new ResponseEntity<>("Hello World!", HttpStatus.OK);
//    }
