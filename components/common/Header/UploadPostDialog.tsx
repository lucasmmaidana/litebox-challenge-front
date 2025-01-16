"use client"

import {useState, useRef, useActionState} from "react"
import {useFormStatus} from "react-dom"

import Image from "next/image"
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/Dialog"
import {Button} from "@/components/ui/Button"
import {TextInput} from "@/components/ui/TextInput"
import {uploadPost} from "@/app/actions"

const initialState = {
  message: "",
  success: false,
  error: false,
}

const UploadInput: React.FC<{error: boolean}> = ({error}) => {
  const ref = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<string | null>(null)
  const {pending} = useFormStatus()
  const handleFile = () => {
    const file = ref.current?.files?.[0]
    if (file) {
      setFile(file.name)
    }
  }
  return (
    <>
      {error ? (
        <div className="text-red-500">Failed to upload image</div>
      ) : pending ? (
        <div>
          Loading image
          <div className="animate-pulse">
            <progress className="w-full [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-black" max="100" value="60">
              Loading...
            </progress>
          </div>
        </div>
      ) : (
        <Button asChild variant="outline">
          <div className="relative flex">
            <input
              ref={ref}
              onInput={handleFile}
              name="image"
              type="file"
              required
              accept="image/*"
              className="absolute w-full h-full cursor-pointer opacity-0 top-0 left-0 
            "
            />
            <span className="overflow-hidden text-ellipsis max-w-80">{file ? file : "Upload image"}</span>
            <Image className="" src="/icons/arrow-up.svg" aria-hidden alt="New post" width={24} height={24} />
          </div>
        </Button>
      )}
    </>
  )
}

const SubmitButton: React.FC = () => {
  const {pending} = useFormStatus()
  return (
    <Button variant="black" className="mt-4" disabled={pending}>
      Confirm
    </Button>
  )
}

export const UploadPostDialog: React.FC = () => {
  const [state, formAction] = useActionState(uploadPost, initialState)

  return (
    <Dialog>
      <DialogTrigger>
        <span className="flex items-center gap-0.5 h-7 font-semibold">
          New post
          <Image className="" src="/icons/arrow-long-right-green.svg" aria-hidden alt="New post" width={24} height={24} />
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{state?.success ? "Your post was successfully uploaded!" : "Upload your post"}</DialogTitle>
          <DialogDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo libero.</DialogDescription>
        </DialogHeader>
        {!state?.success && (
          <form action={formAction} className="flex flex-col gap-4">
            <TextInput name="title" placeholder="Post Title" required />
            <UploadInput error={state?.error} />
            <SubmitButton />
          </form>
        )}
        {state?.success && (
          <DialogClose asChild>
            <Button variant="black" className="mt-4 w-fit mx-auto">
              Done
            </Button>
          </DialogClose>
        )}
      </DialogContent>
    </Dialog>
  )
}
