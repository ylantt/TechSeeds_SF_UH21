"""
Run a rest API exposing the yolov5s object detection model
"""
import argparse
import io
from PIL import Image

import torch
from flask import Flask, request, jsonify
import base64

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

    img = Image.open('D:\UDEMY\PRACTICE\TechSeeds_SF_UH21\api_yolov5\deer_decode.jpg')

    results = model(img, size=640)
    data = results.pandas().xyxy[0].to_json(orient="records")
    return data


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Flask api exposing yolov5 model")
    parser.add_argument("--port", default=5000, type=int, help="port number")
    args = parser.parse_args()

    model = torch.hub.load('ultralytics/yolov5', 'custom',
                           path='exp3/best.pt')
    model.eval()
    app.run(host="0.0.0.0", port=args.port)  # debug=True causes Restarting with stat
