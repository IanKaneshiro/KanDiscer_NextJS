import style from "./discs.module.css";

const discs = [{ id: 1, name: "Zeus" }];

const Page = () => {
  return (
    <main className="disc_landing__container">
      <div className="disc_landing__search">
        <button className="disc_landing__filter-btn">
          <i
            className="fa-solid fa-filter fa-2xl"
            style={{ color: "#284b63" }}
          ></i>
        </button>
        <input type="text" placeholder="Search by name..." />
      </div>
      <div className="disc_landing__discs">
        <div className="disc_landing__main">
          {discs.length ? (
            discs.map((disc) => (
              <div key={disc.id}>{disc.name}</div>
              // <OpenModalDiv
              //   className="disc-landing__title"
              //   key={disc.id}
              //   component={<DiscTile disc={disc} />}
              //   modalComponent={
              //     <DiscDetailsModal sessionUser={sessionUser} disc={disc} />
              //   }
              // />
            ))
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "400px",
              }}
            >
              <h1>No discs match search parameters</h1>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Page;
