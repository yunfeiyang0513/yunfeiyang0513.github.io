function initRem(size){
    function adapt(size) {
        let html = document.documentElement;
        let wW = html.clientWidth; // 窗口宽度
        let rem = wW / (size / 100);
        document.documentElement.style.fontSize = rem + "px";
    }
    adapt(size)
    window.addEventListener("resize", () => {
        adapt(size)
    });
}