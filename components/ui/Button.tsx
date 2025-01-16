import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 h-14 px-8 whitespace-nowrap text-lg font-medium ring-offset-background transition-colors  disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-green text-blackish hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-blackish active:bg-blackish active:text-white disabled:bg-white disabled:text-light-gray",
        black:
          "bg-black text-white hover:bg-green hover:text-blackish hover:ring-inset hover:ring-2 hover:ring-blackish focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-blackish disabled:bg-white disabled:text-light-gray",
        outline: "bg-green text-blackish ring-inset ring-2 ring-blackish hover:bg-black hover:text-white focus-within:bg-black focus-within:text-white hover:bg-black active:text-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({className, variant, asChild = false, ...props}, ref) => {
  const Comp = asChild ? Slot : "button"
  return <Comp className={cn(buttonVariants({variant, className}))} ref={ref} {...props} />
})
Button.displayName = "Button"

export {Button, buttonVariants}
