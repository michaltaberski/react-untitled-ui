import styled from 'styled-components';
import { DemoBox } from '../components/demo-box';
import { ColorPalette } from '../components/color-palette';
import { TypograpiesList } from '../components/typograpies-list';

const MyBox = styled(DemoBox)`
  display: flex;
  width: 100px;
  border: 2px solid red;
`;

const AboutPage = () => {
  return (
    <>
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
      <MyBox m="5">DemoBox</MyBox>
    </>
  );
};

export default AboutPage;
