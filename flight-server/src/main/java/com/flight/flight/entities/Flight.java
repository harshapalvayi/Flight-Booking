package com.flight.flight.entities;

import com.flight.flight.models.AirlineTypes;
import com.flight.flight.models.Locations;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Date;

@Entity
public class Flight {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long flightId;

    private String airlineId;

    private AirlineTypes airlineName;

    private Locations fromLocation;

    private Locations toLocation;

    private Date deptDate;

    private Date returnDate;

    private Integer seats;

    public long getFlightId() {
        return flightId;
    }

    public void setFlightId(long flightId) {
        this.flightId = flightId;
    }

    public String getAirlineId() {
        return airlineId;
    }

    public void setAirlineId(String airlineId) {
        this.airlineId = airlineId;
    }

    public AirlineTypes getAirlineName() {
        return airlineName;
    }

    public void setAirlineName(AirlineTypes airlineName) {
        this.airlineName = airlineName;
    }

    public Locations getFromLocation() {
        return fromLocation;
    }

    public void setFromLocation(Locations fromLocation) {
        this.fromLocation = fromLocation;
    }

    public Locations getToLocation() {
        return toLocation;
    }

    public void setToLocation(Locations toLocation) {
        this.toLocation = toLocation;
    }

    public Integer getSeats() {
        return seats;
    }

    public void setSeats(Integer seats) {
        this.seats = seats;
    }

    public Date getDeptDate() {
        return deptDate;
    }

    public void setDeptDate(Date deptDate) {
        this.deptDate = deptDate;
    }

    public Date getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(Date returnDate) {
        this.returnDate = returnDate;
    }
}
