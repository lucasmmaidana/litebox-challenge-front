"use client"
import {TAGS} from "@/mocks"
import {Topic} from "@/components/ui/Topic"
import {useState} from "react"

export const TopicsFilter: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>(["All"])
  const handleSelect = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }
  const tags = ["All", ...TAGS]
  return (
    <div className="my-1">
      <h2 className="font-bold text-lg mb-6">Topics</h2>
      <div className="overflow-x-auto ">
        <div className="flex items-center ">
          {tags.map((tag) => (
            <Topic key={tag} title={tag} selected={selectedTags.includes(tag)} onClick={() => handleSelect(tag)} />
          ))}
        </div>
      </div>
    </div>
  )
}
