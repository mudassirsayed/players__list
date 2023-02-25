import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log(players);
  const fetchPosts = async () => {
    await axios
      .get("https://api.npoint.io/20c1afef1661881ddc9c")
      .then((res) => setPlayers(res?.data));
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  const sortedList = players?.playerList?.sort((a, b) => a.Value - b.Value);
  console.log(sortedList, "SSS");
  const filteredData = sortedList?.filter(
    (item) =>
      item.TName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.PFName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <h2 className="text-center text-uppercase m-3">Players List</h2>
        <div className="input-group d-flex justify-content-center">
          <div className="form-outline">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              className="form-control my-search-input"
            />
          </div>
        </div>
        <div className="row  mt-3">
          {filteredData && filteredData.length > 0 ? (
            filteredData?.map((player) => {
              return (
                <>
                  <div className="col-md-2" key={player.Id}>
                    <div className="card mt-3">
                      <img
                        className="card-img-top"
                        src={`../player-images/${player?.Id}.jpg`}
                        alt={`Player ${player.Id}`}
                        onError={() => {
                          console.log("Error: image failed to load");
                        }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{player.PFName}</h5>
                        <p className="card-text">{player.SkillDesc}</p>
                        <p className="text-success">${player.Value}</p>
                        {player?.UpComingMatchesList?.map((up) => {
                          return (
                            <>
                              {up.CCode && up.VsCCode && (
                                <p>
                                  {up.CCode ? up.CCode : ""}
                                  <span className="m-2">vs</span>
                                  {up.VsCCode ? up.VsCCode : ""}
                                </p>
                              )}

                              <p>
                                <small>{up.MDate.toLocaleString()}</small>
                              </p>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <h1 className="d-flex justify-content-center align-items-center text-danger">
              No Data Found
            </h1>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
