import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../componend/FlexWrapper";
import {Link} from "../../../componend/Link";
import {Button} from "../../../componend/Button";


const Works = styled.section`
    ${FlexWrapper} {
      gap: 30px;
    }
`

const Work = styled.div`
  background-color: ${theme.colors.secondaryBg};
  width: 330px;
  flex-grow: 1;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }

  @media ${theme.media.desktop} {
    max-width: 540px;
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Title = styled.h3`

`

const Text = styled.p`
  margin: 14px 0 10px;
`

const Description = styled.div`
  padding: 25px 20px;
`

const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &::before {
      height: 100%;
      width: 100%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }

  ${Button} {
    opacity: 1;
  }
}
  
  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }
    
    ${Button} {
      opacity: 1;
    }
  }
`

export const S = {
    Works,
    Work,
    Image,
    Title,
    Text,
    Description,
    ImageWrapper,
}