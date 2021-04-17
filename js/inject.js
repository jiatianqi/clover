chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    setPageEdit();
    sendResponse(document.body.contentEditable);
});

function setPageEdit() {
    if (document.body.contentEditable == 'true') {
        document.body.contentEditable = false;
    } else {
        document.body.contentEditable = true;
    }
}
