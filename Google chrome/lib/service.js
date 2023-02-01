chrome.runtime.onStartup.addListener(async () => {
  chrome.action.setBadgeText({text: ''});
  var a = new Promise(function(resolve, reject){
        chrome.storage.sync.get({"enabled": true}, function(options){
            resolve(options.enabled);
      })
  });
  const enabled = await a;
  if (enabled) {
    await enable();
  } else {
    await disable();
  }
});



chrome.runtime.onInstalled.addListener(async (details) => {
  switch (details.reason) {
    case chrome.runtime.OnInstalledReason.INSTALL:
      return chrome.storage.sync.set({
        installDate: Date.now(),
        installVersion: chrome.runtime.getManifest().version,
      });
    case chrome.runtime.OnInstalledReason.UPDATE:
      return chrome.storage.sync.set({
        updateDate: Date.now(),
      });
  }
});

chrome.runtime.onMessage.addListener(async (request, sender) => {
  switch (request.action) {
    case "INSERT_FILTER": {
      chrome.action.setBadgeText({text: ''});
      return  chrome.declarativeNetRequest.updateEnabledRulesets({
          enableRulesetIds:["ruleset_1","ruleset_13","ruleset_14","ruleset_16","ruleset_2","ruleset_224","ruleset_3","ruleset_7","ruleset_8","ruleset_9"]
        },
        () => {}
      );
    }
  }
});

chrome.runtime.onMessage.addListener(function(m, s, c){
  if (m.blockedCount) { 
    n = m.blockedCount; 
    chrome.action.setBadgeBackgroundColor({ color: '#f89722' });
    chrome.action.setBadgeText({text: m.blockedCount.toString(), tabId: s.tab.id});
  }
})



chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  if (changeInfo.status == 'complete') {
  chrome.action.setBadgeText({text: ''});
  let n = 0;  
    chrome.declarativeNetRequest.onRuleMatchedDebug.addListener(function (o) {
      if (n>9999) {n = 0}
      console.log('rule matched:', o);
      chrome.action.setBadgeBackgroundColor({ color: '#f89722' });
      chrome.action.setBadgeText({text: n.toString()});
      ++n
    })
  }
})



chrome.storage.onChanged.addListener(async (changes, namespace) => {
  if (namespace !== "sync") return;

  if (changes.enabled) {
    if (changes.enabled.newValue) {
      await enable();
    } else {
      await disable();
    }
  }
});
async function enable() {
  await chrome.action.setIcon({
    path: {
      32: "data/icons/icon-32.png",
      38: "data/icons/icon-38.png",
      128: "data/icons/icon-128.png",
    },
  });

  chrome.declarativeNetRequest.updateEnabledRulesets({
          enableRulesetIds:["ruleset_1","ruleset_13","ruleset_14","ruleset_16","ruleset_2","ruleset_224","ruleset_3","ruleset_7","ruleset_8","ruleset_9"]
        },
        () => {}
  );
  await reloadAffectedTab();
}

async function disable() {
  await chrome.action.setIcon({
    path: {
      32: "data/icons/icon-disabled-32.png",
      38: "data/icons/icon-disabled-38.png",
      128: "data/icons/icon-disabled-128.png",
    },
  });
  n = 0;
  chrome.action.setBadgeText({text: ''});
  chrome.declarativeNetRequest.updateEnabledRulesets({
          disableRulesetIds:["ruleset_1","ruleset_13","ruleset_14","ruleset_16","ruleset_2","ruleset_224","ruleset_3","ruleset_7","ruleset_8","ruleset_9"]
        },
      () => {}
  );
  await reloadAffectedTab();
}

async function reloadAffectedTab() {
  const [currentTab] = await chrome.tabs.query({
    active: true,
    url: "*://*/*",
  });
  const isTabAffected = Boolean(currentTab?.url);
  if (isTabAffected) {
    return chrome.tabs.reload();
  }
}

