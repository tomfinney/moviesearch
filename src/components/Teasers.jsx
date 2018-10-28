import React from "react";
import { generateBgUrl } from "../utils/movieDB";

const Teasers = ({ results }) => (
  <div className="teasers">
    {results.map((result, i) => {
      return (
        <article key={`${i}${result.title}`} className="teaser">
          <div
            style={{
              backgroundImage: `url('${generateBgUrl(result.poster_path)}')`
            }}
            className="teaser__img"
          />
          <div className="teaser__content">
            <p className="teaser__body">
              <b>{result.title}</b>
              <br />
              <small>{result.release_date}</small>
              <br />
              <span>
                {result.vote_average}
                /10
              </span>
            </p>
            <div className="btn">View More</div>
          </div>
        </article>
      );
    })}
  </div>
);

export { Teasers };
