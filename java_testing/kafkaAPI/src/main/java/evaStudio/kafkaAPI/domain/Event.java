package evaStudio.kafkaAPI.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.messaging.Message;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Event {
    private Integer eventId;
    private Message message;
}
