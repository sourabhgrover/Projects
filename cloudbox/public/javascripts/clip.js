var copyTextareaBtn = document.querySelector('.copybtn');
console.log(copyTextareaBtn)

copyTextareaBtn.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.copytextarea');
  console.log(copyTextarea)
  copyTextarea.focus();
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});