import React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <body>
        <header>
          <nav
            style={{
              display: "flex",
              backgroundColor: "white",
              textAlign: "center",
            }}
          >
            <img
              src="https://img.freepik.com/free-vector/news-background-with-text-live-updates_1017-14193.jpg?size=626&ext=jpg&ga=GA1.2.1583512496.1683258635&semt=sph"
              style={{
                position: "relative",
                margin: 3,
                padding: 0,
                width: 80,
                borderRadius: 15,
                top: 1,
              }}
              alt=""
            />
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                position: "relative",
                paddingLeft: 20,
                top: 20,
              }}
            >
              <li></li>
              <li style={{ paddingLeft: 40 }}>
                <Link to="/">
                  <button
                    style={{
                      position:"relative",
                      bottom:5,
                      borderRadius: 8,
                      backgroundColor: "#dc3545",
                      border: "none",
                      boxShadow: 220,
                      color: "white",
                      height: 35,
                      width: 70,
                      fontSize: "bold",
                    }}
                  >
                    Home
                  </button>
                </Link>
              </li>
              <li style={{ paddingLeft: 40 }}>
                <Link to="/">
                  <button
                    style={{
                      position:"relative",
                      bottom:5,
                      borderRadius: 8,
                      backgroundColor: "#dc3545",
                      border: "none",
                      boxShadow: 20,
                      color: "white",
                      height: 35,
                      width: 70,
                    }}
                  >
                    News
                  </button>
                </Link>
              </li>

              <li style={{ paddingLeft: 40 }}>
                <Link to="about">
                  <button
                    style={{
                      position:"relative",
                      bottom:5,
                      borderRadius: 8,
                      backgroundColor: "#dc3545",
                      border: "none",
                      boxShadow: 20,
                      color: "white",
                      height: 35,
                      width: 70,
                    }}
                  >
                    About
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <p></p>
        </main>
      </body>
    </div>
  );
}
