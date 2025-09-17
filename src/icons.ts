import { library ,config} from "@fortawesome/fontawesome-svg-core";
import {
	faGithubSquare,
	faInstagramSquare,
	faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

library.add(faGithubSquare, faTwitterSquare, faInstagramSquare);

config.familyDefault = "classic";
config.styleDefault = "regular";
config.autoA11y = true

