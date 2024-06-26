import { Flex } from '@/layout-helper';
import { Page, PageTitle } from '../components/page';
import { Button, ButtonSize, ButtonType } from '@/components/button';

const ButtonPage = () => {
  return (
    <Page>
      <PageTitle>Button</PageTitle>
      <Flex direction="column" gap={8} mt={4}>
        <Flex direction="column" gap={4}>
          {(
            [
              'primary',
              'secondary',
              'secondary-grey',
              'tertiary',
              'destructive-primary',
              'destructive-secondary',
              'destructive-tertiary',
            ] as ButtonType[]
          ).map(buttonType => (
            <Flex key={buttonType} gap={3} align="flex-start">
              <Button buttonSize="sm" buttonType={buttonType} isDisabled>
                Button disabled
              </Button>
              {(['sm', 'md', 'lg', 'xl', '2xl'] as ButtonSize[]).map(size => (
                <Button key={size} buttonSize={size} buttonType={buttonType}>
                  Button CTA
                </Button>
              ))}
            </Flex>
          ))}
        </Flex>
        <Flex direction="column" gap={4}>
          {(
            [
              'primary',
              'secondary',
              'secondary-grey',
              'tertiary',
              'destructive-primary',
              'destructive-secondary',
              'destructive-tertiary',
            ] as ButtonType[]
          ).map(buttonType => (
            <Flex key={buttonType} gap={3} align="flex-start">
              <Button
                buttonSize="sm"
                buttonType={buttonType}
                iconName="activity"
                isDisabled
              >
                Button CTA
              </Button>
              {(['sm', 'md', 'lg', 'xl', '2xl'] as ButtonSize[]).map(size => (
                <Button
                  key={size}
                  buttonSize={size}
                  buttonType={buttonType}
                  iconName="activity"
                >
                  Button CTA
                </Button>
              ))}
            </Flex>
          ))}
        </Flex>
        <Flex direction="column" gap={4}>
          {(
            [
              'primary',
              'secondary',
              'secondary-grey',
              'tertiary',
              'destructive-primary',
              'destructive-secondary',
              'destructive-tertiary',
            ] as ButtonType[]
          ).map(buttonType => (
            <Flex key={buttonType} gap={3} align="flex-start">
              <Button
                buttonSize="sm"
                buttonType={buttonType}
                endIconName="activity"
                isDisabled
              >
                Button CTA
              </Button>
              {(['sm', 'md', 'lg', 'xl', '2xl'] as ButtonSize[]).map(size => (
                <Button
                  key={size}
                  buttonSize={size}
                  buttonType={buttonType}
                  endIconName="activity"
                >
                  Button CTA
                </Button>
              ))}
            </Flex>
          ))}
        </Flex>
        <Flex direction="column" gap={4}>
          {(
            [
              'primary',
              'secondary',
              'secondary-grey',
              'tertiary',
              'destructive-primary',
              'destructive-secondary',
              'destructive-tertiary',
            ] as ButtonType[]
          ).map(buttonType => (
            <Flex key={buttonType} gap={3} align="flex-start">
              <Button
                buttonSize="sm"
                buttonType={buttonType}
                iconName="activity"
                isDisabled
              />
              {(['sm', 'md', 'lg', 'xl', '2xl'] as ButtonSize[]).map(size => (
                <Button
                  key={size}
                  buttonSize={size}
                  buttonType={buttonType}
                  iconName="activity"
                />
              ))}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Page>
  );
};

ButtonPage.title = 'Button';

export default ButtonPage;
