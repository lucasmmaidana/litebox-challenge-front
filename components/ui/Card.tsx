import {POST_TAG, READING_TIME} from "@/mocks"
import {cn} from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface CardProps {
  title: string
  image: string
  hero?: boolean
  id: string
  className?: string
}

export const Card: React.FC<CardProps> = ({id, title, image, hero = false, className}) => {
  return (
    <Link href={`/post/${id}`} className={cn("relative grid-stacking w-full h-94.5", hero ? "lg:h-138.5" : "", className)}>
      <Image className="object-cover" src={image} alt={title} fill />
      <div className="z-0 p-6 flex flex-col justify-end h-full">
        <div className={cn(" h-fit flex-grow-0 p-6 pb-0 w-fit", hero ? "bg-black" : "bg-white")}>
          <div className={"bg-green text-black font-semibold py-1 px-3 leading-6 rounded-full"}>{POST_TAG()}</div>
        </div>
        <div className={cn("h-fit flex-grow-0 p-6 ", hero ? "bg-black text-white  lg:w-139.25" : "bg-white text-black")}>
          <h2 className={cn("font-bold", hero ? "lg:text-4xl" : "")}>{title}</h2>
          <div className="flex justify-between h-7 mt-2.5">
            <span className="flex items-center gap-0.5 font-semibold">
              Read
              <Image className="" src="/icons/arrow-long-right-purple.svg" aria-hidden alt="Read post" width={24} height={24} />
            </span>
            <div className="flex items-center gap-2 text-dark-gray">
              <Image className="inline" src="/icons/journal-page.svg" alt="Reading time" width={16} height={16} />
              {READING_TIME} mins
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
