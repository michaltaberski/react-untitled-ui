import { Flex, FlexProps } from '@radix-ui/themes';
import {
  FONT_WEIGHT_MAP,
  FontKey,
  FontWeight,
  Typography,
  typographyDefs,
} from '../tokens/typography';
import { Text } from './text';

const typographies = Object.keys(typographyDefs) as Typography[];
const weights = Object.keys(FONT_WEIGHT_MAP) as FontWeight[];

export const TypograpiesList = (p: FlexProps) => {
  return (
    <Flex direction="column" gap="8" {...p}>
      {typographies.map(typography => (
        <Flex key={typography} direction="column">
          <h1>{typography}</h1>
          <Flex gap="8" direction="column">
            {weights.map(weight => (
              <Text
                key={weight}
                font={[typography, weight].join('/') as FontKey}
              >
                {typography} {weight}
              </Text>
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
