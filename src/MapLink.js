import Map from "./Map";
// import { Tooltip } from "react-tooltip";

function MapLink({ content, setContent, countries }) {
  return (
    <div className="map">
      <Map setTooltipContent={setContent} countries={countries} />
      {/* <Tooltip>{content}</Tooltip> */}
    </div>
  );
}

export default MapLink;
