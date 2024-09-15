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
		<aside className="-ml-[8px] mb-16 tracking-tight">
			<div className="lg:sticky lg:top-20">
				<nav
					className="flex flex-row items-center justify-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
					id="nav"
				>
					<div className="flex flex-row space-x-0 pr-10">
						{Object.entries(navItems).map(([path, { name, openInNewTab }]) => {
							return (
								<a
									key={path}
									href={path}
									target={openInNewTab ? "_blank" : "_self"} // Open in new tab or the same tab
									rel={openInNewTab ? "noopener noreferrer" : undefined} // Add security attributes for new tab
									className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
								>
									{name}
								</a>
							);
						})}
					</div>
				</nav>
			</div>
		</aside>
	);
}
