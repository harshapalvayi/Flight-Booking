package com.flight.flight.controllers;

import com.flight.flight.dto.FlightDto;
import com.flight.flight.entities.Users;
import com.flight.flight.models.AuthenticationResponse;
import com.flight.flight.models.MessageResponse;
import com.flight.flight.models.Signup;
import com.flight.flight.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Date;
import java.util.List;

@CrossOrigin(origins="http://localhost:4500")
@RestController
@RequestMapping(value = "/api/flights")
public class FlightController {

    @Autowired
    private FlightService flightService;

    @GetMapping(value = "/all")
    public List<FlightDto> getAllFlights() throws IOException {
        return this.flightService.getAllFlights();
    }

}
