import {cn} from "@/lib/utils"
import {mostViewedPosts} from "@/mocks"
import Image from "next/image"

interface MostViewedProps {
  className?: string
}

export const MostViewed: React.FC<MostViewedProps> = ({className}) => {
  return (
    <aside className={cn("hidden lg:block max-w-72", className)}>
      <h3 className="font-bold text-lg mb-6">Most viewed</h3>
      {mostViewedPosts.map(({title, image}, index) => (
        <div key={index} className="flex gap-4 mb-3 pb-3 cursor-pointer border-b border-dark-gray">
          <h4 className="font-semibold leading-5  text-light-gray">{title}</h4>
          <Image className="object-cover" src={image} alt={title} width={80} height={80} />
        </div>
      ))}
    </aside>
  )
}
