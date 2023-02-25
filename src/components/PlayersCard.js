import React from "react";

function PlayersCard({ player }) {
  return (
    <>
      <div className="col-md-3" key={player.Id}>
        <div className="card mt-3">
          <img
            className="card-img-top"
            src={`../player-images/${player.Id}.jpg`}
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/500x500?text=Football";
            }}
            alt={`Player ${player.Id}`}
          />
          <div className="card-body">
            <h5 className="card-title">{player.PFName}</h5>
            <p className="card-text">{player.SkillDesc}</p>
            <p className="text-success text-underline">${player.Value}</p>
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
}

export default PlayersCard;
