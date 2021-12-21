import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminSignUpComponet from '../../components/auth/AdminSignUpComponet';
import client from '../../libs/api/client';

function AdminSignUpContainer() {
    const navigate = useNavigate();
    const [adminInfo, setAdminInfo]= useState({
        adminId :"",
        email:"",
        password:"",
        passwordConfirm:"",
    })

    const onChangeInput = (e) =>{
        const {name, value} = e.target;

        setAdminInfo({
            ...adminInfo,
            [name]: value,
        })
    }

    const onClickSubmit = async(e)=>{
        // 비밀번호가 다르면 경고창
        const {adminId, email, password, passwordConfirm} = adminInfo;

        if(password !== passwordConfirm){
            return alert("비밀번호가 서로 일치하지 않습니다")
        }
        else if(adminId === ""){
            return alert("아이디를 입력하세요")
        }
        else if(email ===""){
            return alert("이메일을 입력하세요")
        }
        else if(password ===""){
            return alert("비밀번호를 입력하세요")
        }
        else if(passwordConfirm ===""){
            return alert("비밀번호 확인 입력하세요")
        } else {
            const data ={
                adminId,
                email,
                password
            }

            try {
                const response = await client.post('/admin/signup', data)

                if(response.status ===200){
                    alert("회원가입 완료")
                    navigate("/adminsignin")
                }
            } catch (error) {
                if(error.response.status === 400){
                    alert("이미 존재하는 회원 입니다")
                }
                console.log("회원가입 오류>>>>>",error)
            }
        }

    }

    return (
        <AdminSignUpComponet
        onChangeInput={onChangeInput}
        onClickSubmit={onClickSubmit}
        adminInfo={adminInfo} />
    )
}

export default AdminSignUpContainer
