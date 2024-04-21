import { TypograpiesList } from '../components/typograpies-list';
import { Page, PageTitle } from '../components/page';

const TypographyPage = () => {
  return (
    <Page>
      <PageTitle>Typography</PageTitle>
      <TypograpiesList />
    </Page>
  );
};

TypographyPage.title = 'Typography';

export default TypographyPage;
