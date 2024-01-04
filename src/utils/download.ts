// export const downloadObjectAsJson = (exportName: string, data: string) => {
//   const dataStr = 'data:image/png;base64,' + btoa(data);
//   const downloadAnchorNode = document.createElement('a');
//   downloadAnchorNode.setAttribute('href', dataStr);
//   downloadAnchorNode.setAttribute('download', exportName + '.png');
//   document.body.appendChild(downloadAnchorNode); // required for firefox
//   downloadAnchorNode.click();
//   downloadAnchorNode.remove();
// };

export const downloadObjectAsJson = (exportName: string, data: unknown) => {
  const dataStr =
    'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute('href', dataStr);
  downloadAnchorNode.setAttribute('download', exportName + '.json');
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
};
