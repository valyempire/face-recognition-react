import { TitleContainer, Counter } from "./Rank.styles";

import { RankProps } from "./Rank.types";

export const Rank: React.FC<RankProps> = (props) => {
  const { name, entries } = props;
  return (
    <>
      <TitleContainer className="white f3">{`${name}, your current entry count is`}</TitleContainer>
      <Counter className="white f1">{entries}</Counter>
    </>
  );
};
