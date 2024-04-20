// eslint-disable-next-line react-refresh/only-export-components
const ICONS = import.meta.glob('../assets/icons/*.svg', { as: 'raw' });

const blank = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
  </svg>
`;

const loadIcons = async () => {
  return await Promise.all(
    Object.entries(ICONS).map(async ([path, iconModule]) => {
      const name = path.replace('../assets/icons/', '').replace('.svg', '');
      const icon = await iconModule();
      return { name, icon };
    }),
  );
};
