import styled from "styled-components";

export const StyledRankWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  padding: 20px;
  backdrop-filter: blur(21px) saturate(156%);
  -webkit-backdrop-filter: blur(21px) saturate(156%);
  background-color: rgba(17, 25, 40, 0.62);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);

  .player {
    border-radius: 50%;
    &:hover {
      outline: 2px solid white;
      cursor: pointer;
    }
  }
`;

export const StyledTeamWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;

  .rank {
    font-size: 30px;
    font-weight: 600;
    background-color: #fff;
    color: #17b486;
    border-radius: 50%;
    width: 60px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .team-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid #fff;
    padding: 15px;
    border-radius: 10px;
    width: 100%;
  }
  .team-name {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .name {
    text-align: center;
    width: auto;
  }
  .team-photos {
    display: flex;
    gap: 10px;
    justify-content: space-around;
  }
`;
