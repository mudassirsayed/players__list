/* eslint-disable jsx-a11y/img-redundant-alt */
import logo from "./logo.svg";
import "./App.css";
import img1 from "./assets/63706.jpg";

function App() {
  return (
    <>
      <div className="container">
        <h2 className="text-center">Players List</h2>
        <div className="row  mt-3">
          <div className="col-md-2">
            <div className="card">
              <img className="card-img-top" src={img1} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Name 1</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.s
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
