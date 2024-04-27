import { Badge } from '@/components/badge';
import { Page, PageTitle } from '../components/page';
import { Flex } from '@/layout-helper';
import { PaletteKey } from '@/tokens/color';

const BadgePage = () => {
  return (
    <Page>
      <PageTitle>Badge</PageTitle>
      <Flex mt={4} gap={2} direction="column" align="flex-start">
        {(
          [
            'grey',
            'brand',
            'error',
            'warning',
            'success',
            'blue-gray',
            'blue-light',
            'blue',
            'indigo',
            'purple',
            'pink',
            'rose',
            'orange',
          ] as PaletteKey[]
        ).map(color => (
          <Flex key={color} gap={2} align="flex-start">
            {(['sm', 'md', 'lg'] as const).map(size => (
              <Badge
                key={size}
                color={color}
                size={size}
                label={`Label ${size.toUpperCase()}`}
              />
            ))}
          </Flex>
        ))}
      </Flex>
    </Page>
  );
};

BadgePage.title = 'Badge';

export default BadgePage;
