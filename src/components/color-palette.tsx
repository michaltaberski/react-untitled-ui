import { Box, Flex, FlexProps } from '@radix-ui/themes';
import { palettes } from '../tokens/color';
import { Text } from './text';
import { Card } from './card';
import { capitalize } from 'lodash';

const Swatch = ({ color, size = 90 }: { color: string; size?: number }) => (
  <Box
    style={{ width: size, height: size * (2 / 3), backgroundColor: color }}
  />
);

export const ColorPalette = (p: FlexProps) => {
  return (
    <Flex direction="column" gap="6" {...p}>
      {Object.entries(palettes).map(([colorName, colorPalette]) => (
        <Flex key={colorName} direction="column">
          <Text as="h1" font="text-lg/semibold" style={{ marginBottom: 8 }}>
            {capitalize(colorName)}
          </Text>
          <Flex gap="3" wrap="wrap">
            {Object.entries(colorPalette).map(([colorShade, colorValue]) => (
              <Card
                key={colorValue}
                style={{ overflow: 'hidden' }}
                shadow="shadow-xs"
              >
                <Swatch color={colorValue} />
                <Box style={{ padding: 8 }}>
                  <Text
                    as="div"
                    font="text-xs/medium"
                    color="grey-700"
                    style={{ maxWidth: 70 }}
                  >
                    {colorName}-{colorShade}
                  </Text>
                  <Text as="div" font="text-xs/regular" color="grey-600">
                    {colorValue}
                  </Text>
                </Box>
              </Card>
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
