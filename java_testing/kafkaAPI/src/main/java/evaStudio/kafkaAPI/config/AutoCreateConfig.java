package evaStudio.kafkaAPI.config;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Profile;
import org.springframework.kafka.config.TopicBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;


@Configuration
@Profile("local")
public class AutoCreateConfig {
    @Bean
    public NewTopic events() {
        TopicBuilder.name("events")
                .partitions(3)
                .replicas(3)
                .build();
        return null;
    }
}
