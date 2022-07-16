package evaStudio.config.controllers;

import evaStudio.config.KafkaTopicConfig;
import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.kafka.config.TopicBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/topics")
public class TopicController {

    private KafkaTopicConfig topicCreator;
    private String newTopic;

    @NewTopic
    public TopicController(KafkaTopicConfig topicCreator) {
        this.topicCreator = topicCreator;
    }

    @PostMapping("/create")
    public ResponseEntity<String> newtopic (@RequestBody Topic newTopic) {
        public NewTopic newTopic() {
            return TopicBuilder.name(newTopic)
                    .build();
        }
        return ResponseEntity.ok("New topic created");
    }
}