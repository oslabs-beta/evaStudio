package evaStudio.kafkaAPI.controller;

import evaStudio.kafkaAPI.domain.Event;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EventsController {

    @PostMapping("/v1/event")
    public ResponseEntity<Event> postEvent(@RequestBody Event event) {
        return ResponseEntity.status(HttpStatus.CREATED).body(event);
    }
}
