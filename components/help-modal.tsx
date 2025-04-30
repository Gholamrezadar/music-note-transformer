"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { dictionary } from "@/lib/dictionary"

export function HelpModal() {
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredDictionary, setFilteredDictionary] = useState<Record<string, string>>({})

  useEffect(() => {
    if (searchTerm) {
      const filtered = Object.entries(dictionary).reduce(
        (acc, [key, value]) => {
          if (
            key.toLowerCase().includes(searchTerm.toLowerCase()) ||
            value.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            acc[key] = value
          }
          return acc
        },
        {} as Record<string, string>,
      )
      setFilteredDictionary(filtered)
    } else {
      setFilteredDictionary(dictionary)
    }
  }, [searchTerm])

  // Initialize filtered dictionary with full dictionary
  useEffect(() => {
    setFilteredDictionary(dictionary)
  }, [])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="h-10 w-10 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 flex items-center justify-center"
        aria-label="Help"
      >
        <span className="text-lg font-semibold">?</span>
        <span className="sr-only">Help</span>
      </button>

      <Dialog open={open} onOpenChange={setOpen} className="border-none">
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] flex flex-col border border-opacity-5">
          <DialogHeader>
            <DialogTitle>Dictionary Mapping Reference</DialogTitle>
            <DialogDescription>
              This is the dictionary used to transform your text. Each word is mapped to its corresponding
              transformation.
            </DialogDescription>
            
          </DialogHeader>

          <div className="mb-4">
            <Input
              placeholder="Search dictionary..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-[50vh] w-full pr-4 py-2">
              <div className="flex flex-col justify-center items-center">
                {Object.entries(filteredDictionary).length > 0 ? (
                  Object.entries(filteredDictionary).map(([key, value]) => (
                    <div key={key} className="flex items-center p-2 rounded-md bg-background/50">
                      <div className="font-medium">{key}</div>
                      <div className="mx-2 text-muted-foreground">→</div>
                      <div className="text-primary">{value}</div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-4 text-muted-foreground">
                    No matches found for "{searchTerm}"
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>

          <div className="mt-4 text-xs text-muted-foreground text-center">
            Total mappings: {Object.keys(dictionary).length} | Showing: {Object.keys(filteredDictionary).length}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
