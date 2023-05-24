import os

def recursive_rename(root_dir):
    for path, dirs, files in os.walk(root_dir):
        for dir_name in dirs:
            old_path = os.path.join(path, dir_name)
            new_path = os.path.join(path, dir_name.lower())
            os.rename(old_path, new_path)
            
        for filename in files:
            old_path = os.path.join(path, filename)
            new_path = os.path.join(path, filename.lower())
            os.rename(old_path, new_path)

root_dir = "./"

recursive_rename(root_dir)
