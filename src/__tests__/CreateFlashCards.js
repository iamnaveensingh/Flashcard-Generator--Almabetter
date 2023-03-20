import {
  render,
  screen,
  fireEvent,
  getByLabelText,
  getByRole,
  cleanup,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux";
import Store from "../Redux/Store/Store";
import Createflashcard from "../Components/Create FlashCards/CreateFlashCards";
const data = (component) =>
  render(<Provider store={Store}>{component}</Provider>);
afterEach(() => {
  cleanup;
});
describe(Createflashcard, () => {
  beforeEach(() => {
    data(<Createflashcard />);
  });

  test('should be group name', () => {
      const groupname=screen.getByLabelText(/create group*/i)
      expect(groupname).toBeInTheDocument()
  })
  test("should be  description",()=>{
      const description=screen.getByLabelText(/add description/i)
      expect(description).toBeInTheDocument()
  })
  test('should be image of group', () => {
      const groupimage=screen.getByText("Upload Image")
      expect(groupimage).toBeInTheDocument()
  })
  test('should be term', () => {
      const term=screen.getByLabelText(/enter term/i)
      expect(term).toBeInTheDocument()
  })
  test('should be definition', () => {
      const term=screen.getByLabelText(/enter definition/i)
      expect(term).toBeInTheDocument()
  })
  test('should be term image', () => {
      const termimage=screen.getByText(/select image/i)
      expect(termimage).toBeInTheDocument()
   })
  test('should be addmore button', () => {
      const addmorebutton=screen.getByText(/add more/i)
      expect(addmorebutton).toHaveTextContent(/add more/i)
  })

  test('should be create button', () => {
      const create=screen.getByRole("button",{name:"Create"})
      expect(create).toHaveTextContent(/create/i)
  })

   
 
});
