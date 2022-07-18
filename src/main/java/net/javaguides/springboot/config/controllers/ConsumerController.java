package net.javaguides.springboot.config.controllers;

import net.javaguides.springboot.config.kafka.KafkaConsumer;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/kafka")
public class ConsumerController {

    private KafkaConsumer kafkaConsumer;

    public ConsumerController(KafkaConsumer kafkaConsumer){this.kafkaConsumer = kafkaConsumer;}

    @GetMapping("/data")
    public ResponseEntity<String> data(@RequestParam("message") String message) {
        return ResponseEntity.ok("Data sent to server");
    }

}

//findall
//@RequestParam("data") String data
//    @GetMapping("/hello")
//    ResponseEntity<String> hello() {
//        return new ResponseEntity<>("Hello World!", HttpStatus.OK);
//    }