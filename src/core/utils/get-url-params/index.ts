export const getUrlParams = () => {
  return (
    window.location.search.length > 0 &&
    JSON.parse(
      '{"' +
        decodeURI(window.location.search.substring(1)).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +
        '"}',
    )
  );
};
