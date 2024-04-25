import { Page, PageTitle } from '../components/page';
import { Icon, getIconNames } from '../components/icon';
import { Text } from '../components/text';
import { Flex } from '@/lh';

const IconsPage = () => {
  return (
    <Page>
      <PageTitle>Icons</PageTitle>
      <Flex wrap="wrap">
        {getIconNames().map(iconName => (
          <Flex
            key={iconName}
            m={1}
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
