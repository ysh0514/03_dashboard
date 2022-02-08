import { useEffect, useState } from 'react';
import { useRequestApi, IRequestInfoProps } from 'hooks';
import { ARROW, LOGO, WHITE_ICON } from 'assets/images';
import { DashboardStyle } from 'assets/styles';
import { Card, Material, Menu, Method, Toggle } from 'components';

const {
  Container,
  Header,
  Logo,
  SubMenu,
  Icon,
  MenuTitle,
  Bar,
  Title,
  SubTitle,
  DropDownWrapper,
  InnerFlex,
  BigDropDown,
  SmallDropDown,
  DropDownTitle,
  Arrow,
  StatusText,
  CheckBoxContainer,
  CheckBoxWrapper,
  CheckBox,
  Grid,
} = DashboardStyle;

export default function Dashboard() {
  const [data, setData] = useState<Array<IRequestInfoProps>>([]);
  const [showMethod, setShowMethod] = useState<boolean>(false);
  const [showMaterial, setShowMaterial] = useState<boolean>(false);
  const [isClick, setIsClick] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const [method, setMethod] = useState<number[]>([]);
  const [material, setMaterial] = useState<number[]>([]);
  const [params, setParams] = useState<{
    method?: string;
    material?: string;
    status?: string;
  }>({});

  const apiParams = { url: '/requests', method: 'GET', params: {} };
  const { response, onApiRequest } = useRequestApi(apiParams);

  function onChangeMethod(i: number) {
    if (method.includes(i)) {
      const arr = method.filter((e) => e !== i);
      arr.sort();
      setMethod(arr);
    } else {
      const arr = [...method];
      arr.push(i);
      arr.sort();
      setMethod(arr);
    }
  }

  function onChangeMaterial(i: number) {
    if (material.includes(i)) {
      const arr = material.filter((e) => e !== i);
      arr.sort();
      setMaterial(arr);
    } else {
      const arr = [...material];
      arr.push(i);
      arr.sort();
      setMaterial(arr);
    }
  }

  useEffect(() => {
    if (method.length) {
      const temp = [];
      for (let el of method) {
        temp.push(Method[el]);
      }
      const param = temp.toString();
      setParams({
        ...params,
        method: param,
      });
    } else {
      delete params.method;
      setParams({ ...params });
    }
  }, [method]);

  useEffect(() => {
    if (material.length) {
      const temp = [];
      for (let el of material) {
        temp.push(Material[el]);
      }
      const param = temp.toString();
      setParams({
        ...params,
        material: param,
      });
    } else {
      delete params.material;
      setParams({ ...params });
    }
  }, [material]);

  useEffect(() => {
    console.log(isClick);
    if (isClick) {
      setParams({
        ...params,
        status: '상담중',
      });
    } else {
      delete params.status;
      setParams({ ...params });
    }
  }, [isClick]);

  useEffect(() => {
    onApiRequest({ ...apiParams, params });
  }, [params]);

  useEffect(() => {
    if (!response) return;
    setData(response.data);
  }, [response]);

  const methodClick = () => {
    setShowMethod((curr) => !curr);
    if (showMaterial) {
      setShowMaterial(false);
    }
  };

  const materialClick = () => {
    setShowMaterial((curr) => !curr);
    if (showMethod) {
      setShowMethod(false);
    }
  };

  const menuButtonClick = () => {
    setShowMenu((curr) => !curr);
  };

  const toggleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <Header>
        <button onClick={menuButtonClick}>
          <Logo src={LOGO} alt="로고" />
        </button>
        <SubMenu>
          <Icon src={WHITE_ICON} alt="건물 이미지" />
          <MenuTitle>A 가공 업체</MenuTitle>
          <Bar />
          <MenuTitle>로그아웃</MenuTitle>
        </SubMenu>
      </Header>
      <Container>
        <Title>들어온 요청</Title>
        <SubTitle>파트너님에게 딱 맞는 요청서를 찾아보세요.</SubTitle>

        <DropDownWrapper>
          <InnerFlex>
            <BigDropDown onClick={methodClick}>
              <DropDownTitle>가공방식</DropDownTitle>
              <Arrow src={ARROW} alt="드롭 다운 화살표" />
            </BigDropDown>
            <SmallDropDown onClick={materialClick}>
              <DropDownTitle>재료</DropDownTitle>
              <Arrow src={ARROW} alt="드롭 다운 화살표" />
            </SmallDropDown>
          </InnerFlex>
          <InnerFlex>
            <Toggle toggleClick={toggleClick} />
          </InnerFlex>
        </DropDownWrapper>
        {showMethod && (
          <CheckBoxContainer>
            {Method.map((e, i) => (
              <CheckBoxWrapper key={i}>
                <CheckBox
                  type="checkbox"
                  id="scales"
                  name="scales"
                  defaultChecked={method.includes(i)}
                  onClick={() => onChangeMethod(i)}
                />
                <label htmlFor="scales">{e}</label>
              </CheckBoxWrapper>
            ))}
          </CheckBoxContainer>
        )}
        {showMaterial && (
          <CheckBoxContainer style={{ marginLeft: '105px' }}>
            {Material.map((e, i) => (
              <CheckBoxWrapper key={i}>
                <CheckBox
                  type="checkbox"
                  id="scales"
                  name="scales"
                  defaultChecked={material.includes(i)}
                  onClick={() => {
                    onChangeMaterial(i);
                  }}
                />
                <label htmlFor="scales">{e}</label>
              </CheckBoxWrapper>
            ))}
          </CheckBoxContainer>
        )}

        <Grid>
          {data.map((data: IRequestInfoProps) => (
            <Card key={data.id} data={data} />
          ))}
        </Grid>
        {showMenu && <Menu />}
      </Container>
    </>
  );
}
