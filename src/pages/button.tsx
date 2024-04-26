import { Flex } from '@/layout-helper';
import { Page, PageTitle } from '../components/page';
import { Button, ButtonSize, ButtonType } from '@/components/button';

const ButtonPage = () => {
  return (
    <Page>
      <PageTitle>Button</PageTitle>
      <Flex direction="column" gap={4}>
        {(
          ['primary', 'secondary', 'secondary-grey', 'tertiary'] as ButtonType[]
        ).map(buttonType => (
          <Flex gap={3} align="center">
            <Button buttonSize="sm" buttonType={buttonType} isDisabled>
              Button disabled
            </Button>
            {(['sm', 'md', 'lg', 'xl', '2xl'] as ButtonSize[]).map(size => (
              <Button key={size} buttonSize={size} buttonType={buttonType}>
                Button {size}
              </Button>
            ))}
          </Flex>
        ))}
      </Flex>
    </Page>
  );
};

ButtonPage.title = 'Button';

export default ButtonPage;
