function initRem(size){
    function adapt(size) {
        let html = document.documentElement;
        let wW = html.clientWidth; // 窗口宽度
        let rem = wW / size ;
        document.documentElement.style.setProperty('--scale', rem);
    }
    adapt(size)
    window.addEventListener("resize", () => {
        adapt(size)
    });
}