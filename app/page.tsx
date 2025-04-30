import { TextTransformer } from "@/components/text-transformer"
import { ThemeToggle } from "@/components/theme-toggle"
import { HelpModal } from "@/components/help-modal"
import { Github } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-24">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="absolute top-4 left-4 flex items-center space-x-2">
        <Link href="https://github.com/gholamrezadar/music-note-transformer" target="_blank" rel="noopener noreferrer">
          <button className="h-10 w-10 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 flex items-center justify-center">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub repository</span>
          </button>
        </Link>
        <HelpModal />
      </div>

      <div className="w-full max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Music Note Transformer</h1>
          <p className="text-muted-foreground">
            Transform music notes to qwerty format for{" "}
            <a className="text-blue-400" href="https://www.onlinepianist.com/virtual-piano">
              {" "}
              virtual-piano
            </a>
          </p>
        </div>

        <TextTransformer />
      </div>
    </main>
  )
}
