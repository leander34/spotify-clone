import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import {
  Home as HomeIcon,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import Image from "next/image";
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="p-1 rounded-full bg-black/40">
              <ChevronLeft />
            </button>

            <button className="p-1 rounded-full bg-black/40">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group"
            >
              <Image
                src="/album.webp"
                width={104}
                height={104}
                alt="Capa do álbum no pelo 1"
              />

              <strong>No pelo 1</strong>
              <button className="w-12 h-12 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group"
            >
              <Image
                src="/album.webp"
                width={104}
                height={104}
                alt="Capa do álbum no pelo 1"
              />
              <strong>No pelo 1</strong>

              <button className="w-12 h-12 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group"
            >
              <Image
                src="/album.webp"
                width={104}
                height={104}
                alt="Capa do álbum no pelo 1"
              />
              <strong>No pelo 1</strong>
              <button className="w-12 h-12 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group"
            >
              <Image
                src="/album.webp"
                width={104}
                height={104}
                alt="Capa do álbum no pelo 1"
              />
              <strong>No pelo 1</strong>
              <button className="w-12 h-12 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group"
            >
              <Image
                src="/album.webp"
                width={104}
                height={104}
                alt="Capa do álbum no pelo 1"
              />
              <strong>No pelo 1</strong>
              <button className="w-12 h-12 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button>
            </a>
          </div>

          <h1 className="font-semibold text-3xl mt-10">
            Made for Leander Silveira Santos
          </h1>

          <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                src="/album.webp"
                width={120}
                height={120}
                className="w-full flex-shrink-0"
                alt="Capa do álbum no pelo 1"
              />

              <strong className="font-semibold">No pelo 1</strong>
              <span className="text-sm text-zinc-500">Dailt Mix 1</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                src="/album.webp"
                width={120}
                height={120}
                className="w-full flex-shrink-0"
                alt="Capa do álbum no pelo 1"
              />

              <strong className="font-semibold">No pelo 1</strong>
              <span className="text-sm text-zinc-500">Dailt Mix 1</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                src="/album.webp"
                width={120}
                height={120}
                className="w-full flex-shrink-0"
                alt="Capa do álbum no pelo 1"
              />

              <strong className="font-semibold">No pelo 1</strong>
              <span className="text-sm text-zinc-500">Dailt Mix 1</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image
                src="/album.webp"
                width={120}
                height={120}
                className="w-full"
                alt="Capa do álbum no pelo 1"
              />

              <strong className="font-semibold">No pelo 1</strong>
              <span className="text-sm text-zinc-500">Dailt Mix 1</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
