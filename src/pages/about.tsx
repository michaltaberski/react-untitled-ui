import { ColorPalette } from '../components/color-palette';
import { TypograpiesList } from '../components/typograpies-list';
import { Page, PageTitle } from '../components/page';
import { Text } from '../components/text';
import { withDefaultProps } from '../utils/with-default-props';

const Subtitle = withDefaultProps(Text, {
  variant: 'textLg',
  weight: 'semibold',
  as: 'h2',
});

const AboutPage = () => {
  return (
    <Page>
      <PageTitle>UntitledUI</PageTitle>
      <Subtitle>Links</Subtitle>
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
    </Page>
  );
};

export default AboutPage;
