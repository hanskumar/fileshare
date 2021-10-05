import React,{useCallback} from 'react'
import {useDropzone} from 'react-dropzone';
import Dropzone from "react-dropzone";

const Uploadfile = () => {

    const {acceptedFiles, getRootProps, getInputProps,multiple} = useDropzone();

    const { selectedFiles, progressInfos, message, fileInfos } = this.state;

    const state = {
        selectedFiles: undefined,
        progressInfos: [],
        message: [],
        fileInfos: [],
    };


    /* const onDrop(files) {
        if (files.length > 0) {
          this.setState({ selectedFiles: files });
        }
    } */

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
    }, [])

    return (
        <Dropzone onDrop={this.onDrop}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  {selectedFiles &&
                  Array.isArray(selectedFiles) &&
                  selectedFiles.length ? (
                    <div className="selected-file">
                      {selectedFiles.length > 3
                        ? `${selectedFiles.length} files`
                        : selectedFiles.map((file) => file.name).join(", ")}
                    </div>
                  ) : (
                    `Drag and drop files here, or click to select files`
                  )}
                </div>
                <aside className="selected-file-wrapper">
                  <button
                    className="btn btn-success"
                    disabled={!selectedFiles}
                    onClick={this.uploadFiles}
                  >
                    Upload
                  </button>
                </aside>
              </section>
            )}
          </Dropzone>
    )
}

export default Uploadfile
