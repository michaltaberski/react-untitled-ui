// Styles
import '@radix-ui/themes/layout.css';

import { Theme } from '@radix-ui/themes';
import { DemoBox } from './DemoBox';

function App() {
  return (
    <Theme>
      <DemoBox m="8">Demo box</DemoBox>
    </Theme>
  );
}

export default App;
