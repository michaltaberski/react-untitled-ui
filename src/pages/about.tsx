import { ColorPalette } from '../components/color-palette';
import { TypograpiesList } from '../components/typograpies-list';
import { Icon, getIconNames } from '../components/icon';
import { Box, Flex } from '@radix-ui/themes';
import { Page, PageTitle } from '../components/page';
import { Text } from '../components/text';

const AboutPage = () => {
  return (
    <Page>
      <PageTitle>Welcome back, Olivia</PageTitle>
      <Text variant="display2xl" weight="bold">
        This is demo text component
      </Text>

      <h2>Links</h2>
      <ul>
        <li>
          <a href="https://www.untitledui.com/" target="_blank">
            Untitled UI
          </a>
        </li>
        <li>
          <a
            href="https://www.figma.com/file/2lKw23ykL8VUGOmh4TEErX/%E2%9D%96-Untitled-UI-%E2%80%93-FREE-Figma-UI-kit-and-design-system-v2.0-(Community)?type=design&node-id=1023-36350&mode=design&t=XI3hpiLjZeKtv7HT-0"
            target="_blank"
          >
            Figma
          </a>
        </li>
        <li>
          <a
            href="https://www.radix-ui.com/themes/docs/components/box"
            target="_blank"
          >
            Radix UI (layout)
          </a>
        </li>
      </ul>
      <ColorPalette />
      <TypograpiesList />
      <h1>Icons</h1>
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

export default AboutPage;
