package com.flight.flight.models;

public enum FromLocation {
    BOM("Mumbai Airport"),
    CVG("Cincinnati Airport"),
    HYD("Hyderabad Airport"),
    DEL("Delhi Airport"),
    CAL("California Airport");

    private final String name;

    private FromLocation(final String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
