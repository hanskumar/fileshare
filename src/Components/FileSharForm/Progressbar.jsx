import React from 'react'

const Progressbar = () => {
    return (
        <div className="swipgle-upload-previews-area overflow-auto">
                                 <div id="swipgle-upload-previews"></div>
                                 <div>
                                    <div id="swipgle-drop-template" className="swipgle-uploader-bottom d-none">
                                       <div className="swipgle-uploader-bottomFlex">
                                          <div className="swipgle-file-information">
                                             <div className="row align-items-center">
                                                <div className="col">
                                                   <span className="swipgle-file-uploded fade-in d-none"><i className="far fa-check-circle"></i></span>
                                                   <span className="swipgle-file-not-uploded text-danger fade-in d-none"><i className="fas fa-ban"></i></span>
                                                   <span className="swipgle-uploader-name swipgle-short-name dz-remove" data-dz-name></span>
                                                </div>
                                                <div className="col-auto">
                                                   <span className="float-right swipgle-remove-file">
                                                   <span className="swipgle-file-percentage" id="swipgle-file-percentage">
                                                   <span className="swipgle-file-size fade-in"></span>
                                                   <span className="swipgle-percent-text the-progress-text"></span>
                                                   </span>
                                                   <i data-dz-remove className="remove-file fas"></i> 
                                                   </span>
                                                </div>
                                             </div>
                                             <span className="swipgle-errors text-danger"></span>
                                          </div>
                                          <div className="swipgle-uploader-progress">
                                             <div className="progress swipgle-upload-progress">
                                                <div data-dz-uploadprogress className="progress-bar bg-upload" role="progressbar"  aria-valuemin="0" aria-valuemax="100">
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div> 
    )
}

export default Progressbar
