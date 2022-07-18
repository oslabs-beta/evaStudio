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
    private static Integer eventId;
    private Message message;


    public static Integer getEventId() {
        return eventId;
    }

    public void setEventId(Integer eventId) {
        Event.eventId = eventId;
    }

    public Message getMessage() {
        return message;
    }

    public void setMessage(Message message) {
        this.message = message;
    }
}
