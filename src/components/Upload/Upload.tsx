import React, {useCallback, useState} from "react";
import {useDropzone} from 'react-dropzone'
import classes from "./Upload.module.scss"

const Upload = () => {
    const [files, setFiles] = useState([]);
    const onDrop = useCallback((files:any) => setFiles(files), [setFiles]) 
    const { getRootProps, getInputProps } = useDropzone(
        {  accept: {
               'image/*': []}, onDrop});

    return(
        <div className={classes.uploadContainer}>
            <h2>Upload</h2>
            <div {...getRootProps({ className: `${classes.dropzone}` })}>
      <input {...getInputProps()} type="image/png"/>
      <div className="text-center">
        <p className="dropzone-content">
          Drag’n’drop some files here
        </p>
 
      </div>

      <h4>Files</h4>

    </div>
        </div>
    )
}

export default Upload