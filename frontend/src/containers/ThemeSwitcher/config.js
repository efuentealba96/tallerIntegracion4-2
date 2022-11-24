import { themeConfig } from '@iso/config/theme/theme.config';
const changeThemes = {
  id: 'changeThemes',
  label: 'themeSwitcher',
  defaultTheme: themeConfig.theme,
  options: [
    {
      themeName: 'defaultTheme',
      buttonColor: '#ffffff',
      textColor: '#323332',
    },
    {
      themeName: 'theme2',
      buttonColor: '#ffffff',
      textColor: '#323332',
    },
  ],
};
const topbarTheme = {
  id: 'topbarTheme',
  label: 'themeSwitcher.Topbar',
  defaultTheme: themeConfig.topbar,
  options: [
    {
      themeName: 'defaultTheme',
      buttonColor: '#ffffff',
      textColor: '#323332',
    },
    {
      themeName: 'theme1',
      buttonColor: '#eb0e2b',
      backgroundColor: '#eb0e2b',
      textColor: '#ffffff',
    },
    {
      themeName: 'theme2',
      buttonColor: '#6534ff',
      backgroundColor: '#6534ff',
      textColor: '#ffffff',
    },
    {
      themeName: 'theme3',
      buttonColor: '#4482FF',
      backgroundColor: '#4482FF',
      textColor: '#ffffff',
    },
    {
      themeName: 'theme4',
      buttonColor: '#422e62',
      backgroundColor: '#422e62',
      textColor: '#ffffff',
    },
    {
      themeName: 'theme5',
      buttonColor: '#22144c',
      backgroundColor: '#22144c',
      textColor: '#ffffff',
    },
    {
      themeName: 'theme6',
      buttonColor: '#4670a2',
      backgroundColor: '#4670a2',
      textColor: '#ffffff',
    },
    {
      themeName: 'theme7',
      buttonColor: '#494982',
      backgroundColor: '#494982',
      textColor: '#ffffff',
    },
  ],
};
const sidebarTheme = {
  id: 'sidebarTheme',
  label: 'themeSwitcher.Sidebar',
  defaultTheme: themeConfig.sidebar,
  options: [
    {
      themeName: 'defaultTheme',
      buttonColor: '#323332',
      backgroundColor: undefined,
      textColor: '#788195',
    },
    {
      themeName: 'theme1',
      buttonColor: '#eb0e2b',
      backgroundColor: '#eb0e2b',
      textColor: '#ffffff',
    },
    {
      themeName: 'theme2',
      buttonColor: '#6534ff',
      backgroundColor: '#6534ff',
      textColor: '#ffffff',
    },
    {
      themeName: 'theme3',
      buttonColor: '#4482FF',
      backgroundColor: '#4482FF',
      textColor: '#ffffff',
    },
    {
      themeName: 'theme4',
      buttonColor: '#422e62',
      backgroundColor: '#422e62',
      textColor: '#ffffff',
    },
    {
      themeName: 'theme5',
      buttonColor: '#22144c',
      backgroundColor: '#22144c',
      textColor: '#ffffff',
    },
    {
      themeName: 'theme6',
      buttonColor: '#4670a2',
      backgroundColor: '#4670a2',
      textColor: '#ffffff',
    },
    {
      themeName: 'theme7',
      buttonColor: '#494982',
      backgroundColor: '#494982',
      textColor: '#ffffff',
    },
  ],
};
const layoutTheme = {
  id: 'layoutTheme',
  label: 'themeSwitcher.Background',
  defaultTheme: themeConfig.layout,
  options: [
    {
      themeName: 'defaultTheme',
      buttonColor: '#ffffff',
      backgroundColor: '#F1F3F6',
      textColor: undefined,
    },
    {
      themeName: 'theme1',
      buttonColor: '#1058de',
      backgroundColor: '#1058de',
      textColor: '#323232',
    },
    {
      themeName: 'theme2',
      buttonColor: '#b80b0b',
      backgroundColor: '#b80b0b',
      textColor: '#ffffff',
    },
    {
      themeName: 'theme3',
      buttonColor: '#01031a',
      backgroundColor: '#01031a',
      textColor: '#ffffff',
    },
  ],
};
const customizedThemes = {
  changeThemes,
  topbarTheme,
  sidebarTheme,
  layoutTheme,
};
export function getCurrentTheme(attribute, selectedThemename) {
  let selecetedTheme = {};
  customizedThemes[attribute].options.forEach(theme => {
    if (theme.themeName === selectedThemename) {
      selecetedTheme = theme;
    }
  });
  return selecetedTheme;
}
export default customizedThemes;
