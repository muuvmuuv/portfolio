import {
	faGithubSquare,
	faInstagramSquare,
	faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lazy } from "preact/compat";
import Headline from "../components/headline";

const NovaGlobe = lazy(() => import("../components/nova-globe"));

export default function HomePage() {
	return (
		<>
			<NovaGlobe />

			<section className="container">
				<h1 className="text-secondary-900 select-none mt-8 sm:mt-20 md:mt-32">
					<Headline className="not-sr-only fixed sm:relative top-0 left-[110%] sm:left-auto origin-top-left rotate-90 sm:rotate-0 sm:w-[98vw]! sm:min-w-250! w-[83vh]" />
					<span className="sr-only">MARVIN</span>
				</h1>
			</section>

			<section className="container">
				<div className="mt-12 text-secondary-200 opacity-30 text-4xl">
					<ul className="list-none flex gap-x-6">
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
		</>
	);
}
