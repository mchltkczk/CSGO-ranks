import { RanksData, Player, Country } from "../../interfaces/API";
import { StyledRankWrapper, StyledTeamWrapper } from "./Content.Styled";

interface Props {
  ranksData: RanksData[];
}

export const Content = ({ ranksData }: Props) => {
  const printRanking = ranksData.map(({ id, logo, name, players, ranking }) => (
    <StyledTeamWrapper key={id}>
      <div className='rank'>{ranking}</div>
      <div className='team-info'>
        <div className='team-name'>
          <img width='40' src={logo} /> <span className='name'>{name}</span>
        </div>
        <div className='team-photos'>
          {players.map(({ image }) => (
            <img className='player' width='60' src={image} />
          ))}
        </div>
      </div>
    </StyledTeamWrapper>
  ));
  return <StyledRankWrapper>{printRanking}</StyledRankWrapper>;
};
