package com.flight.flight.service;

import com.flight.flight.dto.FlightDto;
import com.flight.flight.entities.Flight;
import com.flight.flight.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class FlightService {

    @Autowired
    public FlightRepository flightRepository;


    public List<FlightDto> getAllFlights() throws IOException {
        List<FlightDto> flightList = new ArrayList<>();
        List<Flight> flights = flightRepository.findAllBy();
        if (flights.size() > 0) {
            getFlights(flightList, flights);
        }
        return flightList;
    }

    public void getFlights(List<FlightDto> flightDtos,
                             List<Flight> flightList) throws IOException {
        for (Flight flight : flightList) {
            FlightDto flightDto = new FlightDto();
            flightDto.setFlightId(flight.getFlightId());
            flightDto.setAirlineId(flight.getAirlineId());
            flightDto.setAirlineName(flight.getAirlineName());
            flightDto.setFromLocation(flight.getFromLocation());
            flightDto.setToLocation(flight.getToLocation());
            flightDto.setArvlTime(flight.getArvlTime());
            flightDto.setDeptTime(flight.getDeptTime());
            flightDtos.add(flightDto);
        }
    }

}
