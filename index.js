const notifications = document.getElementsByClassName("notification");
const unreadNotifications = document.getElementsByClassName("unread");
const unreadCounterElement = document.getElementById("unread-counter");
const markAllAsReadButton = document.getElementById("markAllAsRead");

markAllAsReadButton.addEventListener("click", (e) => {
  markAllAsRead();
});

[...notifications].forEach((notification) => {
  notification.addEventListener("click", (e) => {
    removeUnreadClass(notification);
  });
});

function removeUnreadClass(notification) {
  const notificationStatus = notification.getElementsByClassName("notification-status")[0];
  notification.classList.remove("unread");
  notificationStatus.classList.add("display-none");
  unreadCounterElement.textContent = unreadNotifications.length;
};

function markAllAsRead() {
  [...unreadNotifications].forEach((notification) => {
    removeUnreadClass(notification);
  });
};