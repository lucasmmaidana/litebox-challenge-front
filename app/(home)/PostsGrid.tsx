import {Card} from "@/components/ui/Card"
import {cn} from "@/lib/utils"
import {Post} from "@/types"

interface PostsGridProps {
  posts: Post[]
  variant: "left" | "right"
}

export const PostsGrid: React.FC<PostsGridProps> = ({posts, variant}) => {
  const lessThanThreePosts = posts.length < 3
  return (
    <div className={cn("flex flex-col grow gap-8 lg:grid lg:auto-rows-max", variant === "left" ? "lg:grid-cols-[55%_1fr]" : "lg:grid-cols-[1fr_55%] grid-flow-col")}>
      {posts.slice(0, 3).map(({title, image, _id}, index) => {
        const isBig = (variant === "left" && index === 0) || (variant === "right" && index === 2)
        return <Card key={_id} title={title} image={image} id={_id} className={cn("lg:h-[379px]", isBig && !lessThanThreePosts && "lg:row-span-2 lg:h-full")} />
      })}
    </div>
  )
}
