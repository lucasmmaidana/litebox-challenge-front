import Image from "next/image"

export const Footer: React.FC = () => {
  return (
    <footer className="flex items-center lg:items-start lg:px-32 flex-col w-full py-16 gap-14 bg-purple">
      <div className="flex flex-col items-center lg:w-full lg:flex-row lg:justify-between gap-14">
        <Image className="" src="/litetech.svg" alt="Litetech logo" width={148} height={32} />
        <div className="flex gap-6">
          <Image className="" src="/icons/linkedin.svg" alt="Linkedin" width={24} height={24} />
          <Image className="" src="/icons/facebook.svg" alt="Twitter" width={24} height={24} />
          <Image className="" src="/icons/x.svg" alt="Github" width={24} height={24} />
        </div>
      </div>
      <span className="text-center lg:text-left leading-8">
        © Copyright Lite-Tech
        <br className="lg:hidden" />
        All Rights Reserved
      </span>
    </footer>
  )
}
