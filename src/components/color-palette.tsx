import { Box, Flex, FlexProps } from '@radix-ui/themes';
import { palettes } from '../tokens/color';
import { Text } from './text';
import { Card } from './card';
import { capitalize } from 'lodash';

const Swatch = ({ color, size = 160 }: { color: string; size?: number }) => (
  <Box style={{ width: size, height: size / 2, backgroundColor: color }} />
);

export const ColorPalette = (p: FlexProps) => {
  return (
    <Flex direction="column" gap="8" {...p}>
      {Object.entries(palettes).map(([colorName, colorPalette]) => (
        <Flex key={colorName} direction="column">
          <Text as="h1" font="text-lg/semibold">
            {capitalize(colorName)}
          </Text>
          <Flex gap="6" wrap="wrap">
            {Object.entries(colorPalette).map(([colorShade, colorValue]) => (
              <Card
                key={colorValue}
                style={{ overflow: 'hidden' }}
                shadow="shadow-lg"
              >
                <Swatch color={colorValue} />
                <Box style={{ padding: 12 }}>
                  <Text as="div" font="text-lg/medium" color="grey-700">
                    {colorName}-{colorShade}
                  </Text>
                  <Text as="div" font="text-md/regular" color="grey-600">
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
