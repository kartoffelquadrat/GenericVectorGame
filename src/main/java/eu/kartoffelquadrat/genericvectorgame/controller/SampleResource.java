package eu.kartoffelquadrat.genericvectorgame.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.Collections;

@RestController
public class SampleResource {

    private List<String> animals;
    private String lastAnimal = "";

    public SampleResource() {
        animals = Arrays.asList(new String[]{"Fox", "Koala", "Raccoon", "Squid", "Turtle", "Unicorn", "Zebra"});
    }

    /**
     * Debug resource, returns list of all animals at: "http://127.0.0.1:8080/gvg/animals"
     * @return
     */
    @GetMapping("animals")
    public List<String> getAllAnimals() {
        return animals;
    }

    /**
     * Returns a random animal of the list by shuffling it and then retrieving the first entry. Send an HTTP GET request
     * to "http://127.0.0.1:8080/gvg/animals/animal" Note: The returned animal is guaranteed different than the one
     * returned in the previous request.
     *
     * @return a random animal as string
     */
    @GetMapping("/animals/animal")
    public String getAnimal() {

        String newAnimal = lastAnimal;
        while (lastAnimal.equals(newAnimal)) {
            newAnimal = getRandomPossiblyDuplicate();
        }
        lastAnimal = newAnimal;
        return newAnimal;

    }

    private String getRandomPossiblyDuplicate() {
        Collections.shuffle(animals);
        return animals.get(0);
    }

}


