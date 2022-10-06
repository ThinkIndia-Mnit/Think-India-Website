const UploadImage = (image, callback) => {
  image.crossOrigin = "Anonymous";
  let imgData;
  if (image.src && image.src !== "") {
    const imgSrc = image.src;
    image.src = "";
    image.src = imgSrc;
    image.onload = function () {
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      canvas.height = this.naturalHeight;
      canvas.width = this.naturalWidth;
      ctx.drawImage(this, 0, 0);
      imgData = canvas.toDataURL("image/jpeg");
      callback(imgData);
    };
  } else {
    callback(null);
  }
};

export default UploadImage;
