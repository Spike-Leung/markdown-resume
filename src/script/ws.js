setTimeout(() => {
  const socket = new WebSocket("ws://localhost:9876");

  socket.onmessage = ({ data }) => {
    if (data === 'reload') {
      window.location.reload(true);
    } else {
      document.querySelector("#custom").innerHTML = data
    }
  };
}, 1000);
