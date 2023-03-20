import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../Redux/Store/Store";
import FlashCardsHome from "../Components/Create FlashCards/FlashCardsHome";
const data = (component) =>
  render(<BrowserRouter><Provider store={store}>{component}</Provider></BrowserRouter>);

describe(FlashCardsHome, () => {

    data(<FlashCardsHome/>)

    it('should contain navlinks ', () => {
        expect(screen.getByRole('button', { name: /create new/i })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /my flashcard/i })).toBeInTheDocument()
    })
})