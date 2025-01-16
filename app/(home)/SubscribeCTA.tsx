import {Button} from "@/components/ui/Button"
import {cn} from "@/lib/utils"

interface SubscribeCTAProps {
  className?: string
}

export const SubscribeCTA: React.FC<SubscribeCTAProps> = ({className}) => {
  return (
    <section className={cn("w-full p-16 lg:p-10 bg-purple lg:flex items-center  lg:gap-6", className)}>
      <h2 className="mb-7 lg:mb-0 text-2xl lg:grow">
        Sign up for our newsletter <span className="font-semibold">and get daily updates</span>
      </h2>
      <Button className="w-full lg:w-auto">Subscribe</Button>
    </section>
  )
}
