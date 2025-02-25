import React, { useMemo, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import ShortID from "shortid";
import { storage, bucketName } from "../../config/config";
import Axios from "axios";

const baseStyle = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  height: 200,
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#043f71",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function StyledDropzone() {
  const [loadedFile, setLoadedFile] = useState(null);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      let UniqueFile = (
        ShortID.generate().toLowerCase() +
        "__" +
        file.name
      ).toString();
      setLoadedFile(file.name);
      let storageRef = storage.ref(`${bucketName}/${UniqueFile}`);
      let uploadTask = storageRef.put(file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref(bucketName)
            .child(UniqueFile)
            .getDownloadURL()
            .then((url) => {
              Axios({
                method: "post",
                url:
                  "https://us-central1-sharma-associates-4d134.cloudfunctions.net/submittResume",
                data: {
                  downloadUrl: url,
                },
              }).then(() => {
                alert("File Saved and Emailed !");
                UniqueFile = null;
              });
            });
        }
      );
    });
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    multiple: false,
    accept:
      ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    onDrop,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <div className="dragDrop">
      File : {loadedFile}
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p className="centerText">
          Drag 'n' drop your Resume in word Format file e.g .doc, .docx or click
          to select files
        </p>
      </div>
    </div>
  );
}

export default StyledDropzone;
