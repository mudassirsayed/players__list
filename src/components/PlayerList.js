import { useEffect, useState } from "react";
import axios from "axios";
import SearchPlayers from "./SearchPlayers";
import PlayersCard from "./PlayersCard";

function PlayerList() {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const baseUrl = "https://api.npoint.io/20c1afef1661881ddc9c";

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const fetchPosts = async () => {
    await axios
      .get(baseUrl)
      .then((res) => {
        setPlayers(res?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const sortedPlayers = players?.playerList?.sort((a, b) => a.Value - b.Value);

  const filteredData = sortedPlayers?.filter(
    (item) =>
      item.TName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.PFName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h2 className="text-center text-uppercase m-3">Players List</h2>
      <SearchPlayers searchTerm={searchTerm} handleSearch={handleSearch} />
      <div className="row mt-3">
        {filteredData && filteredData?.length > 0
          ? filteredData?.map((player) => {
              return <PlayersCard player={player} />;
            })
          : !isLoading && (
              <h1 className="d-flex justify-content-center align-items-center text-danger">
                No Data Found
              </h1>
            )}
      </div>
    </>
  );
}

export default PlayerList;
