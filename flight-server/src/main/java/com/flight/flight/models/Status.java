package com.flight.flight.models;

public enum Status {
    SUCCESS,
    FAILURE,
    NOT_FOUND,
    INVALID_REQUEST;

    Status() { }

    public String value() {
        return this.name();
    }
}
