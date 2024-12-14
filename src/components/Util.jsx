export function loadProfilePic(src, setImgSrc) {
  return () => {
    if (src != null) {
      const uint8Array = new Uint8Array(Object.values(src));

      const base64String = globalThis.btoa(String.fromCharCode(...uint8Array));

      setImgSrc(`data:image/webp;base64,${base64String}`);
    }
  };
}

export function GET(url, cookie, setData) {
  return () => {
    (async () => {
      return await fetch(url, {
        method: "GET",
        headers: { "Authorization": `Bearer ${cookie.glitch}` },
      }).then((res) => res.json()).then((body) => setData(body));
    })();
  };
}