package com.flight.flight.repository;

import com.flight.flight.entities.Flight;
import com.flight.flight.entities.Users;
import com.flight.flight.models.Locations;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Repository
public interface FlightRepository extends CrudRepository<Flight, Integer> {

    List<Flight> findAllBy();

    List<Flight> findAllByFromLocationAndToLocation(Locations fromLocation, Locations toLocation);

}
