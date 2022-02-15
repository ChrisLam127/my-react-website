import "./reviews.css";
import React, { useState } from "react";
import people from "./data";
function Reviews() {
  const [index, setIndex] = useState(0);
  const { name, job, text, image } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <div>
      <main className="reviewers-section">
        <section className="container">
          <div className="title">
            <h2>our reviews</h2>
            <div className="underline"></div>
          </div>
          <article className="review">
            <div className="img-container">
              <img src={image} className="person-img" alt={name} />
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
              <button className="prev-btn">
                <i className="fas fa-chevron-left" onClick={prevPerson}></i>
              </button>
              <button className="next-btn">
                <i className="fas fa-chevron-right" onClick={nextPerson}></i>
              </button>
            </div>
            <button className="random-btn" onClick={randomPerson}>
              Reviews
            </button>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Reviews;
