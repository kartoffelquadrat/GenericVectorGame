package eu.kartoffelquadrat.genericvectorgame.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Non-REST controller that maps GET requests at specific locations to the game landing web page.
 *
 * @Author: Maximilian Schiedermeier
 * @Date: July 2022
 */
@Controller
public class WebController {

    /**
     * WEB-UI endpoint to retrieve a webpage that then dynamically loads game data from other game-server endpoints.
     * Redirects to the board.html resources.
     *
     * @return HTML code of a webclient.
     */
    @RequestMapping("/board")
    public String getLandingPage() {
        return "board";
    }

    @RequestMapping("/bu")
    public String getBackupLandung() {
        return "bu";
    }
}
