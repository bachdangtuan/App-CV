import React from 'react';
import styled from 'styled-components';
import Image from "next/image";

const Container = styled.section``;

const EducationContainer = styled.section`
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }

  line-height: 20px;

  .certification_demo {
    display: flex;
    align-items: center;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__course {
      font-size: 14px;
      padding-left: 10px;
      font-weight: 600;
    }
  }

  .institution {
    font-weight: 600;
  }

  .score {
    span {
      font-weight: 600;
    }
  }
`;

function EducationEntry({certification}: any) {
    return (
        <EducationContainer>
            <div className="header">
                <a className="certification_demo"
                   href={certification.url} target="_blank">
                    <Image src={certification.images} alt="No account" height="50px" width="50px"/>
                    <p className="header__course">
                        {certification.nameCert}
                    </p>
                </a>
                <p className="header__year">
                    {certification.startDate} {certification.endDate ? ` - ${certification.endDate}` : ''}
                </p>
            </div>
        </EducationContainer>

    );
}

export default function Certification({data}: any) {
    // console.log(data)
    if (!data?.length) return null;

    return (
        <Container>
            {data.map((certification, i) => (
                <EducationEntry key={i} certification={certification}/>
            ))}

        </Container>
    );
}
