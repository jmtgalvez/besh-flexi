import React from "react";

export default function FeedBack() {
  return (
    <div className="card">
      <div className="card-body">
        <form action="" method="">
          <div className="container p-2">
            <label htmlFor="feedback__email">Email</label>
            <input
              type="email"
              name="feedback__email"
              id="feedback__email"
              className="form-control"
            />
          </div>
          <div className="container p-2">
            <label htmlFor="feedback__name">Name</label>
            <input
              type="email"
              name="feedback__name"
              id="feedback__name"
              className="form-control"
            />
          </div>
          <div className="container p-2">
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Enter your feedback here"
                id="feedback__form__textarea"
                style={{height: '250px', resize:'none'}}
              ></textarea>
              <label htmlFor="floatingTextarea2">Feedback</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
