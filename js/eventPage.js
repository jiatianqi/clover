// 创建右键菜单选项
chrome.contextMenus.create({
    title: 'Edit page',
    contexts: ['all'],
    onclick: function () {
        sendMessageToContentScript(null, res => {
            chrome.notifications.create(null, {
                type: 'basic',
                iconUrl: 'img/transparent.png',
                title: '提示',
                message: res == 'true' ? '已开启页面编辑' : '已关闭页面编辑'
            });
        });
    }
});

// 获取当前选项卡ID
function getCurrentTabId(callback) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        const url = tabs.length ? tabs[0].url : '';
        if (callback) callback(tabs.length ? tabs[0].id : null);
    });
}

// 主动发消息
function sendMessageToContentScript(message, callback) {
    getCurrentTabId(tabId => {
        chrome.tabs.sendMessage(tabId, message, function (response) {
            if (callback) callback(response);
        });
    });
}
