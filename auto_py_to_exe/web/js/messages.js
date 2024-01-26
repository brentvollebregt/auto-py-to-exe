eel.expose(putMessageInOutput);
function putMessageInOutput(message) {
  const outputNode = document.querySelector('#output textarea');
  outputNode.value += message; // Add the message
  if (!message.endsWith('\n')) {
    outputNode.value += '\n'; // If there was no new line, add one
  }

  // Set the correct height to fit all the output and then scroll to the bottom
  outputNode.style.height = 'auto';
  outputNode.style.height = outputNode.scrollHeight + 10 + 'px';
  window.scrollTo(0, document.body.scrollHeight);
}

eel.expose(signalPackagingComplete);
function signalPackagingComplete(successful) {
  setPackagingComplete(successful);
  window.scrollTo(0, document.body.scrollHeight);
}
