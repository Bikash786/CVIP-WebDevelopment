function run(){
    var htmlCode = document.getElementById("html-box").value;
    var cssCode = document.getElementById("css-box").value;
    var jsCode = document.getElementById("js-box").value;
    var output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode+"<style>"+cssCode+"</style>";
    output.contentWindow.eval(jsCode);
}