chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    setPageEdit();
    sendResponse(document.body.contentEditable);
});

function preventReload(e) {
    var e = window.event || e;
    e.returnValue = '确定离开当前页面吗？';
}

function setPageEdit() {
    if (document.body.contentEditable == 'true') {
        window.removeEventListener('beforeunload', preventReload);
        document.body.contentEditable = false;
    } else {
        window.addEventListener('beforeunload', preventReload);
        document.body.contentEditable = true;
    }
}
