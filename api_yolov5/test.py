
from PIL import Image

def load_image(link_img):
    img = Image.open(link_img)
    return  img
# image_file = request.files["image"]
# image_bytes = image_file.read()
#
# img = Image.open(io.BytesIO(image_bytes))
#
# results = model(img, size=640)