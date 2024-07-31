"use client";
import React, { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Flex, message, Upload } from "antd";
import type { GetProp, UploadProps } from "antd";
import Image from "next/image";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const LogoUpload: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? (
        <LoadingOutlined />
      ) : (
        <Image
          alt="plus"
          src={"/icons/plus-black.svg"}
          className="me-0.5"
          width={18}
          height={18}
        />
      )}
    </button>
  );

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
    <Flex className="flex items-center cs-upload_logo gap-3">
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader overflow-hidden"
        showUploadList={false}
        /*  action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" */
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <div className="h-full w-full">
            <img
              src={imageUrl}
              alt="avatar"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ) : (
          uploadButton
        )}
      </Upload>
      <div>
        <label
          htmlFor="logoInput"
          className="cursor-pointer text-base  font-medium transition duration-300 hover:text-[#4faac1] hover:underline"
        >
          Chọn tệp
        </label>
        <input
          type="file"
          id={"logoInput"}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </Flex>
  );
};

export default LogoUpload;
