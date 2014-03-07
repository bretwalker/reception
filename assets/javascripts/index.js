if (!(window.location.pathname == '/')) return;

document.addEventListener('DOMContentLoaded',function() {
  var form = document.getElementById('newguest');
  var toSave = ["herokai_name", "notify_hipchat", "notify_gchat"];

  form.elements["herokai_name"].value = localStorage.getItem("herokai_name")
  form.elements["notify_gchat"].checked   = (localStorage.getItem("notify_gchat")   === "true")
  form.elements["notify_hipchat"].checked = (localStorage.getItem("notify_hipchat") === "true")

  form.addEventListener("submit", function(e) {
    localStorage.setItem("herokai_name",   form.elements["herokai_name"].value)
    localStorage.setItem("notify_gchat",   form.elements["notify_gchat"].checked)
    localStorage.setItem("notify_hipchat", form.elements["notify_hipchat"].checked)
  }, false);

  if (addRowButton = document.getElementById('addRow')) {
    addRowButton.addEventListener("click", function(e) {
      addRowButton.insertAdjacentHTML('beforebegin', document.getElementsByClassName('guest-name')[0].outerHTML)
      e.preventDefault();
    }, false);
  }
});