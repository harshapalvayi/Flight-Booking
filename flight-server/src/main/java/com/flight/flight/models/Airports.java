package com.flight.flight.models;

public class Airports {

    private Integer value;
    private Locations locations;

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    public Locations getLocations() {
        return locations;
    }

    public void setLocations(Locations locations) {
        this.locations = locations;
    }

    public Airports(Integer value, Locations locations) {
        this.value = value;
        this.locations = locations;
    }
}
