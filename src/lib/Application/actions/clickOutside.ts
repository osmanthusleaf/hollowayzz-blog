export default (node) => {
  const documentClicked = ({ target, defaultPrevented }) => {
    if (node && !node.contains(target) && !defaultPrevented) {
      node.dispatchEvent(new CustomEvent('clickedOutside', node));
    }
  };
  document.addEventListener('click', documentClicked, true);
  return () => document.removeEventListener('click', documentClicked, true);
};