"use client";
import style from "./discs.module.css";
import { useState, useRef } from "react";

const discs = [{ id: 1, name: "Zeus" }];

const page = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [showFilters, setShowFilters] = useState(true);
  const ulRef = useRef();

  const handleFilter = () => {
    setShowFilters(!showFilters);
  };

  return (
    <main className="disc_landing__container">
      <div className="disc_landing__search">
        <button className="disc_landing__filter-btn" onClick={handleFilter}>
          <i
            className="fa-solid fa-filter fa-2xl"
            style={{ color: "#284b63" }}
          ></i>
        </button>
        <input
          type="text"
          value={nameFilter}
          placeholder="Search by name..."
          onChange={(e) => setNameFilter(e.target.value)}
        />
      </div>
      <div className="disc_landing__discs">
        <div
          ref={ulRef}
          className={
            showFilters
              ? "disc_landing__filters hide-filters"
              : "disc_landing__filters"
          }
        >
          {/* <DiscFilterBar filters={filters} setFilters={setFilters} /> */}
          {/* <div className="disc_landing__submit">
            {!sessionUser?.admin && <h3>Don't see your disc?</h3>}
            <OpenModalButton
              modalComponent={<CreateDiscForm />}
              buttonText={sessionUser?.admin ? "Add Disc" : "Request "}
            />
          </div> */}
        </div>
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

export default page;
