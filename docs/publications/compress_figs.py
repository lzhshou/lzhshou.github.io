import os
from PIL import Image


def recursive_compress(root_dir, quality=50):
    for path, dirs, files in os.walk(root_dir):
        for filename in files:
            if filename.endswith((".jpg", ".jpeg", ".png")):
                file_path = os.path.join(path, filename)
                with Image.open(file_path) as img:
                    new_width = 600
                    width_percent = new_width / float(img.size[0])
                    new_height = int((float(img.size[1]) * float(width_percent)))
                    img = img.resize((new_width, new_height))
                    img.save(file_path, optimize=True, quality=quality)


script_path = os.path.abspath(__file__)
root_dir = os.path.dirname(script_path)
quality = 50

recursive_compress(root_dir, quality)
