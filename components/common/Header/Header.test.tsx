import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import {Header} from "./index"

jest.mock("./UploadPostDialog", () => ({
  UploadPostDialog: () => <div>New post</div>,
}))

describe("Header", () => {
  it("renders the logo with correct attributes", () => {
    render(<Header />)
    const logo = screen.getByAltText("Litetech logo")
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute("src", "/litetech.svg")
  })

  it("renders the UploadPostDialog component", () => {
    render(<Header />)
    const uploadPostDialog = screen.getByText("New post")
    expect(uploadPostDialog).toBeInTheDocument()
  })

  it("renders the link to the homepage", () => {
    render(<Header />)
    const link = screen.getByRole("link", {name: /litetech logo/i})
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/")
  })
})
