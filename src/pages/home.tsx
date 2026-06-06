import {
	faGithubSquare,
	faInstagramSquare,
	faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lazy } from "preact/compat";

import Headline from "../components/headline";

const NovaGlobe = lazy(() => import("../components/nova-globe"));

const visitsBadge = `https://visits.github.marvin.digital/api/image.svg?theme=mosaic&color=%23ff2aa7${
	import.meta.env.DEV ? "&debug=true" : ""
}`;

export default function HomePage() {
	return (
		<>
			<NovaGlobe />

			<section className="container">
				<h1 className="mt-8 text-secondary-900 select-none sm:mt-20 md:mt-32">
					<Headline className="not-sr-only fixed top-0 left-[110%] w-[83vh] origin-top-left rotate-90 sm:relative sm:left-auto sm:w-[98vw]! sm:min-w-250! sm:rotate-0" />
					<span className="sr-only">MARVIN</span>
				</h1>
			</section>

			<section className="container mt-12">
				<div className="text-4xl text-secondary-200 opacity-30">
					<ul className="flex list-none gap-x-6">
						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								className="transition-colors hover:text-secondary-400"
								href="https://github.com/muuvmuuv"
								aria-label="GitHub profile"
							>
								<FontAwesomeIcon className="w-auto!" icon={faGithubSquare} />
							</a>
						</li>
						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								className="transition-colors hover:text-secondary-400"
								href="https://twitter.com/muuvmuuv"
								aria-label="X (Twitter) profile"
							>
								<FontAwesomeIcon className="w-auto!" icon={faSquareXTwitter} />
							</a>
						</li>
						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								className="transition-colors hover:text-secondary-400"
								href="https://instagram.com/the_marvin17"
								aria-label="Instagram profile"
							>
								<FontAwesomeIcon className="w-auto!" icon={faInstagramSquare} />
							</a>
						</li>
					</ul>
				</div>
			</section>

			<section className="container mt-10">
				<a href="https://muuvmuuv.goatcounter.com">
					<img src={visitsBadge} alt="My page visits" className="h-10" />
				</a>
			</section>
		</>
	);
}
