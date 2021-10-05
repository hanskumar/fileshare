import React from 'react'
import { MdCloudUpload,MdLink,MdAttachFile } from "react-icons/md";

const Tabs = () => {
    return (
        <>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a href="#send" className="nav-link active" data-bs-toggle="tab">
                    <MdAttachFile />
                    Send Files
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#link" className="nav-link" data-bs-toggle="tab">
                    <MdLink/>
                    Generate a link
                    </a>
                </li>
            </ul>
        </>
    )
}

export default Tabs
