package evaStudio.config.controllers;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import evaStudio.config.KafkaTopicConfig;
import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.kafka.config.TopicBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/topics")
public class TopicController {

    private KafkaTopicConfig topicCreator;
    private String newTopic;

    public TopicController(KafkaTopicConfig topicCreator) {
        this.topicCreator = topicCreator;
    }

//    @GetMapping("/topics")

    @PostMapping("/create")
    public ResponseEntity<String> newtopic (@RequestBody String topicname) {
        NewTopic topic = TopicBuilder.name(topicname).build();
        return ResponseEntity.ok("New topic created");
    }
}