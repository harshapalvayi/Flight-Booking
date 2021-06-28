package com.flight.flight.models;

public enum ToLocation {

    BOM("Mumbai Airport"),
    CVG("Cincinnati Airport"),
    HYD("Hyderabad Airport"),
    DEL("Delhi Airport"),
    CAL("California Airport");

    private final String name;

    /**
     * @param name
     */
    private ToLocation(final String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
