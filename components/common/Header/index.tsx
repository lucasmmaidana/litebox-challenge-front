import Image from "next/image"
import Link from "next/link"
import {UploadPostDialog} from "./UploadPostDialog"
import {cn} from "@/lib/utils"

export const Header: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({className}) => {
  return (
    <header className={cn("flex justify-between items-center w-full py-6", className)}>
      <Link href="/">
        <Image className="" src="/litetech.svg" alt="Litetech logo" width={148} height={32} priority />
      </Link>
      <UploadPostDialog />
    </header>
  )
}
