import { palettes } from '../tokens/color';
import { Text } from './text';
import { Card } from './card';
import { capitalize } from 'lodash';
import { Box, Flex, FlexProps } from '@/lh';

const Swatch = ({ color, size = 120 }: { color: string; size?: number }) => (
  <Box
    style={{ width: size, height: size * (2 / 3), backgroundColor: color }}
  />
);

export const ColorPalette = (p: FlexProps) => {
  return (
    <Flex direction="column" gap={4} mt={4} {...p}>
      {Object.entries(palettes).map(([colorName, colorPalette]) => (
        <Flex key={colorName} direction="column" gap={2}>
          <Text as="h1" font="text-lg/semibold">
            {capitalize(colorName)}
          </Text>
          <Flex gap={2} wrap="wrap">
            {Object.entries(colorPalette).map(([colorShade, colorValue]) => (
              <Card
                key={colorValue}
                style={{ overflow: 'hidden' }}
                shadow="shadow-xs"
              >
                <Swatch color={colorValue} />
                <Box style={{ padding: 8 }}>
                  <Text as="div" font="text-xs/medium" color="grey-700">
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
