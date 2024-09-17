import React from "react";

const notification = () => {
  const notification1 = () => {
    Notification.requestPermission().then((perm) => {
      perm === "granted" && new Notification("notification 1");
    });
  };
  const notification2 = () => {
    Notification.requestPermission().then((perm) => {
      perm === "granted" && new Notification("notification 2");
    });
  };
  return (
    <div className="flex items-center justify-center gap-4 py-5">
      <button
        onClick={notification1}
        className="text-white bg-[#327BF9] py-1 px-12 rounded-lg hover:bg-blue-800"
      >
        notification 1
      </button>
      <button
        onClick={notification2}
        className="text-white bg-[#327BF9] py-1 px-12 rounded-lg hover:bg-blue-800"
      >
        notification 2
      </button>
    </div>
  );
};

export default notification;
