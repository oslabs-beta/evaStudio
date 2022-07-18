package evaStudio.kafkaAPI;

import evaStudio.kafkaAPI.domain.Event;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class KafkaApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(KafkaApiApplication.class, args);
	}

	public static void sendEvent(Event event) {
	}
}
