import { Link } from "react-router";

function Nebvar() {
  return (
    <ul className="ml-4 text-sm text-zinc-400 flex gap-8">
      <Link
        to="/"
        className="hover:text-zinc-200 font-medium text-zinc-200 cursor-pointer transition-all"
      >
        Create Image
      </Link>
      <Link
        to="/download"
        className="hover:text-zinc-200 cursor-pointer transition-all"
      >
        Downloaded
      </Link>
    </ul>
  );
}

export default Nebvar;
