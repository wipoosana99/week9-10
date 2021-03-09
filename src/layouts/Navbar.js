import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import '../App.css';

const Footer = () => {
    return (     
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-info text-info">
        <div className="container">
        <Link className="navbar-brand" to="/">วท.ตราด</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/about">เกี่ยวกับ</Link>
        </li>
        <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        แผนกวิชา
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="http://www.trattc.ac.th/~electric/" target="_blank">แผนกวิชาช่างไฟฟ้า</a>
        <a className="dropdown-item" href="http://www.trattc.ac.th/~electronic/" target="_blank">แผนกวิชาช่างอิเล็กทรอนิกส์</a>
        <a className="dropdown-item" href="http://www.trattc.ac.th/~building/" target="_blank">แผนกวิชาช่างก่อสร้าง</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="http://www.trattc.ac.th/~nexttrat/" target="_blank">วิทยาลัยเทคนิคตราด</a>
        </div>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/Info">ข่าวสาร</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/contact">ติดต่อเรา</Link>
        </li>
        </ul>
        </div>
        </div>
        </nav>
        </div>
    )
}

export default Footer
