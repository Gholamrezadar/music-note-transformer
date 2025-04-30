"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { transformText } from "@/lib/dictionary"
import { motion, AnimatePresence } from "framer-motion"

export function TextTransformer() {
  const [inputText, setInputText] = useState("")
  const [transformedText, setTransformedText] = useState("")
  const [unmappedWords, setUnmappedWords] = useState<string[]>([])

  useEffect(() => {
    if (inputText) {
      const { result, unmapped } = transformText(inputText)
      setTransformedText(result)
      setUnmappedWords(unmapped)
    } else {
      setTransformedText("")
      setUnmappedWords([])
    }
  }, [inputText])

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="relative">
          <Input
            type="text"
            placeholder="Enter notes to transform e.g. C4 D#4 A5"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full h-14 px-6 text-lg rounded-full bg-background/50 backdrop-blur-sm border"
          />
        </div>
      </div>

      <AnimatePresence>
        {transformedText && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="overflow-hidden bg-background/60 backdrop-blur-sm border border-input rounded-[25px]">
              <CardContent className="p-6 ">
                <h2 className="text-xl font-semibold mb-2">Transformed Notes</h2>
                <p className="text-lg leading-relaxed">{transformedText}</p>

                {unmappedWords.length > 0 && (
                  <div className="mt-4 pt-4 border-t">
                    
                    <div className="flex flex-wrap gap-2">
                      {unmappedWords.map((word, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-destructive/10 text-destructive"
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
