package com.flight.flight.controllers;

import com.flight.flight.dto.FlightDto;
import com.flight.flight.dto.SearchFlightDto;
import com.flight.flight.models.*;
import com.flight.flight.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping(value = "/api/flights")
public class FlightController {

    @Autowired
    private FlightService flightService;

    @GetMapping(value = "/all")
    public List<FlightDto> getAllFlights() throws IOException {
        return this.flightService.getAllFlights();
    }

    @PostMapping(value = "/searchFlights")
    public List<FlightDto> findFlights(@RequestBody SearchFlightDto searchDto) throws IOException {
        return this.flightService.searchFlights(searchDto);
    }

    @PostMapping(value = "/addFlight")
    public ResponseEntity<?> addFlight(@RequestBody FlightDto flightDto) {
        try {
            flightService.addFlight(flightDto);
            return ResponseEntity.ok(MessageResponse.success());
        }
        catch(Exception e) {
            return ResponseEntity.badRequest().body(MessageResponse.failure(e));
        }
    }


    @GetMapping(value = "/airlines")
    public List<Airlines> getAirlines() throws IOException {
        return this.flightService.getAirlines();
    }

    @GetMapping(value = "/locations")
    public List<Airports> getLocations() throws IOException {
        return this.flightService.getAirports();
    }
}
