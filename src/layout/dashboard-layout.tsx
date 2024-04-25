import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { SlotLink } from '../components/slot-link';
import { getColor } from '../tokens/color';
import { Text } from '../components/text';
import Logo from './logo';
import { ROUTES } from '../utils/file-based-routing';
import { Icon, IconName } from '../components/icon';
import { Flex } from '@/lh';

const SIDEAR_WIDTH = 230;

const AppSidebarWrapper = styled(Flex).attrs({ direction: 'column' })`
  position: fixed;
  height: 100vh;

  width: ${SIDEAR_WIDTH}px;
  flex-shrink: 0;
  flex-grow: 0;
  border-right: 1px solid ${getColor('divider')};
  padding-top: 32px;
`;

const AppSidebarHeader = styled(Flex)`
  padding: 0 16px 24px;
  margin: 0 8px;
`;

const AppSidebarBody = styled(Flex).attrs({ direction: 'column' })`
  overflow: auto;
  padding: 0 16px 24px;
  flex: 1;
`;

const AppSidebarFooter = styled(Flex)`
  border-top: 1px solid ${getColor('divider')};
  padding: 24px 16px 32px;
`;

const AppMain = styled(Flex)`
  margin-left: ${SIDEAR_WIDTH}px;
  padding: 32px;
  max-width: 1280px;
`;

const AppSidebarMenuItemButton = styled.button`
  border-radius: 6px;
  display: flex;
  background-color: ${getColor('white')};
  padding: 8px 12px;
  &:hover {
    background-color: ${getColor('grey-50')};
  }

  svg {
    margin-right: 12px;
  }
`;

type AppSidebarMenuItemProps = {
  label: string;
  iconName?: IconName;
};

const AppSidebarMenuItem = ({
  iconName = 'blank',
  label,
  ...rest
}: AppSidebarMenuItemProps) => {
  return (
    <AppSidebarMenuItemButton {...rest}>
      <Icon iconName={iconName} size={24} color="grey-500" />
      <Text font="text-md/semibold" color="grey-700">
        {label}
      </Text>
    </AppSidebarMenuItemButton>
  );
};

const DashboardLayout = () => {
  return (
    <>
      <Flex>
        <AppSidebarWrapper>
          <AppSidebarHeader>
            <Logo />
          </AppSidebarHeader>
          <AppSidebarBody>
            <Flex direction="column" gap={2}>
              {ROUTES.map(({ path, title }) => (
                <SlotLink key={path} to={path}>
                  <AppSidebarMenuItem label={title} iconName="arrow-right" />
                </SlotLink>
              ))}
            </Flex>
          </AppSidebarBody>
          <AppSidebarFooter>
            <Text font="text-xs/regular" color="grey-600">
              © MT 2024
            </Text>
          </AppSidebarFooter>
        </AppSidebarWrapper>
        <AppMain>
          <Outlet />
        </AppMain>
      </Flex>
    </>
  );
};

export default DashboardLayout;
