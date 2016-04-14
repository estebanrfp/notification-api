var btn = document.querySelector(".btn");

if ('Notification' in window) {
	Notification.requestPermission(function() {});
}

btn.addEventListener("click", function() {
  if (Notification.permission == 'granted') {
    var firstNotification = new Notification('mi notificación !', {
      icon: 'http://desarrolloactivo.com/dalogo.png',
      body: 'cuerpo de la notificación.'
    });
  }
});
