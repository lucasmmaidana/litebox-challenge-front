export const TextInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input className="h-14 px-4 border-2 border-black focus:shadow-[0_0_8px_0_purple] focus:outline-none invalid:border-error" type="text" {...props} />
}
