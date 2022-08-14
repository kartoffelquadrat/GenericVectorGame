package eu.kartoffelquadrat.genericvectorgame.controller;

import eu.kartoffelquadrat.asyncrestlib.BroadcastContent;

public class AnimalState implements BroadcastContent {

    private String animal;

    public AnimalState(String animal) {
        this.animal = animal;
    }

    public String getAnimal() {
        return animal;
    }

    public void setAnimal(String animal) {
        this.animal = animal;
    }

    @Override
    public boolean isEmpty() {
        return animal.isBlank();
    }
}
