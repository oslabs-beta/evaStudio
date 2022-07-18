package evaStudio.config;
import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.TopicBuilder;

@Configuration
public class KafkaTopicConfig {
    @Bean
    public NewTopic httpRequest() {
        return TopicBuilder.name("httpRequest")
                .build();
    }

    @Bean
      public NewTopic jsonMessage() {
            return TopicBuilder.name("jsonMessage")
                    .build();
        }


}