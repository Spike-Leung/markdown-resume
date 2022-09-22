setTimeout(() => {
  const socket = new WebSocket("ws://localhost:9876");

  socket.onmessage = () => {
    window.location.reload(true);
  };
}, 1000);
