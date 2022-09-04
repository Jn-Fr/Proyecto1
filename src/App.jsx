import profile from "./assets/profile.png";
import grid from "./assets/grid.png";
import "./App.css";
import GridCard from "./components/GridCard";
import Info from "./components/Info";

export default function App() {
  return (
    <div className="tweed__container">
      <div className="tweed__img">
        <img src={profile} alt="profile name" />
      </div>
      <div className="tweed__info">
        <Info />
        <div className="tweed__grid-img">
          <img src={grid} alt="grid" />
          <div className="tweed__grid-container">
            <GridCard />
          </div>
        </div>
      </div>
    </div>
  );
}
