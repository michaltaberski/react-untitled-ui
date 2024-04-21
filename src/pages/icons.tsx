import { Box, Flex } from '@radix-ui/themes';
import { Page, PageTitle } from '../components/page';
import { Icon, getIconNames } from '../components/icon';

const IconsPage = () => {
  return (
    <Page>
      <PageTitle>Icons</PageTitle>
      <Flex wrap="wrap">
        {getIconNames().map(iconName => (
          <Box key={iconName} m="1">
            <Icon iconName={iconName} size={24} />
          </Box>
        ))}
      </Flex>
    </Page>
  );
};

IconsPage.title = 'Icons';

export default IconsPage;
