package com.mycompany.angularsp3.entities;

/**
 *
 * @author lucasmfredmark
 */
public class Car {
    private int id;
    private int year;
    private String registered;
    private String make;
    private String model;
    private String description;
    private int price;

    public Car(int id, int year, String registered, String make, String model, String description, int price) {
        this.id = id;
        this.year = year;
        this.registered = registered;
        this.make = make;
        this.model = model;
        this.description = description;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getRegistered() {
        return registered;
    }

    public void setRegistered(String registered) {
        this.registered = registered;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
