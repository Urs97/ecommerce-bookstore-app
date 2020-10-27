import React, { useContext } from "react";
import "./BookGenres.scss";

import StoreContext from "../../context/StoreContext";
import { Link as ScrollLink } from "react-scroll";

const BookGenres = () => {
  const context = useContext(StoreContext);

  return (
    <section className="book-genres">
      <h4 className="sidebar-title">Book Genres</h4>
      <ul>
        <li>
          <ScrollLink to="page-header" spy={true} smooth={true}>
            <button
              onClick={() => context.changeCategory("science_fiction")}
              className="btn-to-link"
            >
              Science Fiction
            </button>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="page-header" spy={true} smooth={true}>
            <button
              onClick={() => context.changeCategory("history")}
              className="btn-to-link"
            >
              History
            </button>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="page-header" spy={true} smooth={true}>
            <button
              onClick={() => context.changeCategory("short_stories")}
              className="btn-to-link"
            >
              Short Stories
            </button>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="page-header" spy={true} smooth={true}>
            <button
              onClick={() => context.changeCategory("fantasy")}
              className="btn-to-link"
            >
              Fantasy
            </button>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="page-header" spy={true} smooth={true}>
            <button
              onClick={() => context.changeCategory("biography")}
              className="btn-to-link"
            >
              Biography
            </button>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="page-header" spy={true} smooth={true}>
            <button
              onClick={() => context.changeCategory("programming")}
              className="btn-to-link"
            >
              Programming
            </button>
          </ScrollLink>
        </li>
      </ul>
    </section>
  );
};

export default BookGenres;
