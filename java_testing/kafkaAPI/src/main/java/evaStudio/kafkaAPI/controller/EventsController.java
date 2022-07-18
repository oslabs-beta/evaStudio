package evaStudio.kafkaAPI.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import evaStudio.kafkaAPI.KafkaApiApplication;
import evaStudio.kafkaAPI.domain.Event;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EventsController {

    // getting internal server 500 error from posting events to this endpoint
    @PostMapping("/v1/event")
    public ResponseEntity<Event> postEvent(@RequestBody Event event) throws JsonProcessingException {
        KafkaApiApplication.sendEvent(event);
        return ResponseEntity.status(HttpStatus.CREATED).body(event);
    }
}
