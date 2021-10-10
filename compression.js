import { compress } from "brotli";
import fs from "fs";

const brotliSettings = {
  extension: "br",
  skipLarger: true,
  mode: 1, // 0 = generic, 1 = text, 2 = font (WOFF2)
  quality: 10, // 0 - 11,
  lgwin: 12, // default
};

function getFiles(path) {
  const files = fs.readdirSync(path);

  let result = [];

  for (const file of files) {
    let filePath = `${path}/${file}`;

    if (fs.lstatSync(filePath).isFile()) {
      result[result.length] = filePath;
    } else {
      const files = getFiles(filePath);
      result = [...result, ...files];
    }
  }

  return result;
}

function filterJsCssHtmlFiles(file) {
  return (
    file.endsWith(".js") || file.endsWith(".css") || file.endsWith(".html")
  );
}

function compressAndWrite(file) {
  const result = compress(fs.readFileSync(file), brotliSettings);
  fs.writeFileSync(`${file}.br`, result);
}

void (function () {
  const dir = "./dist";
  const filesForCompression = getFiles(dir).filter(filterJsCssHtmlFiles);

  filesForCompression.forEach(compressAndWrite);
})();
