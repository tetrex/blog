import { BlogPosts } from "app/components/posts";
import { Projects } from "./components/projects";
export default function Page() {
	return (
		<section>
			<h1 className="mb-8 text-2xl font-semibold tracking-tighter">
				My Portfolio
			</h1>
			<p className="mb-4">
				I’m Harsh Rawat, a Golang and Node.js enthusiast with a strong
				background in NoSQL and SQL databases. I’m passionate about distributed
				computing and parallel processing, and my experience spans blockchain,
				REST, WebSocket, and microservices. I thrive on exploring diverse
				technologies and tackling complex challenges.
			</p>
			<hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
			<h1 className="mb-2 text-2xl font-semibold tracking-tighter">
				My Projects
			</h1>
			<div className="my-8">
				<Projects />
			</div>
			<hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
			<h1 className="mb-8 text-2xl font-semibold tracking-tighter">My Blogs</h1>
			<div className="my-8">
				<BlogPosts />
			</div>
		</section>
	);
}
