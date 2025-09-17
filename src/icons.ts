import { library ,config} from "@fortawesome/fontawesome-svg-core";
import {
	faGithubSquare,
	faInstagramSquare,
	faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(faGithubSquare, faSquareXTwitter, faInstagramSquare);

config.familyDefault = "classic";
config.styleDefault = "regular";

