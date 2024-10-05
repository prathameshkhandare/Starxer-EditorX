function setInitial(data) {
  let htmlContent = data[0] || '<h1> Welcome to Starxer-EditorX ! </h1>';
  let cssContent =
    data[1] ||
    `body {
    background-color: #222;
    }
    h1 {
      color: #fff;
      text-align: center;
      margin-top: 10%;
    }`;
  let jsContent = data[2] || '';
  css.value = cssContent;
  js.value = jsContent;
  html.value = htmlContent;
  code.open();
  code.writeln(
    htmlContent +
      '<style>' +
      cssContent +
      '</style>' +
      '<script>' +
      jsContent +
      '</script>'
  );
  code.close();
}
