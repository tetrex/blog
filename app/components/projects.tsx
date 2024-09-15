import Link from "next/link";
import { formatDate, getProjects } from "app/blog/utils";
import { ArrowIcon } from "./footer";

export function Projects() {
	let allBlogs = getProjects();

	return (
		<div>
			{allBlogs
				.sort((a, b) => {
					if (
						new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
					) {
						return -1;
					}
					return 1;
				})
				.map((post) => (
					<div className="flex flex-row justify-between pr-2">
						<Link
							key={`project-${post.slug}`}
							className="flex flex-col space-y-1 mb-4"
							href={`/blog/${post.slug}`}
						>
							<div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
								<p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
									{formatDate(post.metadata.publishedAt, false)}
								</p>
								<p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
									{post.metadata.title}
								</p>
							</div>
						</Link>

						<Link
							key={`project-link-${post.slug}`}
							className="flex flex-row space-y-1 mb-4 justify-center items-center hover:text-blue-500 hover:underline"
							target="_blank"
							href={
								post.metadata.projectGithubLink
									? post.metadata.projectGithubLink
									: "https://github.com/tetrex"
							}
						>
							<ArrowIcon />
							<p className="ml-2 h-7">view source</p>
						</Link>
					</div>
				))}
		</div>
	);
}
