package com.flight.flight.entities;

import com.flight.flight.models.Airlines;
import com.flight.flight.models.FromLocation;
import com.flight.flight.models.ToLocation;

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

    private Airlines airlineName;

    private FromLocation fromLocation;

    private ToLocation   toLocation;

    private Date deptTime;

    private Date arvlTime;

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

    public Airlines getAirlineName() {
        return airlineName;
    }

    public void setAirlineName(Airlines airlineName) {
        this.airlineName = airlineName;
    }

    public FromLocation getFromLocation() {
        return fromLocation;
    }

    public void setFromLocation(FromLocation fromLocation) {
        this.fromLocation = fromLocation;
    }

    public ToLocation getToLocation() {
        return toLocation;
    }

    public void setToLocation(ToLocation toLocation) {
        this.toLocation = toLocation;
    }

    public Date getDeptTime() {
        return deptTime;
    }

    public void setDeptTime(Date deptTime) {
        this.deptTime = deptTime;
    }

    public Date getArvlTime() {
        return arvlTime;
    }

    public void setArvlTime(Date arvlTime) {
        this.arvlTime = arvlTime;
    }
}
