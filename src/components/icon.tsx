/* eslint-disable react-refresh/only-export-components */
import { ColorKey, getColor } from '../tokens/color';
import { extractMarginPaddingProps } from '@/lh';

const ICONS: Partial<Record<IconName, string>> = {};
const ICONS_IMPORT = import.meta.glob('../assets/icons/*.svg', { as: 'raw' });

export const getIconNames = () => Object.keys(ICONS) as IconName[];

export const loadIconsPromise = (async () => {
  if (Object.keys(ICONS).length) return;
  await Promise.all(
    Object.entries(ICONS_IMPORT).map(async ([path, iconModule]) => {
      const name = path.replace('../assets/icons/', '').replace('.svg', '');
      const icon = await iconModule();
      ICONS[name as IconName] = icon;
    }),
  );
})();

type IconProps = {
  iconName: IconName;
  color?: ColorKey;
  style?: React.CSSProperties;
  className?: string;
  size?: number;
};

const sanitizeSvg = (svg: string) =>
  svg
    .replace(
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">',
      '',
    )
    .replace('</svg>', '');

export const Icon = (p: IconProps) => {
  const {
    iconName,
    color: colorKey,
    size = 20,
    ...props
  } = extractMarginPaddingProps(p);
  const color = colorKey && getColor(colorKey);
  const iconSrc = sanitizeSvg(ICONS[iconName] || '');
  return (
    <svg
      {...props}
      style={{ ...(color ? { color } : {}), ...(props.style || {}) }}
      viewBox="0 0 24 24"
      fill="none"
      width={size}
      height={size}
      dangerouslySetInnerHTML={{ __html: iconSrc }}
    />
  );
};

