import styled from "styled-components";
import BREAKPOINTS_DEVICES from "theme/global/breakpoints";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 5px 20px #0000003f;

  @media ${BREAKPOINTS_DEVICES.mobileL} {
  }

  @media ${BREAKPOINTS_DEVICES.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${BREAKPOINTS_DEVICES.laptop} {
    padding: 1rem;
  }
`;

export const Card = styled.div`
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media ${BREAKPOINTS_DEVICES.tablet} {
    padding: 2rem;
  }
`;

export const Price = styled.p`
  width: auto;
  font-weight: 600;
  font-size: 20px;
  @media ${BREAKPOINTS_DEVICES.tablet} {
    font-size: 24px;
  }
`;

export const Details = styled.div`
  color: #3e5067;
  font-size: 12px;
  span {
    font-weight: 600;
  }
  @media ${BREAKPOINTS_DEVICES.tablet} {
    font-size: 14px;
  }
`;
