package evastudio.config;
import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.kafka.config.TopicBuilder;

@Configuration
@Profile("local")
public class KafkaTopicConfig {

    @Bean
    public NewTopic httpTopic() {
        return TopicBuilder.name("httpTopic")
                .partitions(3)
                .replicas(3)
                .build();
    }

    @Bean
      public NewTopic jsonTopic() {
            return TopicBuilder.name("jsonTopic")
                    .partitions(3)
                    .replicas(3)
                    .build();
        }


}