export type IconName =
  | '2-layers'
  | '3-layers'
  | 'activity'
  | 'airplay'
  | 'alert-circle'
  | 'alert-octagon'
  | 'alert-triangle'
  | 'align-center'
  | 'align-justify'
  | 'align-left'
  | 'align-right'
  | 'anchor'
  | 'aperture'
  | 'archive'
  | 'arrow-down-circle'
  | 'arrow-down-left'
  | 'arrow-down-right'
  | 'arrow-down'
  | 'arrow-left-circle'
  | 'arrow-left'
  | 'arrow-right-circle'
  | 'arrow-right'
  | 'arrow-up-circle'
  | 'arrow-up-left'
  | 'arrow-up-right'
  | 'arrow-up'
  | 'at-sign'
  | 'award'
  | 'bar-chart-2'
  | 'bar-chart'
  | 'battery-charging'
  | 'battery'
  | 'bell-off'
  | 'bell'
  | 'blank'
  | 'bluetooth'
  | 'bold'
  | 'book-open'
  | 'book'
  | 'bookmark'
  | 'box'
  | 'briefcase'
  | 'calendar'
  | 'camera-off'
  | 'camera'
  | 'cast'
  | 'check-circle'
  | 'check-square'
  | 'check'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'chevrons-down'
  | 'chevrons-left'
  | 'chevrons-right'
  | 'chevrons-up'
  | 'chrome'
  | 'circle'
  | 'clipboard'
  | 'clock'
  | 'cloud-drizzle'
  | 'cloud-lightning'
  | 'cloud-off'
  | 'cloud-rain'
  | 'cloud-snow'
  | 'cloud'
  | 'code'
  | 'codepen'
  | 'codesandbox'
  | 'coffee'
  | 'coin-stack'
  | 'coins'
  | 'columns'
  | 'command'
  | 'compass'
  | 'copy'
  | 'corner-down-left'
  | 'corner-down-right'
  | 'corner-left-down'
  | 'corner-left-up'
  | 'corner-right-down'
  | 'corner-right-up'
  | 'corner-up-left'
  | 'corner-up-right'
  | 'cpu'
  | 'credit-card'
  | 'crop'
  | 'crosshair'
  | 'database'
  | 'delete'
  | 'disc'
  | 'divide-circle'
  | 'divide-square'
  | 'divide'
  | 'dollar-sign'
  | 'download-cloud'
  | 'download'
  | 'dribbble'
  | 'droplet'
  | 'edit-2'
  | 'edit-3'
  | 'edit'
  | 'external-link'
  | 'eye-off'
  | 'eye'
  | 'facebook'
  | 'fast-forward'
  | 'feather'
  | 'figma'
  | 'file-minus'
  | 'file-plus'
  | 'file-text'
  | 'file'
  | 'film'
  | 'filter'
  | 'filters-lines'
  | 'flag'
  | 'folder-minus'
  | 'folder-plus'
  | 'folder'
  | 'framer'
  | 'frown'
  | 'gift'
  | 'git-branch'
  | 'git-commit'
  | 'git-merge'
  | 'git-pull-request'
  | 'github'
  | 'gitlab'
  | 'globe'
  | 'grid'
  | 'hard-drive'
  | 'hash'
  | 'headphones'
  | 'heart'
  | 'help-circle'
  | 'hexagon'
  | 'home'
  | 'image'
  | 'inbox'
  | 'info'
  | 'instagram'
  | 'italic'
  | 'key'
  | 'layout'
  | 'life-buoy'
  | 'link-2'
  | 'link'
  | 'linkedin'
  | 'list'
  | 'loader'
  | 'lock'
  | 'log-in'
  | 'log-out'
  | 'mail'
  | 'map-pin'
  | 'map'
  | 'maximize-2'
  | 'maximize'
  | 'meh'
  | 'menu-2'
  | 'menu'
  | 'message-circle'
  | 'message-square'
  | 'mic-off'
  | 'mic'
  | 'minimize-2'
  | 'minimize'
  | 'minus-circle'
  | 'minus-square'
  | 'minus'
  | 'monitor'
  | 'moon'
  | 'more-horizontal'
  | 'more-vertical'
  | 'mouse-pointer'
  | 'move'
  | 'music'
  | 'navigation-2'
  | 'navigation'
  | 'octagon'
  | 'package'
  | 'paperclip'
  | 'pause-circle'
  | 'pause'
  | 'pen-tool'
  | 'percent'
  | 'phone-call'
  | 'phone-forwarded'
  | 'phone-incoming'
  | 'phone-missed'
  | 'phone-off'
  | 'phone-outgoing'
  | 'phone'
  | 'pie-chart'
  | 'play-circle'
  | 'play'
  | 'plus-circle'
  | 'plus-square'
  | 'plus'
  | 'pocket'
  | 'power'
  | 'printer'
  | 'radio'
  | 'refresh-ccw'
  | 'refresh-cw'
  | 'repeat'
  | 'rewind'
  | 'rocket'
  | 'rotate-ccw'
  | 'rotate-cw'
  | 'rss'
  | 'save'
  | 'scissors'
  | 'search'
  | 'send'
  | 'server'
  | 'settings'
  | 'share-2'
  | 'share'
  | 'shield-off'
  | 'shield'
  | 'shopping-bag'
  | 'shopping-cart'
  | 'shuffle'
  | 'sidebar'
  | 'skip-back'
  | 'skip-forward'
  | 'slack'
  | 'slash-divider'
  | 'slash'
  | 'sliders'
  | 'smartphone'
  | 'smile'
  | 'speaker'
  | 'square'
  | 'star'
  | 'stop-circle'
  | 'sun'
  | 'sunrise'
  | 'sunset'
  | 'tablet'
  | 'tag'
  | 'target'
  | 'terminal'
  | 'thermometer'
  | 'thumbs-down'
  | 'thumbs-up'
  | 'toggle-left'
  | 'toggle-right'
  | 'tool'
  | 'trash-2'
  | 'trash'
  | 'trello'
  | 'trending-down'
  | 'trending-up'
  | 'triangle'
  | 'truck'
  | 'tv'
  | 'twitch'
  | 'twitter'
  | 'type'
  | 'umbrella'
  | 'underline'
  | 'unlock'
  | 'upload-cloud'
  | 'upload'
  | 'user-check'
  | 'user-minus'
  | 'user-plus'
  | 'user-x'
  | 'user'
  | 'users'
  | 'video-off'
  | 'video'
  | 'voicemail'
  | 'volume-1'
  | 'volume-2'
  | 'volume-x'
  | 'volume'
  | 'watch'
  | 'wifi-off'
  | 'wifi'
  | 'wind'
  | 'x-circle'
  | 'x-octagon'
  | 'x-square'
  | 'x'
  | 'youtube'
  | 'zap-off'
  | 'zap'
  | 'zoom-in'
  | 'zoom-out';
