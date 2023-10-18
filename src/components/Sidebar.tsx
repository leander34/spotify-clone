import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon /> Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search /> Search
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library />
          Your library
        </a>
      </nav>
      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This is Hugo&Guilherme
        </a>

        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Topnejo
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This is Cristiano Araújo
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Só moda xonada
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This is Gusttavo lima
        </a>

        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Churass.com
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This is Bruno&Marrone
        </a>
      </nav>
    </aside>
  );
}
