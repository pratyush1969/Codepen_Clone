function run() {

    let html_code = document.getElementById("html_code").value;
    let css_code = document.getElementById("css_code").value;
    let js_code = document.getElementById("js_code").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML=html_code+"<style>"+css_code+"</style>";
    output.contentWindow.eval(js_code);

}