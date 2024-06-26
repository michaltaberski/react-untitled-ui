import { Page, PageTitle } from '../components/page';
import { Icon, getIconNames } from '../components/icon';
import { Text } from '../components/text';
import { Flex } from '@/layout-helper';

const IconsPage = () => {
  return (
    <Page>
      <PageTitle>Icons</PageTitle>
      <Flex wrap="wrap" mt={4}>
        {getIconNames().map(iconName => (
          <Flex
            key={iconName}
            direction="column"
            justify="center"
            align="center"
            style={{ width: '120px', height: '80px' }}
          >
            <Icon iconName={iconName} size={24} />
            <Text
              font="text-xs/regular"
              color="grey-500"
              style={{ marginTop: 8 }}
            >
              {iconName}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Page>
  );
};

IconsPage.title = 'Icons';

export default IconsPage;
