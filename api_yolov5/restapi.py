"""
Run a rest API exposing the yolov5s object detection model
"""
import argparse
import io
from PIL import Image

import torch
from flask import Flask, request, jsonify
import base64
import json

app = Flask(__name__)

DETECTION_URL = "/v1/object-detection/yolov5s"


@app.route(DETECTION_URL, methods=["POST"])
def predict():
    if not request.method == "POST":
        return
    print('hello')
    
    dataDict = request.get_json()
    photoBase64 = dataDict["photoBase64"]
    
    image_64_decode = base64.decodebytes(bytes(photoBase64, "UTF-8"))
    image_result = open('deer_decode.jpg', 'wb')
    image_result.write(image_64_decode)

    # if request.files.get("image"):
    #     image_file = request.files["image"]
    #     print(image_file)
    #     image_bytes = image_file.read()

    img = Image.open('deer_decode.jpg')
    print(type(img))

    results = model(img, size=640)
    data = results.pandas().xyxy[0].to_json(orient="records")

    print(data)

    data = json.loads(data[1:len(data) - 1])
    try:
        print("img shape: ", img.size)
        img_size = img.size[0] * img.size[1]
        skin_disease_area = (data['xmax'] - data['xmin']) * (data['ymax'] - data['ymin'])
        data['level'] = skin_disease_area / img_size
    except:
        print('Error')
    print(data)
    return data


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Flask api exposing yolov5 model")
    parser.add_argument("--port", default=5000, type=int, help="port number")
    args = parser.parse_args()

    model = torch.hub.load('ultralytics/yolov5', 'custom',
                           path='exp3/best.pt')
    model.eval()
    app.run(host="0.0.0.0", port=args.port)  # debug=True causes Restarting with stat
