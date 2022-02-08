import { useEffect, useState } from 'react';
import { useRequestApi, IRequestInfoProps } from '../../hooks';
import { Card, Menu } from '../../components';
import { DashboardStyle } from 'assets/styles';
import Nav from '../../components/Nav';
import Header from 'components/Header';
import { NoResults } from 'components/NoResults';
const { Container, Grid } = DashboardStyle;

export default function Dashboard() {
  const [data, setData] = useState<Array<IRequestInfoProps>>([]);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [params, setParams] = useState<{
    method?: string;
    material?: string;
    status?: string;
  }>({});

  const apiParams = { url: '/requests', method: 'GET', params: {} };
  const { response, onApiRequest } = useRequestApi(apiParams);

  useEffect(() => {
    onApiRequest({ ...apiParams, params });
  }, [params]);

  useEffect(() => {
    if (!response) return;
    setData(response.data);
  }, [response]);

  return (
    <>
      <Nav />
      <Container>
        <Header
          params={params}
          setParams={setParams}
          setShowMenu={setShowMenu}
        />
        <Grid>
          {data.map((data: IRequestInfoProps) => (
            <Card key={data.id} data={data} />
          ))}
        </Grid>
        {!data.length && <NoResults />}
        {showMenu && <Menu />}
      </Container>
    </>
  );
}
