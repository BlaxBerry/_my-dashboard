/**
 * 判断应用是否应处于黑暗模式
 *
 * - 跟随系统自动切换
 * - 该函数主要用于定义 Redux 中 存储的默认值
 */
export const isSystemDarkMode = (): boolean => {
  const mediaQueryPrefers = matchMedia("(prefers-color-scheme: dark)");
  const isDark = mediaQueryPrefers.matches;
  return isDark;
};
