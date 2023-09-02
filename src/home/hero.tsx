import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const HeroHolder = styled.div`
  display: flex;
  //flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
  align-content: center;
  padding-top: 100px;

  & > * {
    flex-basis: 50%;
  }

  h3 {
    margin-bottom: -10px;
    font-weight: normal;
    text-align: center;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  .cta-holder {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    h3 {
      text-align: start;
    }

    h1 {
      font-size: 2.5rem;
      text-align: start;
    }

    .cta-holder {
      justify-content: flex-start;
    }
    /* CSS */
    //center-div {
    //  width: 200px; /* Độ rộng của khối div */
    //  height: 200px; /* Độ cao của khối div */
    //  background-color: #ccc; /* Màu nền của khối div (thay đổi màu theo ý muốn) */
    //  position: absolute;
    //  top: 50%;
    //  left: 50%;
    //  transform: translate(-50%, -50%);
    //}

  }
`;

const CTA = styled.span`
  padding: 0.8rem 2rem;
  background: rgba(132, 91, 255, 0.75);
  color: white;
  border-radius: 4px;
  text-align: center;
  font-size: 2rem;
`;

const Hero: NextPage = () => {
  return (
    <HeroHolder>
      <div className="center-div">
        <h1> Ứng dụng tạo cv miễn phí dành cho người nghèo</h1>
        <div className="cta-holder">
          <Link href="/editor">
            <a>
              <CTA>Tạo CV</CTA>
            </a>
          </Link>
        </div>
      </div>
      <Image src="/hiring.svg" alt="hiring" width="300px" height="300px" priority />
    </HeroHolder>
  );
};

export default Hero;
