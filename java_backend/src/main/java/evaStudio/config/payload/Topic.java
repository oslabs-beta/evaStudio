package evaStudio.config.payload;
import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.kafka.config.TopicBuilder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

//@RestController
//class Topic {
//    private String topic_name;


//    Topic() {String topic_name} {
//        this.topic_name = topic_name;
//    }

//    @GetMapping("/topics");
//    public String getTopic_name() {
//        return topic_name;
//    }
//
//    @PostMapping("/topics");
//    public void setTopic_name(String topic_name) {
//        this.topic_name = topic_name;
//    }
//}
