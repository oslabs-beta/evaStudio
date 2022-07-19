package evastudio.controllers;

import evastudio.kafka.KafkaConsumer;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collections;


@RestController
@RequestMapping("/api/v1/kafka")

public class ConsumerController {

    private KafkaConsumer kafkaConsumer;

    public ConsumerController(KafkaConsumer kafkaConsumer){this.kafkaConsumer = kafkaConsumer;}

//     public ResponseEntity<String> data(@RequestParam("topic") String topic) {
//         return ResponseEntity.ok("Data sent to server");
//     }
       @GetMapping("/consume")
    public ResponseEntity<String> data() {
        final KafkaConsumer<String, String> consumer = new kafkaConsumer<>();

       consumer.subscribe(Collections.singletonList(TOPIC));
       return ResponseEntity.ok("Data sent to server");

       final ConsumerRecords<Long, String> consumerRecords = consumer.poll(numMessages);

       final ConsumerRecords<String, String>
    }

}

