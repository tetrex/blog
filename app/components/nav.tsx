import Link from "next/link";

interface NavItem {
	name: string;
	openInNewTab: boolean;
}

const navItems: { [key: string]: NavItem } = {
	"/": {
		name: "home",
		openInNewTab: false,
	},
	"/blog": {
		name: "blog",
		openInNewTab: false,
	},
	"/harsh_rawat_resume_2023.pdf": {
		name: "resume",
		openInNewTab: true,
	},
};

export function Navbar() {
	return (
		<header className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 pt-5 w-1/2 min-w-[300px] max-w-[576px]">
			<nav
				className="backdrop-blur-md bg-white/10 rounded-xl shadow-lg px-6 py-2"
				id="nav"
				aria-label="Main navigation"
			>
				<ul className="flex flex-row items-center justify-center space-x-4 list-none m-0 p-0">
					{Object.entries(navItems).map(([path, { name, openInNewTab }]) => {
						const isExternalLink = path.startsWith("http") || openInNewTab;

						return (
							<li key={path}>
								{isExternalLink ? (
									<a
										href={path}
										target="_blank"
										rel="noopener noreferrer"
										className="transition-all hover:text-gray-300 flex align-middle relative py-1 px-3 rounded-full bg-white/5 hover:bg-white/10 capitalize text-sm"
									>
										{name}
									</a>
								) : (
									<Link
										href={path}
										className="transition-all hover:text-gray-300 flex align-middle relative py-1 px-3 rounded-full bg-white/5 hover:bg-white/10 capitalize text-sm"
									>
										{name}
									</Link>
								)}
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}
