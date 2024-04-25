import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { SlotLink } from '../components/slot-link';
import { getColor } from '../tokens/color';
import { Text } from '../components/text';
import Logo from './logo';
import { Icon, IconName } from '../components/icon';
import { Flex } from '@/lh';

const SIDEAR_WIDTH = 230;

const AppSidebarWrapper = styled(Flex).attrs({ direction: 'column', pt: 4 })`
  position: fixed;
  height: 100vh;

  width: ${SIDEAR_WIDTH}px;
  flex-shrink: 0;
  flex-grow: 0;
  border-right: 1px solid ${getColor('divider')};
`;

const AppSidebarHeader = styled(Flex).attrs({ px: 2, pb: 3, mx: 1 })``;

const AppSidebarBody = styled(Flex).attrs({ direction: 'column' })`
  overflow: auto;
  padding: 0 16px 24px;
  flex: 1;
`;

const AppSidebarFooter = styled(Flex).attrs({ p: 2 })`
  border-top: 1px solid ${getColor('divider')};
`;

const AppMain = styled(Flex).attrs({ p: 4 })`
  margin-left: ${SIDEAR_WIDTH}px;
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

export type SidebarLinkProps = {
  to: string;
  label: string;
  iconName: IconName;
};

type DashboardLayoutProps = {
  links: SidebarLinkProps[];
};

const DashboardLayout = ({ links }: DashboardLayoutProps) => {
  return (
    <>
      <Flex>
        <AppSidebarWrapper>
          <AppSidebarHeader>
            <Logo />
          </AppSidebarHeader>
          <AppSidebarBody>
            <Flex direction="column" gap={2}>
              {links.map(({ to, label, iconName }) => (
                <SlotLink key={to} to={to}>
                  <AppSidebarMenuItem label={label} iconName={iconName} />
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
