import Link from "next/link";

export default function Header() {
	return (
		<nav className="grid grid-cols-1 w-full">
			<Link href="/">Home</Link>
			<Link href="/publish">Publicar</Link>
		</nav>
	);
}
