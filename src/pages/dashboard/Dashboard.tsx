import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Nav from 'components/Nav';
import ProcessingMethodBox from 'components/ProcessingMethodBox';
import InfoTextBox from 'components/InfoTextBox';

const ContentContainer = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  width: 1130px;
`;

const RequestText = styled.p`
  font-size: 20px;
  line-height: 1.6;
  font-weight: 600;
`;

const RequestInfoText = styled.div`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
`;

const FilterContainer = styled.div`
  display: flex;
  margin-top: 32px;
`;

const RequestContainer = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`;

const RequestBox = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 24px 16px;
  width: 366px;
  height: 356px;
`;

const TopContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RequestName = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

const ConsultationTextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 24px;
  border-radius: 12px;
  border: 1px solid #ffa000;
`;

const ConsultationText = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #ffa000;
`;

const ClientName = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

const Date = styled.div``;

// const ContentContainer = styled.div`

// `;

// const ContentContainer = styled.div`

// `;

// const ContentContainer = styled.div`

// `;

// const ContentContainer = styled.div`

// `;

// const ContentContainer = styled.div`

// `;

// const ContentContainer = styled.div`

// `;

// const ContentContainer = styled.div`

// `;

export default function Dashboard() {
  type dataType = {
    id: number;
    title: string;
    client: string;
    due: string;
    count: number;
    amount: number;
    method: string[];
    material: string[];
    status: string;
  };
  const [data, setData] = useState<any>();
  const a: string = '가공방식';
  //a
  // useEffect(() => {
  //   (async () => {
  //     const data = await fetch('http://localhost:4000/requests').then((res) =>
  //       res.json()
  //     );
  //     setData(data);
  //   })();
  // }, []);

  useEffect(() => {
    setData(dataaaa);
  }, []);

  console.log(dataaaa[1].status);

  return (
    <>
      <Nav />
      <ContentContainer>
        <RequestText>들어온 요청</RequestText>
        <RequestInfoText>
          파트너님에게 딱 맞는 요청서를 찾아보세요.
        </RequestInfoText>
        <FilterContainer>
          <ProcessingMethodBox text="가공방식" />
          <ProcessingMethodBox text="재료" />
        </FilterContainer>
        <RequestContainer>
          {dataaaa.map((ele, idx) => (
            <RequestBox key={idx}>
              <TopContentBox>
                <RequestName>{ele.title}</RequestName>
                {dataaaa[idx].status === '상담중' ? (
                  <ConsultationTextBox>
                    <ConsultationText>상담중</ConsultationText>
                  </ConsultationTextBox>
                ) : (
                  <div />
                )}
              </TopContentBox>
              <ClientName>{ele.client}</ClientName>
              <Date>{ele.due}까지 납기</Date>
              <InfoTextBox LeftText="도면개수" RightText={ele.count + '개'} />
              <InfoTextBox LeftText="총 수량" RightText={ele.amount + '개'} />
              <InfoTextBox LeftText="가공방식" RightText={ele.method} />
              <InfoTextBox LeftText="재료" RightText={ele.material} />
            </RequestBox>
          ))}
        </RequestContainer>
      </ContentContainer>
    </>
  );
}

const dataaaa = [
  {
    id: 1,
    title: '자동차 시제품 제작',
    client: 'A 고객사',
    due: '2020.12.14',
    count: 2,
    amount: 100,
    method: ['밀링', '선반'],
    material: ['알루미늄'],
    status: '대기중',
  },
  {
    id: 2,
    title: '비행기 시제품 제작',
    client: 'B 고객사',
    due: '2020.12.13',
    count: 2,
    amount: 100,
    method: ['선반'],
    material: ['탄소강', '강철'],
    status: '상담중',
  },
  {
    id: 3,
    title: '기차 시제품 제작',
    client: 'C 고객사',
    due: '2020.12.12',
    count: 1,
    amount: 20,
    method: ['선반'],
    material: ['구리'],
    status: '대기중',
  },
  {
    id: 4,
    title: '자전거 시제품 제작',
    client: 'D 고객사',
    due: '2020.12.11',
    count: 1,
    amount: 45,
    method: ['선반'],
    material: ['스테인리스강'],
    status: '대기중',
  },
  {
    id: 5,
    title: '헬리콥터 시제품 제작',
    client: 'E 업체',
    due: '2020.12.10',
    count: 2,
    amount: 2,
    method: ['밀링'],
    material: ['알루미늄', '탄소강'],
    status: '대기중',
  },
  {
    id: 6,
    title: '전동 킥보드 시제품 제작',
    client: 'F 업체',
    due: '2020.12.09',
    docs: 1,
    amount: 20,
    method: ['밀링'],
    material: ['강철'],
    status: '대기중',
  },
];
