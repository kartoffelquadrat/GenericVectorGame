package eu.kartoffelquadrat.genericvectorgame.controller;

import eu.kartoffelquadrat.asyncrestlib.BroadcastContent;
import eu.kartoffelquadrat.asyncrestlib.BroadcastContentManager;
import eu.kartoffelquadrat.asyncrestlib.ResponseGenerator;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.async.DeferredResult;

import java.util.Arrays;
import java.util.List;
import java.util.Collections;

@RestController
public class AnimalController {

    BroadcastContentManager<AnimalState> animalState;
    @Value("${long.poll.timeout}")
    private long longPollTimeout;
    private List<String> animals;

    public AnimalController() {
        animals = Arrays.asList(new String[]{"Fox", "Koala", "Raccoon", "Squid", "Turtle", "Unicorn", "Zebra"});
        animalState = new BroadcastContentManager(new AnimalState(getRandomPossiblyDuplicate()));
    }

    /**
     * Debug resource, returns list of all animals at: "http://127.0.0.1:8080/gvg/animals"
     *
     * @return
     */
    @GetMapping("animals")
    public List<String> getAllAnimals() {
        return animals;
    }

    /**
     * Hybrid endpoint. If no hash provided returns the current animal state right away. If a hash was provided this
     * toggles long poll mode where the next state in only communicated on state change or timeout, whatever comes
     * first. To test the hash endpoing, just retrieve the result and then compute the MD5 of the result like so:
     * md5 -s '{"animal":"Koala","empty":false}' => 2a803a398693ea404a1bd9b1c8e1ac54
     *
     * @param hash as the current MD5 hash of the client sided state. Long poll is onluy enables if the client already
     *             is up to date (the client MD5 matches the MD5 of the state on server side).
     * @return a random animal as string
     */
    @GetMapping("/animals/animal")
    public DeferredResult<ResponseEntity<String>> getAnimal(@RequestParam(required = false) String hash) {

        // In case a hash was provided, switch for long polling mode
        if (hash == null || hash.isBlank())
            // set hash to something definitely different so the mismatch mechanism is auto triggered.
            hash = "DIFFERENT";

        return ResponseGenerator.getHashBasedUpdate(longPollTimeout, animalState, hash);
    }

    /**
     * Calling this method changes the current animal to a random, guaranteed different other animal. All potential long
     * poll subscribers will be unblocked.
     */
    @PostMapping("/animals/animal")
    public void randomizeAnimal() {

        String newAnimal = animalState.getCurrentBroadcastContent().getAnimal();
        while (animalState.getCurrentBroadcastContent().getAnimal().equals(newAnimal)) {
            newAnimal = getRandomPossiblyDuplicate();
        }
        animalState.updateBroadcastContent(new AnimalState(newAnimal));
    }

    private String getRandomPossiblyDuplicate() {
        Collections.shuffle(animals);
        return animals.get(0);
    }

}


