export async function getActiveTabURL() {
  // const queryOptions = { active: true, currentWindow: true };
  // const [tab] = await chrome.tabs.query(queryOptions);
  // return tab;
  const tabs = await chrome.tabs.query({
    currentWindow: true,
    active: true,
  });

  return tabs[0];
}
