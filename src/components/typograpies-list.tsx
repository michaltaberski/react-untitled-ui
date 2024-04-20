import { Box, Flex, FlexProps } from '@radix-ui/themes';
import {
  FONT_WEIGHT_MAP,
  FontWeight,
  Typography,
  typographyDefs,
} from '../theme/typography';

const typographies = Object.keys(typographyDefs) as Typography[];

export const TypograpiesList = (p: FlexProps) => {
  return (
    <Flex direction="column" gap="8" {...p}>
      {typographies.map(typography => (
        <Flex key={typography} direction="column">
          <h1>{typography}</h1>
          <Flex gap="8">
            {['regular', 'medium', 'semibold', 'bold'].map(weight => (
              <Box
                key={weight}
                style={{
                  ...typographyDefs[typography],
                  fontWeight: FONT_WEIGHT_MAP[weight as FontWeight],
                }}
              >
                {typography} {weight}
              </Box>
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
