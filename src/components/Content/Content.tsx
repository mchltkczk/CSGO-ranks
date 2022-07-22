import { RanksData, Player, Country } from "../../interfaces/API";

interface Props {
  ranksData: RanksData[];
}

export const Content = ({ ranksData }: Props) => {
  console.log(ranksData);
  const printRanking = ranksData.map(({ id, logo, name, players, ranking }) => (
    <div key={id}>{name}</div>
  ));
  return <div>{printRanking}</div>;
};
