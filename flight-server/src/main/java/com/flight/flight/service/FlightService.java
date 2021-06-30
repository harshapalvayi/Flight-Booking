package com.flight.flight.service;

import com.flight.flight.dto.FlightDto;
import com.flight.flight.dto.SearchFlightDto;
import com.flight.flight.entities.Flight;
import com.flight.flight.models.AirlineTypes;
import com.flight.flight.models.Airlines;
import com.flight.flight.models.Airports;
import com.flight.flight.models.Locations;
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

    public List<FlightDto> searchFlights(SearchFlightDto searchDto) throws IOException {
        List<FlightDto> flightList = new ArrayList<>();
        List<Flight> flights = flightRepository
                .findAllByFromLocationAndToLocation(searchDto.getFromLocation(), searchDto.getToLocation());
        if (flights.size() > 0) {
            getFlights(flightList, flights);
        }
        return flightList;
    }

    public void addFlight(FlightDto  flightDto) throws IOException {
         Flight flight = new Flight();
         flight.setAirlineId(flightDto.getAirlineId());
         flight.setAirlineName(flightDto.getAirlineName());
         flight.setFromLocation(flightDto.getFromLocation());
         flight.setToLocation(flightDto.getToLocation());
         flight.setSeats(flightDto.getSeats());
         flight.setDeptDate(flightDto.getDeptDate());
         flight.setReturnDate(flightDto.getReturnDate());

         flightRepository.save(flight);
    }

    public List<Airlines> getAirlines() throws IOException {
        List<Airlines> airlines = new ArrayList<>();
        Airlines aa = new Airlines(0, AirlineTypes.AMERICAN_AIRLINES);
        Airlines ua = new Airlines(1, AirlineTypes.UNITED_AIRLINES);
        Airlines da = new Airlines(2, AirlineTypes.DECCAN_AIRLINES);
        Airlines ai = new Airlines(3, AirlineTypes.AIR_INDIA);
        Airlines sa = new Airlines(4, AirlineTypes.SPIRIT_AIRLINES);
        Airlines qa = new Airlines(5, AirlineTypes.QATAR_AIRLINES);

        airlines.add(aa);
        airlines.add(ua);
        airlines.add(da);
        airlines.add(ai);
        airlines.add(sa);
        airlines.add(qa);
        return airlines;
    }

    public List<Airports> getAirports() throws IOException {
        List<Airports> airports = new ArrayList<>();
        Airports bom = new Airports(0, Locations.BOM);
        Airports cal = new Airports(1, Locations.CAL);
        Airports del = new Airports(2, Locations.DEL);
        Airports cvg = new Airports(3, Locations.CVG);
        Airports hyd = new Airports(4, Locations.HYD);

        airports.add(bom);
        airports.add(cal);
        airports.add(del);
        airports.add(cvg);
        airports.add(hyd);
        return airports;
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
            flightDto.setDeptDate(flight.getDeptDate());
            flightDto.setReturnDate(flight.getReturnDate());
            flightDto.setSeats(flight.getSeats());
            flightDtos.add(flightDto);
        }
    }

}
