import React from 'react'

const Footer = () => {
    return (
        <footer className="footer footer-transparent d-print-none">
            <div className="container-xl">
                <div className="row text-center align-items-center flex-row-reverse">
                    <div className="col-lg-auto ms-lg-auto">
                        <ul className="list-inline list-inline-dots mb-0">
                        <li className="list-inline-item"><a href="page/privacy-policy.html" className="link-secondary">Privacy policy</a></li>
                        <li className="list-inline-item"><a href="page/terms-of-use.html" className="link-secondary">Terms of use</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-auto mt-3 mt-lg-0">
                        <ul className="list-inline list-inline-dots mb-0 m-0">
                        <li className="list-inline-item">
                            Copyright © <script>document.write(new Date().getFullYear())</script>
                            <a href="https://demo.vironeer.com/swipgle" className="link-secondary">Swipgle</a>.
                            All rights reserved.
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
