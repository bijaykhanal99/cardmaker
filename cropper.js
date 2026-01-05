let cropper;
let currentTarget = null; // photo or logo

const cropContainer = document.getElementById('cropperModal');
const cropImage = document.getElementById('cropImage');
const cropButton = document.getElementById('cropButton');
const cancelCrop = document.getElementById('cancelCrop');

const imageInput = document.getElementById('upimage'); // photo upload
const logoUpload = document.getElementById('uplogo');  // logo upload

const birtImage = document.getElementById('imgupd');   // photo preview
const loLogo = document.getElementById('logoupd');     // logo preview

// ===== COMMON FUNCTION =====
function openCropper(file, target) {
  const reader = new FileReader();
  reader.onload = (e) => {
    cropImage.src = e.target.result;
    cropContainer.style.display = 'block';
    currentTarget = target;

    if (cropper) cropper.destroy();

    cropper = new Cropper(cropImage, {
      aspectRatio: target === 'logo' ? 1 : 1, // logo square, change if needed
      viewMode: 1,
      background: false,
    });
  };
  reader.readAsDataURL(file);
}

// ===== PHOTO CROP =====
imageInput.addEventListener('change', (e) => {
  if (e.target.files[0]) {
    openCropper(e.target.files[0], 'photo');
  }
});

// ===== LOGO CROP =====
logoUpload.addEventListener('change', (e) => {
  if (e.target.files[0]) {
    openCropper(e.target.files[0], 'logo');
  }
});

// ===== CROP BUTTON =====
cropButton.addEventListener('click', () => {
  if (!cropper) return;

  const canvas = cropper.getCroppedCanvas({
    width: 300,
    height: 300,
  });

  const croppedImage = canvas.toDataURL('image/png');

  if (currentTarget === 'photo') {
    birtImage.src = croppedImage;
  } else if (currentTarget === 'logo') {
    loLogo.src = croppedImage;
  }

  cropContainer.style.display = 'none';
  cropper.destroy();
  cropper = null;
});

// ===== CANCEL =====
cancelCrop.addEventListener('click', () => {
  cropContainer.style.display = 'none';
  if (cropper) {
    cropper.destroy();
    cropper = null;
  }
});
