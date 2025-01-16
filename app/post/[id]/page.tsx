import type {Metadata} from "next"
import Image from "next/image"
import Link from "next/link"
import api from "@/api"
import {Card} from "@/components/ui/Card"
import {Footer} from "@/components/common/Footer"
import {Header} from "@/components/common/Header"
import {PostBody} from "./PostBody"
import {AUTHOR, READING_TIME} from "@/mocks"
import {Params, Post} from "@/types"
import {MostViewed} from "@/components/common/MostViewed"

export async function generateMetadata({params}: {params: Params}): Promise<Metadata> {
  const id = (await params).id

  const post = await api.getById(id)
  const {image, title} = post

  return {
    title: title,
    openGraph: {
      images: [image],
    },
    description: "Litetech blog post",
    authors: [{name: AUTHOR}],
  }
}

export const revalidate = 3600

export const dynamicParams = true

export async function generateStaticParams() {
  const posts: Post[] = (await api.getAll()).data
  return posts.map((post) => ({
    id: post._id,
  }))
}

export default async function PostPage({params}: {params: Params}) {
  const {id} = await params
  const post = await api.getById(id)
  const {image, title} = post

  const {data: relatedPosts} = await api.getAll({limit: 3, page: 1})

  return (
    <>
      <div className="bg-black/80 relative z-10">
        <Header className=" max-w-360 mx-auto px-6" />
      </div>
      <article className="-mt-20">
        <div className="max-w-360 mx-auto relative grid-stacking w-full  min-h-122 text-black lg:h-169.25">
          <Image className="object-cover" src={image} alt={title} fill />
          <div className="z-0 p-6 lg:p-16 pt-20  flex flex-col justify-end lg:justify-center h-full">
            <Link href="/" className="flex items-center font-semibold h-fit flex-grow-0 mb-6 w-fit gap-2 text-white">
              <Image className="inline" src="/icons/nav-arrow-right.svg" alt="Back to blog" width={24} height={24} />
              Blog
            </Link>
            <div className="h-fit flex-grow-0 p-6 pb-0 w-fit bg-white text-dark-gray">
              <Image className="inline-flex mr-2 rounded-full" src="/author.png" alt="Author" width={32} height={32} />
              By {AUTHOR}
            </div>
            <div className="h-fit flex-grow-0 p-6 lg:w-139.25 bg-white text-black">
              <h1 className="font-bold text-2xl lg:text-4xl">{title}</h1>
              <div className=" h-7 mt-2.5 lg:mt-6">
                <div className="flex items-center gap-2 text-dark-gray">
                  <Image className="inline" src="/icons/journal-page.svg" alt="Reading time" width={16} height={16} />
                  {READING_TIME} mins
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-black pt-16 max-w-360 mx-auto px-6 pb-6 lg:grid lg:grid-cols-[22%_1fr_22%] lg:gap-8 lg:px-16 lg:pt-20">
          <PostBody />
          <section className="text-black py-6 lg:py-0">
            <h2 className=" font-semibold mb-6">Share on</h2>
            <div className="flex gap-6 invert">
              <Image className="" src="/icons/linkedin.svg" alt="Linkedin" width={24} height={24} />
              <Image className="" src="/icons/facebook.svg" alt="Twitter" width={24} height={24} />
              <Image className="" src="/icons/x.svg" alt="Github" width={24} height={24} />
            </div>
          </section>
          <MostViewed className="hidden lg:block lg:order-3" />
        </div>
      </article>
      <div className="bg-white  max-w-360 mx-auto px-6 lg:px-16 pb-6 lg:pb-16 ">
        <section className="text-black py-6 lg:py-16 lg:px-28 lg:mb-8">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6">Related posts</h2>
          <div className="overflow-x-auto snap-x	 -mr-6 lg:mr-0">
            <div className="flex w-fit lg:w-full gap-6 lg:gap-8">
              {relatedPosts.map(({title, image, _id}) => (
                <Card key={_id} title={title} image={image} id={_id} className="snap-start w-64 lg:w-1/3" />
              ))}
              <div className="w-2" />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
