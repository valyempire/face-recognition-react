import { RankProps } from "./Rank.types";

export const Rank: React.FC<RankProps> = (props) => {
  const { name, entries } = props;
  return (
    <div>
      <div className="white f3">{`${name}, your current entry count is`}</div>
      <div className="white f1">{entries}</div>
    </div>
  );
};
