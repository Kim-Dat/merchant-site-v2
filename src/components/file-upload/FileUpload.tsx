import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Upload, message } from "antd";
import Image from "next/image";
import { toast } from "react-toastify";

const { Dragger } = Upload;

type fileProps = {
  id: string;
};

const FileUpload: React.FC<fileProps> = ({ id }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const props: UploadProps = {
    name: "file",
    multiple: false,
    showUploadList: false,
    beforeUpload: (file) => {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error("You can only upload image files!");
      }
      return isImage || Upload.LIST_IGNORE;
    },
    onChange(info) {
      const { status, originFileObj } = info.file;

      if (status !== "uploading" && originFileObj) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImageUrl(e.target?.result as string);
        };
        reader.readAsDataURL(originFileObj);
      }

      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    // if (file.size > 100 * 1024) {
    //   toast.warn("Vui lòng chọn ảnh nhỏ hơn 100kb", {
    //     position: "top-center",
    //     autoClose: 2000,
    //     theme: "light",
    //   });
    //   return;
    // }

    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative">
      {imageUrl && (
        <div>
          <label htmlFor={id}>
            <Image
              src="/icons/edit-image.svg"
              alt="close"
              className="absolute -top-5 right-5 h-10 w-10 cursor-pointer"
              width={500}
              height={500}
            />
            <input
              type="file"
              id={id}
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
          <Image
            src="/icons/close-image.svg"
            alt="close"
            onClick={() => setImageUrl(null)}
            className="absolute -right-5 -top-5 h-10 w-10 cursor-pointer"
            width={500}
            height={500}
          />
        </div>
      )}
      <Dragger {...props} className="custom-dragger">
        <div className="flex w-full items-center justify-center">
          {imageUrl ? (
            <img src={imageUrl} alt="uploaded" style={{ maxWidth: "100%" }} />
          ) : (
            <>
              <Image
                src="/icons/plus.svg"
                alt="plus"
                className="h-[28px] w-[28px]"
                width={500}
                height={500}
              />
            </>
          )}
        </div>
      </Dragger>
    </div>
  );
};

export default FileUpload;
