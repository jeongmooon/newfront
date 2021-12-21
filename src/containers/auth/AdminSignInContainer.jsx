import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSignInComponent from "../../components/auth/AdminSignInComponent";
import client from "../../libs/api/client";

function AdminSignInContainer({ setAdmin, setIsAdminLogined }) {
  const navigate = useNavigate();
  const [adminInfo, setAdminInfo] = useState({
    adminId: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setAdminInfo({
      ...adminInfo,
      [name]: value,
    });
  };

  const onClickSubmit = async (e) => {
    if (adminInfo.adminId === "" && adminInfo.password === "") {
      return alert("정보를 입력하세요");
    } else {
      if (adminInfo.adminId === "") {
        return alert("아이디를 입력하세요");
      }
      if (adminInfo.password === "") {
        return alert("비밀번호를 입력하세요");
      }
      const adminData = {
        adminId: adminInfo.adminId,
        password: adminInfo.password,
      };
      try {
        const response = await client.post("/admin/signin", adminData);
        if (response.status === 200) {
          const { accessToken } = response.data;

          // setItem넣기 getItem은 빼기
          localStorage.setItem("accessToken", accessToken);
          client.defaults.headers.common["authorization"] = `${accessToken}`;

          let result;
          try {
            result = await client.get("/user");
          } catch (error) {
            console.log("토큰로그인에러 >>>>", error);
          }

          const targetUser = result.data.data;
          console.log(targetUser);

          //데이터 왔나 체크
          //   console.log("데이터 체크 >>>", targetUser);

          setAdmin(targetUser);
          setIsAdminLogined(true);

          alert("로그인 완료");
          navigate("/");
        }
      } catch (error) {
        console.log("로그인 에러>>", error);
        if (error.response.status === 400) {
          alert("존재 하지 않는 계정입니다");
          setAdminInfo({
            adminId: "",
            password: "",
          });
        }
        if (error.response.status === 401) {
          alert("비밀번호 틀렸습니다");
          setAdminInfo({
            adminId: "",
            password: "",
          });
        }
        if (error.response.status === 402) {
          alert("계정이 잠겼습니다. 고객센터문의 해주세요");
          navigate("/");
        }
      }
    }
  };

  return (
    <AdminSignInComponent
      adminInfo={adminInfo}
      onClickSubmit={onClickSubmit}
      onChangeInput={onChangeInput}
    />
  );
}

export default AdminSignInContainer;
