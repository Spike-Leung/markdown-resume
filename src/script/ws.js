setTimeout(() => {
  const socket = new WebSocket("ws://localhost:9876");

  socket.onmessage = (event) => {
    const { type, data } = JSON.parse(event.data);

    switch (type) {
      case "content":
        document.querySelector(".markdown-body").innerHTML = data;
        break;

      case "style":
        const link = document.getElementsByTagName("link").item(0)
        const oldHref = link.href.split("?")[0]
        link.href = `${oldHref}?v=${Date.now()}`
        break;

      default:
        break;
    }
  };
}, 1000);
