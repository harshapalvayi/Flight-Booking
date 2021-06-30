package com.flight.flight.dto;

import com.flight.flight.models.Locations;

import java.sql.Date;

public class SearchFlightDto {

    private Locations fromLocation;

    private Locations toLocation;

    private Date deptDate;

    private Date returnDate;

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
