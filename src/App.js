import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import GlobalStyle from "./libs/styles/GlobalStyle";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";
import IntroPage from "./pages/IntroPage";
import LoginPage from "./pages/LoginPage";
import NavbarContainer from "./containers/common/NavbarContainer";
import AdminSignInPage from "./pages/AdminSignInPage";
import AdminSignUpPage from "./pages/AdminSignUpPage";
import client from "./libs/api/client";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";
import LoadingComponent from "./components/loading/LoadingComponent";

function App() {
  // 네비게이트 이동바
  const navigate = useNavigate();

  // 칵테일 데이터 불러오기
  const [itemId, setItemId] = useState("");
  const [coktailData, setCoktailData] = useState([]);

  // 로딩 만들기
  const [loading, setLoading] = useState(true);

  // 로그인 관리
  const [isAdminLogined, setIsAdminLogined] = useState(false);
  const [admin, setAdmin] = useState(null);

  // 자동 로그인
  useEffect(() => {
    const token = localStorage.getItem("accessToken")
      ? localStorage.getItem("accessToken")
      : null;

    const test = async () => {
      client.defaults.headers["authorization"] = token;

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
    };

    if (token) {
      test();
      console.log("자동로그인완료");
    }
  }, []);

  // 가져온 데이터 불러오기
  useEffect(() => {
    getCoktailData();
  }, []);

  // 데이터 가져오기
  const getCoktailData = async () => {
    const response = await client.get("/coktail");
    setCoktailData(response.data.dataList);
    setLoading(false);
  };

  // 메인배너 랜덤 칵테일 추천기
  const randomCoktail = () => {
    const rand = Math.floor(Math.random() * coktailData.length);
    const result = coktailData[rand];
    navigate(`/detail/${result._id}`);
  };

  // 리턴 값들
  return (
    <>
      <NavbarContainer />
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              loading={loading}
              coktailData={coktailData}
              setItemId={setItemId}
              randomCoktail={randomCoktail}
            />
          }
        />
        <Route
          path="/detail/:id"
          element={
            <DetailPage itemId={itemId} isAdminLogined={isAdminLogined} />
          }
        />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adminsignup" element={<AdminSignUpPage />} />
        <Route
          path="/adminsignin"
          element={
            <AdminSignInPage
              setIsAdminLogined={setIsAdminLogined}
              setAdmin={setAdmin}
            />
          }
        />
      </Routes>
      <ToastsContainer
        position={ToastsContainerPosition.BOTTOM_CENTER}
        store={ToastsStore}
      />
    </>
  );
}

export default App;
