chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    setPageEdit();
    sendResponse(document.body.contentEditable);
});

function preventReload(e) {
    var e = window.event || e;
    e.returnValue = '确定离开当前页面吗？';
}
function preventClick(e) {
    e.stopPropagation();
}

function setPageEdit() {
    if (document.body.contentEditable == 'true') {
        window.removeEventListener('beforeunload', preventReload);
        document.removeEventListener('click', preventClick, true);
        document.body.contentEditable = false;
    } else {
        window.addEventListener('beforeunload', preventReload);
        document.addEventListener('click', preventClick, true);
        document.body.contentEditable = true;
    }
}
