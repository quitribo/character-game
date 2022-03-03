// Import images from folder
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
// let body = importAll(
//   require.context("./images/body", false, /\.(png|jpe?g|svg)$/)
// );

let body = {
  pics: importAll(require.context("./images/body", false, /.(png|jpe?g|svg)$/)),
  name: "body",
};

let eyes = {
  pics: importAll(
    require.context("./images/eyes", false, /\.(png|jpe?g|svg)$/)
  ),
  name: "eyes",
};

let hair = {
  pics: importAll(
    require.context("./images/hair", false, /\.(png|jpe?g|svg)$/)
  ),
  name: "hair",
};

let nose = {
  pics: importAll(
    require.context("./images/noses", false, /\.(png|jpe?g|svg)$/)
  ),
  name: "nose",
};

let mouths = {
  pics: importAll(
    require.context("./images/mouths", false, /\.(png|jpe?g|svg)$/)
  ),
  name: "mouths",
};

let eyebrows = {
  pics: importAll(
    require.context("./images/eyebrows", false, /\.(png|jpe?g|svg)$/)
  ),
  name: "eyebrows",
};

let hats = {
  pics: importAll(
    require.context("./images/accessories/hats", false, /\.(png|jpe?g|svg)$/)
  ),
  name: "hats",
};

let glasses = {
  pics: importAll(
    require.context("./images/accessories/glasses", false, /\.(png|jpe?g|svg)$/)
  ),
  name: "glasses",
};

let clothing1 = {
  pics: importAll(
    require.context("./images/clothes/layer_1", false, /\.(png|jpe?g|svg)$/)
  ),
  name: "clothing1",
};

let clothing2 = {
  pics: importAll(
    require.context("./images/clothes/layer_2", false, /\.(png|jpe?g|svg)$/)
  ),
  name: "clothing2",
};

let clothing3 = {
  pics: importAll(
    require.context("./images/clothes/layer_3", false, /\.(png|jpe?g|svg)$/)
  ),
  name: "clothing3",
};

const importPic = {
  body,
  eyes,
  hair,
  nose,
  mouths,
  eyebrows,
  hats,
  glasses,
  clothing1,
  clothing2,
  clothing3,
};

export default importPic;
