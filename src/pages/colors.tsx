import { ColorPalette } from '../components/color-palette';
import { Page, PageTitle } from '../components/page';

const ColorsPage = () => {
  return (
    <Page>
      <PageTitle>Colors</PageTitle>
      <ColorPalette />
    </Page>
  );
};

ColorsPage.title = 'Colors';

export default ColorsPage;
