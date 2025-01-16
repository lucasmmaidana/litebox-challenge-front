import type {NextConfig} from "next"
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  experimental: {
    serverActions: {
      bodySizeLimit: "11mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lite-tech.s3.amazonaws.com",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "lite-tech.s3.us-east-2.amazonaws.com",
        port: "",
        search: "",
      },
    ],
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
