import { RatingDots } from "./RatingDots";
import "./css/rating-level.scss";

export const RatingLevel = function ({ name, value }) {
  return (
    <div className="rating-level">
      <span>{name}</span>
      <RatingDots value={value} />
    </div>
  );
};
