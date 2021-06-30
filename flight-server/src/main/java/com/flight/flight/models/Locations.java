package com.flight.flight.models;

public enum Locations {

    BOM("Mumbai Airport"),
    CVG("Cincinnati Airport"),
    HYD("Hyderabad Airport"),
    DEL("Delhi Airport"),
    CAL("California Airport");

    private final String name;

    private Locations(final String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
