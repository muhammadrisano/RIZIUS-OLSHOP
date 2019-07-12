import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/Sidebar.css'
function Sidebar() {
    const [li, setLi] = useState([])
    const [li2, setLi2] = useState([])
    let data = []
    data['Peralatan Elektronik'] = ['Handphone', 'Laptop', 'Desktop', 'Kamera', 'Game Console', 'Gadget', 'Tablet']
    data['Laptop'] = ['Laptop Consumer', 'Laptop Gaming', 'Laptop 2-in-1s']
    data['Komputer'] = ['PC Gaming', 'Komputer Rakitan', 'All-In-One']
    data['Kamera'] = ['DSLR', 'Kamera Mirrorless', 'Kamera Pocket', 'Kamera Aksi', '360 Cameras', 'Kamera CCTV', 'IP Cameras', 'Video Camera', 'Kamera Instan']
    data['Game Console'] = ['PlayStation', 'Game Playstation', 'Stick Playstation', 'Nintendo', 'Game Nintendo', 'Stick Nintendo', 'Xbox', 'Game Xbox', 'Konsol Game Lainnya']
    data['Gadget'] = ['Rokok Elektrik', 'Drone', 'Media Player', 'Walkie-Talkie']

    data['Aksesoris Elektronik'] = ['Aksesoris Handphone', 'Aksesoris Komputer', 'Audio', 'Aksesoris Berteknologi', 'Aksesoris Kamera', 'Penyimpanan Data', 'Printer', 'Aksesoris Tablet', 'Aksesoris Game Console', 'Komponen Komputer']
    data['Aksesoris Handphone'] = ['Powerbank', 'Casing Handphone', 'Charger Handphone', 'Pelindung Layar', 'Baterai Handphone', 'Peralatan & Suku Cadang', 'Kabel Handphone', 'Phone Holder', 'Tongsis', 'Aksesoris Handphone Lainnya']
    data['Aksesoris Komputer'] = ['Mouse', 'Keyboard Komputer', 'Monitor', 'Proyektor', 'Audio PC', 'Adaptor & Kabel', 'Mousepad', 'Cooling Pads', 'Adaptor Baterai Komputer', 'Aksesoris Mac']
    data['Audio'] = ['Headphone & Headset', 'Speaker Portabel', 'Speaker Smart']
    data['Aksesoris Berteknologi'] = ['Smartwatch', 'Aksesoris Smartwatch', 'Smart Tracker', 'Activity Tracker', 'Virtual Reality', 'Kendali Gerakan', 'Kacamata Pintar', 'Aksesoris Fitness Tracker']
    data['Aksesoris Kamera'] = ['Lensa Kamera', 'Flash', 'Kartu Memori', 'Sarung, Pelindung & Tas Ka', 'Charger Kamera', 'Baterai Kamera', 'Tripod & Monopod', 'Aksesoris Kamera Aksi', 'Aksesoris Kamera Instan', 'Perlengkapan Lighting & Stu']
    data['Penyimpanan Data'] = ['Harddisk Eksternal', 'Hard Drive Internal', 'Internal SSD', 'Eksternal SSD', 'Flash Drive', 'OTG Drive', 'Penyimpanan untuk Mac']
    data['Printer'] = ['Printer', 'Tinta Printer', 'Printer 3D', 'Printer POS & Thermal', 'Mesin Faks', 'Mesin Cutting Sticker', 'Memori Printer']
    data['Aksesoris Tablet'] = ['Casing Tablet', 'Keyboard Tablet', 'Pen Stylus Tablet']
    data['Aksesoris Game Console'] = ['Stick Playstation', 'Analog Extension', 'PlayStation Chargers', 'Stick Nintendo', 'Casing Nintendo', 'Nintendo Screen Protectors', 'Nintendo Chargers', 'Xbox Controllers', 'Xbox Chargers', 'Aksesoris Game Lainnya']
    data['Komponen Komputer'] = ['RAM', 'Motherboard', 'Prosesor', 'Kartu Grafis', 'Casing Komputer', 'Power Supply Unit', 'Soundcard', 'Front Panel', 'Water Cooling System']
    useEffect(() => {
        let li = document.getElementById('sidebar1').getElementsByTagName('li')
        li = [...li]
        li.map((item) => {
            item.addEventListener('mouseenter', function (evt) {
                let datas = data[this.innerText]
                if (datas !== undefined) {
                    let a = datas.map(item => {
                        let icon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjYiIGhlaWdodD0iMjYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2YzNmQwMCI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNNjguMzcsMjguNTk1bC05Ljc4MjUsOS43ODI1bDQ3LjczLDQ3LjYyMjVsLTQ3LjczLDQ3LjczbDkuNjc1LDkuNjc1bDUyLjU2NzUsLTUyLjU2NzVsNC45NDUsLTQuODM3NWwtNC45NDUsLTQuODM3NXoiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4="
                        return (
                            <Link to={`/categoryList/${item.replace(/\s/g,'')}`}><li style={{ padding: "4px 10px", fontSize: 13.5, color: "#666" }}>{item}<span style={{ position: "absolute", width: 20, right: 5, marginTop: -22, display: 'none' }}><img src={icon} width="100%" /></span></li></Link>
                        )
                    })
                    setLi(a)
                    this.classList.add('active')
                    this.getElementsByTagName('span')[0].style.display = 'block'
                    document.getElementById('sidebar2').style.display = 'block'
                }
            })
            item.addEventListener('mouseleave', function () {
                if (item.className === "active") {
                    this.classList.remove('active')
                    this.getElementsByTagName('span')[0].style.display = 'none'
                    document.getElementById('sidebar2').style.display = 'none'

                }
            })
            document.getElementById('sidebar2').addEventListener('mouseenter', function () {
                document.getElementById('sidebar2').style.display = 'block'
                this.classList.remove('active')
                let li1 = document.getElementById('sidebar2').getElementsByTagName('li')
                li1 = [...li1]
                li1.map((item) => {
                    item.addEventListener('mouseenter', function (evt) {
                        let datas = data[this.innerText]
                        if (datas !== undefined) {
                            let a = datas.map(item =>
                                <Link to={`/categoryList/${this.innerText.replace(/\s/g,'')}/${item.replace(/\s/g,'')}`}><li style={{ padding: "4px 10px", fontSize: 13.5, color: "#666" }}>{item}</li></Link>
                            )
                            setLi2(a)
                            this.classList.add('active')
                            this.getElementsByTagName('span')[0].style.display = 'block'
                            document.getElementById('sidebar3').style.display = 'block'
                        }
                    })
                    item.addEventListener('mouseleave', function () {
                        if (item.className === "active") {
                            this.classList.remove('active')
                            this.getElementsByTagName('span')[0].style.display = 'none'
                            document.getElementById('sidebar3').style.display = 'none'

                        }
                    })
                    document.getElementById('sidebar3').addEventListener('mouseenter', function () {
                        document.getElementById('sidebar3').style.display = 'block'

                        this.classList.remove('active')
                    })
                    document.getElementById('sidebar3').addEventListener('mouseleave', function () {
                        document.getElementById('sidebar3').style.display = 'none'
                        document.getElementById('sidebar2').style.display = 'none'
                        this.classList.remove('active')
                    })
                }
                )

            })
            document.getElementById('sidebar2').addEventListener('mouseleave', function () {

                this.classList.remove('active')
            })
        }
        )
    })
    return (
        <div style={{ background: "white", paddingTop: "5px", }}>
            <div style={{ backgroundColor: "white", boxShadow: "0px 0px 3px #999", position: "absolute", zIndex: "10", left: 80 }}>
                <ul id={'sidebar1'} style={{ margin: 0, listStyleType: "none", height: "358px", width: 200, padding: "10px 0px" }}>
                    <li>Peralatan Elektronik <span style={{ position: "absolute", width: 20, right: 5, marginTop: -22, display: 'none' }}><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjYiIGhlaWdodD0iMjYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2YzNmQwMCI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNNjguMzcsMjguNTk1bC05Ljc4MjUsOS43ODI1bDQ3LjczLDQ3LjYyMjVsLTQ3LjczLDQ3LjczbDkuNjc1LDkuNjc1bDUyLjU2NzUsLTUyLjU2NzVsNC45NDUsLTQuODM3NWwtNC45NDUsLTQuODM3NXoiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=" width="100%" /></span></li>
                    <li>Aksesoris Elektronik <span style={{ position: "absolute", width: 20, right: 5, marginTop: -22, display: 'none' }}><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjYiIGhlaWdodD0iMjYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2YzNmQwMCI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNNjguMzcsMjguNTk1bC05Ljc4MjUsOS43ODI1bDQ3LjczLDQ3LjYyMjVsLTQ3LjczLDQ3LjczbDkuNjc1LDkuNjc1bDUyLjU2NzUsLTUyLjU2NzVsNC45NDUsLTQuODM3NWwtNC45NDUsLTQuODM3NXoiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=" width="100%" /></span></li>
                    <li>Fashion Wanita <span style={{ position: "absolute", width: 20, right: 5, marginTop: -22, display: 'none' }}><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjYiIGhlaWdodD0iMjYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2YzNmQwMCI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNNjguMzcsMjguNTk1bC05Ljc4MjUsOS43ODI1bDQ3LjczLDQ3LjYyMjVsLTQ3LjczLDQ3LjczbDkuNjc1LDkuNjc1bDUyLjU2NzUsLTUyLjU2NzVsNC45NDUsLTQuODM3NWwtNC45NDUsLTQuODM3NXoiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=" width="100%" /></span></li>
                    <li>Fashion Pria <span style={{ position: "absolute", width: 20, right: 5, marginTop: -22, display: 'none' }}><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjYiIGhlaWdodD0iMjYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2YzNmQwMCI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNNjguMzcsMjguNTk1bC05Ljc4MjUsOS43ODI1bDQ3LjczLDQ3LjYyMjVsLTQ3LjczLDQ3LjczbDkuNjc1LDkuNjc1bDUyLjU2NzUsLTUyLjU2NzVsNC45NDUsLTQuODM3NWwtNC45NDUsLTQuODM3NXoiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=" width="100%" /></span></li>
                    <li>Jam Tangan & Aksesoris <span style={{ position: "absolute", width: 20, right: 5, marginTop: -22, display: 'none' }}><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjYiIGhlaWdodD0iMjYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2YzNmQwMCI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNNjguMzcsMjguNTk1bC05Ljc4MjUsOS43ODI1bDQ3LjczLDQ3LjYyMjVsLTQ3LjczLDQ3LjczbDkuNjc1LDkuNjc1bDUyLjU2NzUsLTUyLjU2NzVsNC45NDUsLTQuODM3NWwtNC45NDUsLTQuODM3NXoiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=" width="100%" /></span></li>
                    <li>Kesehatan & Kecantikan<span style={{ position: "absolute", width: 20, right: 5, marginTop: -22, display: 'none' }}><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjYiIGhlaWdodD0iMjYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2YzNmQwMCI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNNjguMzcsMjguNTk1bC05Ljc4MjUsOS43ODI1bDQ3LjczLDQ3LjYyMjVsLTQ3LjczLDQ3LjczbDkuNjc1LDkuNjc1bDUyLjU2NzUsLTUyLjU2NzVsNC45NDUsLTQuODM3NWwtNC45NDUsLTQuODM3NXoiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=" width="100%" /></span></li>
                    <li>Bayi & Mainan<span style={{ position: "absolute", width: 20, right: 5, marginTop: -22, display: 'none' }}><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjYiIGhlaWdodD0iMjYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2YzNmQwMCI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNNjguMzcsMjguNTk1bC05Ljc4MjUsOS43ODI1bDQ3LjczLDQ3LjYyMjVsLTQ3LjczLDQ3LjczbDkuNjc1LDkuNjc1bDUyLjU2NzUsLTUyLjU2NzVsNC45NDUsLTQuODM3NWwtNC45NDUsLTQuODM3NXoiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=" width="100%" /></span></li>
                    <li>TV & Elektronik Rumah<span style={{ position: "absolute", width: 20, right: 5, marginTop: -22, display: 'none' }}><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjYiIGhlaWdodD0iMjYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2YzNmQwMCI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNNjguMzcsMjguNTk1bC05Ljc4MjUsOS43ODI1bDQ3LjczLDQ3LjYyMjVsLTQ3LjczLDQ3LjczbDkuNjc1LDkuNjc1bDUyLjU2NzUsLTUyLjU2NzVsNC45NDUsLTQuODM3NWwtNC45NDUsLTQuODM3NXoiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=" width="100%" /></span></li>
                    <li>Keperluan Rumah & Gaya Hi... <span style={{ position: "absolute", width: 20, right: 5, marginTop: -22, display: 'none' }}><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjYiIGhlaWdodD0iMjYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2YzNmQwMCI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNNjguMzcsMjguNTk1bC05Ljc4MjUsOS43ODI1bDQ3LjczLDQ3LjYyMjVsLTQ3LjczLDQ3LjczbDkuNjc1LDkuNjc1bDUyLjU2NzUsLTUyLjU2NzVsNC45NDUsLTQuODM3NWwtNC45NDUsLTQuODM3NXoiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=" width="100%" /></span></li>
                    <li>Kebutuhan Rumah Tangga <span style={{ position: "absolute", width: 20, right: 5, marginTop: -2, display: 'none' }}><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjYiIGhlaWdodD0iMjYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2YzNmQwMCI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNNjguMzcsMjguNTk1bC05Ljc4MjUsOS43ODI1bDQ3LjczLDQ3LjYyMjVsLTQ3LjczLDQ3LjczbDkuNjc1LDkuNjc1bDUyLjU2NzUsLTUyLjU2NzVsNC45NDUsLTQuODM3NWwtNC45NDUsLTQuODM3NXoiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=" width="100%" /></span></li>
                    <li>Olahraga & Outdoor  <span style={{ position: "absolute", width: 20, right: 5, marginTop: -22, display: 'none' }}><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjYiIGhlaWdodD0iMjYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2YzNmQwMCI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNNjguMzcsMjguNTk1bC05Ljc4MjUsOS43ODI1bDQ3LjczLDQ3LjYyMjVsLTQ3LjczLDQ3LjczbDkuNjc1LDkuNjc1bDUyLjU2NzUsLTUyLjU2NzVsNC45NDUsLTQuODM3NWwtNC45NDUsLTQuODM3NXoiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=" width="100%" /></span></li>
                    <li>Otomotif <span style={{ position: "absolute", width: 20, right: 5, marginTop: -22, display: 'none' }}><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjYiIGhlaWdodD0iMjYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2YzNmQwMCI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNNjguMzcsMjguNTk1bC05Ljc4MjUsOS43ODI1bDQ3LjczLDQ3LjYyMjVsLTQ3LjczLDQ3LjczbDkuNjc1LDkuNjc1bDUyLjU2NzUsLTUyLjU2NzVsNC45NDUsLTQuODM3NWwtNC45NDUsLTQuODM3NXoiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=" width="100%" /></span></li>
                </ul>
            </div>
            <div style={{ backgroundColor: "white", boxShadow: "0px 0px 3px #999", position: "absolute", zIndex: "10", left: 280 }}>
                <ul id={'sidebar2'} style={{ margin: 0, listStyleType: "none", height: "358px", width: 200, padding: "10px 0px", display: "none" }}>
                    {li}
                </ul>
            </div>
            <div style={{ backgroundColor: "white", boxShadow: "0px 0px 3px #999", position: "absolute", zIndex: "10", left: 480 }}>
                <ul id={'sidebar3'} style={{ display: "none" }}>
                    {li2}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar