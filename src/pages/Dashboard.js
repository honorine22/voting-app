import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthNav from '../components/AuthNav';
import Button from '../components/Button';
import logo from '../logo.jpg';
import { logout } from '../services/auth';

function Dashboard(props) {
    const navigate = useNavigate();
    const logUserOut = () => {
        logout();
        console.log("removed token");
        navigate("/");
    };
    return (
        <div style={{ backgroundColor: "#F5F7FB" }}>
            <div className='d-flex flex-row'>
                <div className='d-flex card border-0 d-sm-none d-none d-md-block d-lg-block col-md-2 col-lg-2 bg-white flex-column' style={{ height: "100vh" }}>
                    <div className='mt-4 mx-4 d-flex flex-row'>
                        <img src={logo} className="img-fluid w-25" alt='Logo' />
                        <Link className='navbar-brand px-4 pt-3 text-warning' to="/">VOTE</Link>
                    </div>
                    <div className='mx-4 my-5'>
                        <Button text="Dashboard" className="px-4 py-2 lightmb text-white rounded-3" />
                    </div>
                    <div className='d-flex px-4 flex-row'>
                        <svg width="28" height="28" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_17_385)">
                                <path d="M33.71 14.8844L18.71 1.9714C18.5227 1.81107 18.2692 1.72107 18.005 1.72107C17.7408 1.72107 17.4874 1.81107 17.3 1.9714L2.30003 14.8844C2.1362 15.0491 2.05059 15.261 2.06032 15.4776C2.07004 15.6943 2.17437 15.8998 2.35246 16.0531C2.53056 16.2065 2.7693 16.2963 3.02097 16.3046C3.27265 16.313 3.51873 16.2393 3.71003 16.0983L18 3.79645L32.29 16.1069C32.4813 16.2479 32.7274 16.3216 32.9791 16.3132C33.2308 16.3049 33.4695 16.2151 33.6476 16.0617C33.8257 15.9084 33.93 15.7029 33.9397 15.4862C33.9495 15.2696 33.8639 15.0577 33.7 14.8931L33.71 14.8844Z" fill="#545454" />
                                <path d="M28 27.5478H23V18.9391H13V27.5478H8V15.4956L6 17.2174V27.5478C6 28.0044 6.21071 28.4424 6.58579 28.7653C6.96086 29.0882 7.46957 29.2696 8 29.2696H15V20.6609H21V29.2696H28C28.5304 29.2696 29.0391 29.0882 29.4142 28.7653C29.7893 28.4424 30 28.0044 30 27.5478V17.0108L28 15.289V27.5478Z" fill="#545454" />
                            </g>
                            <defs>
                                <clipPath id="clip0_17_385">
                                    <rect width="36" height="30.9913" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <Link className="text-black px-2 text-decoration-none" to="/">Home</Link>
                    </div>

                    <div className='d-flex px-4 py-5 flex-row'>
                        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z" fill="#545454" />
                            <path d="M23.777 15.479C23.1591 13.9049 22.0929 12.5467 20.7105 11.5728C19.3281 10.5988 17.6902 10.052 16 10C14.3098 10.052 12.6719 10.5988 11.2895 11.5728C9.9071 12.5467 8.84088 13.9049 8.223 15.479L8 16L8.223 16.521C8.84088 18.0951 9.9071 19.4533 11.2895 20.4272C12.6719 21.4012 14.3098 21.948 16 22C17.6902 21.948 19.3281 21.4012 20.7105 20.4272C22.0929 19.4533 23.1591 18.0951 23.777 16.521L24 16L23.777 15.479ZM16 20C15.2089 20 14.4355 19.7654 13.7777 19.3259C13.1199 18.8864 12.6072 18.2616 12.3045 17.5307C12.0017 16.7998 11.9225 15.9956 12.0769 15.2196C12.2312 14.4437 12.6122 13.731 13.1716 13.1716C13.731 12.6122 14.4437 12.2312 15.2196 12.0769C15.9956 11.9225 16.7998 12.0017 17.5307 12.3045C18.2616 12.6072 18.8864 13.1199 19.3259 13.7777C19.7654 14.4355 20 15.2089 20 16C19.9987 17.0605 19.5768 18.0771 18.827 18.827C18.0771 19.5768 17.0605 19.9987 16 20Z" fill="#545454" />
                            <path d="M28.504 8.13599L16.504 1.13599C16.351 1.04673 16.1771 0.999695 16 0.999695C15.8229 0.999695 15.649 1.04673 15.496 1.13599L3.496 8.13599C3.34502 8.22409 3.21978 8.35023 3.13275 8.50183C3.04572 8.65343 2.99995 8.82519 3 8.99999V23C2.99995 23.1748 3.04572 23.3466 3.13275 23.4982C3.21978 23.6498 3.34502 23.7759 3.496 23.864L15.496 30.864C15.649 30.9533 15.8229 31.0003 16 31.0003C16.1771 31.0003 16.351 30.9533 16.504 30.864L28.504 23.864C28.655 23.7759 28.7802 23.6498 28.8673 23.4982C28.9543 23.3466 29.0001 23.1748 29 23V8.99999C29.0001 8.82519 28.9543 8.65343 28.8673 8.50183C28.7802 8.35023 28.655 8.22409 28.504 8.13599ZM27 22.426L16 28.842L5 22.426V9.57399L16 3.15799L27 9.57399V22.426Z" fill="#545454" />
                        </svg>
                        <Link className="text-black px-2 text-decoration-none" to="/">view candidates</Link>
                    </div>

                    <div className='d-flex px-4 flex-row'>
                        <svg width="28" height="28" viewBox="0 0 40 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 42.3387H25M15 42.3387V32.2581M15 42.3387H6C5.73478 42.3387 5.48043 42.2113 5.29289 41.9844C5.10536 41.7576 5 41.4499 5 41.129V33.4678C5 33.1469 5.10536 32.8392 5.29289 32.6124C5.48043 32.3855 5.73478 32.2581 6 32.2581H15M25 42.3387V18.1452M25 42.3387H34C34.2652 42.3387 34.5196 42.2113 34.7071 41.9844C34.8946 41.7576 35 41.4499 35 41.129V7.25808C35 6.93725 34.8946 6.62957 34.7071 6.40271C34.5196 6.17585 34.2652 6.0484 34 6.0484H26C25.7348 6.0484 25.4804 6.17585 25.2929 6.40271C25.1054 6.62957 25 6.93725 25 7.25808V18.1452M25 18.1452H16C15.7348 18.1452 15.4804 18.2726 15.2929 18.4995C15.1054 18.7263 15 19.034 15 19.3549V32.2581" stroke="#545454" strokeWidth="1.5" />
                        </svg>
                        <Link className="text-black px-2 text-decoration-none" to="/">Results</Link>
                    </div>

                    <div className='d-flex px-4 py-5 flex-row'>
                        <svg width="28" height="28" viewBox="0 0 40 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.465 3.02417C23.7297 3.02418 23.9875 3.12579 24.2013 3.31438C24.4152 3.50296 24.574 3.76879 24.655 4.07357L26.03 9.24191C26.6075 9.58365 27.16 9.96772 27.6875 10.4002L32.0775 9.25703C32.3364 9.19018 32.6061 9.22444 32.8478 9.35488C33.0895 9.48531 33.2907 9.70519 33.4225 9.98284L36.8875 17.2379C37.0198 17.5154 37.0759 17.8365 37.0476 18.155C37.0193 18.4735 36.9081 18.7729 36.73 19.0101L33.7175 23.0322C33.7614 23.8035 33.7614 24.5775 33.7175 25.3488L36.73 29.377C36.9081 29.6141 37.0193 29.9135 37.0476 30.232C37.0759 30.5505 37.0198 30.8717 36.8875 31.1492L33.4225 38.4072C33.2904 38.6843 33.089 38.9036 32.8473 39.0335C32.6056 39.1633 32.3361 39.1971 32.0775 39.13L27.6875 37.9869C27.1625 38.4163 26.6075 38.8034 26.0325 39.1451L24.655 44.3135C24.574 44.6183 24.4152 44.8841 24.2013 45.0727C23.9875 45.2613 23.7297 45.3629 23.465 45.3629H16.535C16.2704 45.3629 16.0126 45.2613 15.7987 45.0727C15.5849 44.8841 15.426 44.6183 15.345 44.3135L13.9725 39.1482C13.3966 38.8075 12.841 38.4184 12.31 37.9838L7.92253 39.13C7.66369 39.1969 7.39399 39.1626 7.15228 39.0322C6.91057 38.9017 6.70932 38.6819 6.57753 38.4042L3.11253 31.1492C2.98021 30.8717 2.92417 30.5505 2.95248 30.232C2.98078 29.9135 3.09198 29.6141 3.27003 29.377L6.28253 25.3488C6.23889 24.5795 6.23889 23.8075 6.28253 23.0383L3.27003 19.0101C3.09198 18.7729 2.98078 18.4735 2.95248 18.155C2.92417 17.8365 2.98021 17.5154 3.11253 17.2379L6.57753 9.97982C6.70969 9.70272 6.91109 9.48347 7.15277 9.35359C7.39445 9.22372 7.66396 9.18991 7.92253 9.25703L12.31 10.4032C12.84 9.97074 13.395 9.58062 13.9725 9.23889L15.3475 4.07357C15.4282 3.76977 15.5863 3.50465 15.7992 3.31616C16.012 3.12766 16.2687 3.02546 16.5325 3.02417H23.4625H23.465ZM22.55 6.04836H17.45L16.03 11.3921L15.0725 11.9576C14.6018 12.2363 14.1474 12.5536 13.7125 12.9072L12.8275 13.633L8.28753 12.4476L5.73753 17.7943L8.85003 21.9617L8.77503 23.2439C8.73911 23.8762 8.73911 24.5108 8.77503 25.1431L8.85003 26.4254L5.73253 30.5927L8.28503 35.9395L12.825 34.757L13.71 35.4798C14.1449 35.8335 14.5993 36.1508 15.07 36.4294L16.0275 36.9949L17.45 42.3387H22.555L23.98 36.9919L24.935 36.4294C25.4052 36.1514 25.8588 35.8341 26.2925 35.4798L27.175 34.757L31.7175 35.9395L34.2675 30.5927L31.1525 26.4254L31.2275 25.1431C31.2636 24.5098 31.2636 23.8742 31.2275 23.2409L31.1525 21.9586L34.27 17.7943L31.7175 12.4476L27.175 13.627L26.2925 12.9072C25.8589 12.5528 25.4053 12.2355 24.935 11.9576L23.98 11.3951L22.5525 6.04836H22.55ZM20 15.1209C21.9892 15.1209 23.8968 16.0768 25.3033 17.7782C26.7099 19.4797 27.5 21.7873 27.5 24.1935C27.5 26.5997 26.7099 28.9074 25.3033 30.6088C23.8968 32.3102 21.9892 33.2661 20 33.2661C18.0109 33.2661 16.1032 32.3102 14.6967 30.6088C13.2902 28.9074 12.5 26.5997 12.5 24.1935C12.5 21.7873 13.2902 19.4797 14.6967 17.7782C16.1032 16.0768 18.0109 15.1209 20 15.1209ZM20 18.1451C18.6739 18.1451 17.4022 18.7824 16.4645 19.9167C15.5268 21.051 15 22.5894 15 24.1935C15 25.7977 15.5268 27.3361 16.4645 28.4704C17.4022 29.6047 18.6739 30.2419 20 30.2419C21.3261 30.2419 22.5979 29.6047 23.5356 28.4704C24.4732 27.3361 25 25.7977 25 24.1935C25 22.5894 24.4732 21.051 23.5356 19.9167C22.5979 18.7824 21.3261 18.1451 20 18.1451Z" fill="#545454" />
                        </svg>
                        <Link className="text-black px-2 text-decoration-none" to="/">Settings</Link>
                    </div>
                    <div className='d-flex mx-4 justify-content-between'>
                        <img src='https://picsum.photos/100/100' className='img-fluid w-25 rounded-circle' alt='Profile' />
                        <div className='d-flex flex-column'>
                            <p>Honorine</p>
                            <Button text="Edit profile" className="px-4 py-1 lightmb text-white rounded-1" />
                        </div>
                    </div>
                    <div className='pt-5 d-flex mx-4 flex-row'>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.7344 20.0157H21.8121C21.6809 20.0157 21.5578 20.0731 21.4758 20.1743C21.2844 20.4067 21.0793 20.6309 20.8633 20.8442C19.9798 21.7286 18.9333 22.4334 17.7816 22.9196C16.5885 23.4235 15.3061 23.682 14.0109 23.6797C12.7012 23.6797 11.4324 23.4227 10.2402 22.9196C9.08859 22.4334 8.04209 21.7286 7.15859 20.8442C6.27352 19.9628 5.56778 18.9181 5.08047 17.768C4.57461 16.5758 4.32031 15.3098 4.32031 14C4.32031 12.6903 4.57734 11.4243 5.08047 10.2321C5.56719 9.0809 6.26719 8.04457 7.15859 7.1559C8.05 6.26723 9.08633 5.56723 10.2402 5.08051C11.4324 4.57739 12.7012 4.32035 14.0109 4.32035C15.3207 4.32035 16.5894 4.57465 17.7816 5.08051C18.9355 5.56723 19.9719 6.26723 20.8633 7.1559C21.0793 7.37192 21.2816 7.59614 21.4758 7.82582C21.5578 7.92699 21.6836 7.98442 21.8121 7.98442H23.7344C23.9066 7.98442 24.0133 7.79301 23.9176 7.64809C21.8203 4.38871 18.1508 2.23129 13.9809 2.24223C7.42929 2.25864 2.17656 7.577 2.24219 14.1204C2.30781 20.5598 7.55234 25.7579 14.0109 25.7579C18.1699 25.7579 21.823 23.6032 23.9176 20.352C24.0105 20.2071 23.9066 20.0157 23.7344 20.0157ZM26.1652 13.8278L22.2852 10.7653C22.1402 10.6504 21.9297 10.7543 21.9297 10.9375V13.0157H13.3437C13.2234 13.0157 13.125 13.1141 13.125 13.2344V14.7657C13.125 14.886 13.2234 14.9844 13.3437 14.9844H21.9297V17.0625C21.9297 17.2457 22.143 17.3497 22.2852 17.2348L26.1652 14.1723C26.1914 14.1518 26.2125 14.1257 26.2271 14.0959C26.2416 14.066 26.2492 14.0332 26.2492 14C26.2492 13.9668 26.2416 13.9341 26.2271 13.9042C26.2125 13.8744 26.1914 13.8482 26.1652 13.8278V13.8278Z" fill="black" />
                        </svg>
                        <p onClick={logUserOut} className='fw-bolder px-2 border-0'>Logout</p>
                    </div>
                </div>
                <div className='col-md-10 col-lg-10 d-flex flex-column'>
                    <AuthNav />

                    {/* Welcome Message to Manage Info */}
                    <div className='container py-2 card shadow-sm mt-4 col-sm-12 col-md-8 col-lg-8 px-4 d-flex flex-sm-column flex-md-row flex-lg-row border-0 rounded-3'>
                        <div className='d-flex flex-column col-sm-12 col-md-6 col-lg-6'>
                            <h1 className='lightmt fw-bolder'>Welcome  Honorine</h1>
                            <p className='pt-5 '>Manage all the things from single dashboard like editing your profile, voting, register as a candidate.</p>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            <img src='/assets/manage.png' className='img-fluid' alt='Welcome Image' />
                        </div>
                    </div>
                    {/* View Profile */}
                    {/* container py-2 card  bg-black shadow-sm mt-4 col-sm-12 col-md-8 col-lg-8 px-4 d-flex flex-sm-column flex-md-row flex-lg-row border-0 rounded-3 */}
                    <div className='container'>
                        <div className='row justify-content-center gap-5'>
                            <div className='card shadow-sm mt-4 col-sm-12 col-md-4 col-lg-4 py-1 d-flex flex-column border-0 rounded-3'>
                                <div className='d-flex justify-content-center'>
                                    <img src='https://picsum.photos/50/50' className='img-fluid w-25 rounded-circle' alt='Welcome Image' />
                                </div>
                                <div className='text-center'>
                                    <p className='fw-bold text-center py-2'>Honorine</p>
                                    <p>A full-stack developer</p>
                                    <p className='fw-bold'>The Masha Brand Company</p>
                                    <p className='py-2'>Running to be: <span className='lightyt'>
                                        President</span>
                                    </p>
                                </div>
                                <p className='text-center'>7 votes</p>
                            </div>
                            {/* ------------------------------------------------ */}
                            <div className='card shadow-sm mx-sm-0 mx-md-5 mx-lg-5 mt-4 col-sm-12 col-md-4 col-lg-4 py-1 d-flex flex-column border-0 rounded-3'>
                                <h5 className='lightmt text-center fw-bold py-2'>Organisations</h5>
                                <div className='d-flex justify-content-around border-1 border-bottom py-2'>
                                    <img src='https://picsum.photos/200/200' className='img-fluid rounded-circle' alt='Welcome Image' style={{ width: "50px", height: "50px" }} />
                                    <div className='d-flex flex-column'>
                                        <span className='fw-bold'>Honorine</span>
                                        <span>Positions: 3</span>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-around border-1 py-2 border-bottom'>
                                    <img src='https://picsum.photos/300/300' className='img-fluid rounded-circle' alt='Welcome Image' style={{ width: "50px", height: "50px" }} />
                                    <div className='d-flex flex-column'>
                                        <span className='fw-bold'>Honorine</span>
                                        <span>Positions: 3</span>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-around border-1 border-bottom py-2'>
                                    <img src='https://picsum.photos/25/25' className='img-fluid rounded-circle' alt='Welcome Image' style={{ width: "50px", height: "50px" }} />
                                    <div className='d-flex flex-column'>
                                        <span className='fw-bold'>Honorine</span>
                                        <span>Positions: 3</span>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-around border-1 py-2 border-bottom'>
                                    <img src='https://picsum.photos/75/75' className='img-fluid rounded-circle' alt='Welcome Image' style={{ width: "50px", height: "50px" }} />
                                    <div className='d-flex flex-column'>
                                        <span className='fw-bold'>Honorine</span>
                                        <span>Positions: 3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Personal details */}

                    <div className='container card shadow-sm mt-4 col-sm-12 col-md-8 col-lg-8 d-flex flex-column border-0 rounded-3'>
                        <p className='lightmt py-2'>Personal Details</p>
                        <div className='d-flex row'>
                            <p className='col-4'>Full name:</p>
                            <p className='col-8'>Honorine Igiraneza</p>
                        </div>
                        <div className='d-flex row py-2'>
                            <p className='col-4'>Email:</p>
                            <p className='col-8'>igiranezah8@gmail.com</p>
                        </div>
                        <div className='d-flex row'>
                            <p className='col-4'>Describe yourself:</p>
                            <p className='col-8'>"I couldn't have asked for more than this.
                                Since I invested in it I made over 100,000
                                dollars profits. I would be lost without it."
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;