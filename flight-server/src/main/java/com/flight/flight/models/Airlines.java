package com.flight.flight.models;

public class Airlines {

    private Integer value;
    private AirlineTypes airlines;

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    public AirlineTypes getAirlines() {
        return airlines;
    }

    public void setAirlines(AirlineTypes airlines) {
        this.airlines = airlines;
    }

    public Airlines(Integer value, AirlineTypes airlines) {
        this.value = value;
        this.airlines = airlines;
    }
}
