import { Box, Flex, FlexProps } from '@radix-ui/themes';
import { color } from '../theme/color';

const Swatch = ({ color, size = 80 }: { color: string; size?: number }) => (
  <Box style={{ width: size, height: size, backgroundColor: color }} />
);

export const ColorPalette = (p: FlexProps) => {
  return (
    <Flex direction="column" gap="8" {...p}>
      {Object.entries(color).map(([colorName, colorPalette]) => (
        <Flex key={colorName} direction="column">
          <h1>{colorName}</h1>
          <Flex gap="4" wrap="wrap">
            {Object.entries(colorPalette).map(([colorShade, colorValue]) => (
              <Box key={colorValue}>
                <Swatch color={colorValue} />
                {colorName}-{colorShade}
              </Box>
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
