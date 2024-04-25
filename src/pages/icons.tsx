import { Flex } from '@radix-ui/themes';
import { Page, PageTitle } from '../components/page';
import { Icon, getIconNames } from '../components/icon';
import { Text } from '../components/text';

const IconsPage = () => {
  return (
    <Page>
      <PageTitle>Icons</PageTitle>
      <Flex wrap="wrap">
        {getIconNames().map(iconName => (
          <Flex
            key={iconName}
            m="1"
            width="120px"
            height="80px"
            direction="column"
            justify="center"
            align="center"
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
