import {cn} from "@/lib/utils"
import Image from "next/image"

interface TopicProps {
  title: string
  selected?: boolean
  onClick?: () => void
}

export const Topic: React.FC<TopicProps> = ({title, selected, onClick}) => {
  return (
    <button
      className={cn("inline-flex shrink-0 items-center border rounded-full px-4 py-1 leading-7  mr-2", selected ? "border-transparent bg-green text-black" : "border-light-gray text-light-gray")}
      onClick={onClick}
    >
      {title}
      {selected && <Image className="ml-2" src="/icons/close.svg" aria-hidden alt="Remove" width={9} height={9} />}
    </button>
  )
}
