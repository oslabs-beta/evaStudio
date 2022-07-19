package evastudio.controllers;


import evastudio.KafkaTopicConfig;
import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.config.TopicBuilder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/topics")

public class TopicController {
    private KafkaTopicConfig topicCreator;
    private String newTopic;

    public TopicController(KafkaTopicConfig topicCreator){
        this.topicCreator = topicCreator;
    }

    //    @GetMapping("/create")
//    public ResponseEntity<String> publish(@RequestParam("message") String message) {
//        kafkaProducer.sendMessage(message);
//        return ResponseEntity.ok("New Topic");
//    }

    @PostMapping("/create")
    public ResponseEntity<String> newTopic (@RequestBody String topicname){
        // this.newTopic = TopicBuilder.name(topicname).build();
        NewTopic newTopic = TopicBuilder.name(topicname).build();
        return ResponseEntity.ok("New topic created");
    }
}
