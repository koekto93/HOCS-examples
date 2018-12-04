//ф-я вытягивает название компонента, который мы оборачиваем
const getDisplayName = Component => {
  return Component.displayName || Component.name || 'Component';
};

export default getDisplayName;
