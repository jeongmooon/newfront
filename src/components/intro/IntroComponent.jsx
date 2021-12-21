import React from "react";
import styled from "styled-components";

const IntroBlock = styled.div`
  padding: 1rem 0;
  box-sizing: border-box;
  height: calc(100vh - 6rem);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const DeveloperBlock = styled.div`
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  width: 80%;
  height: 150px;
  border-radius: 20px;
  & + & {
    margin-top: 20px;
  }
`;

const PhotoBlock = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const PhotoZone = styled.div`
  height: 60px;
  width: 60px;
  box-shadow: 1px 1px 3px silver;
  border-radius: 50%;
  margin: 0 auto;
  background-color: white;
  background-size: cover;
`;

const DescBlock = styled.div`
  height: 50%;
`;

const IntroComponent = () => {
  return (
    <IntroBlock>
      <DeveloperBlock>
        <PhotoBlock>
          <PhotoZone
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/BkCN5WTenqKL54KHojJ1EZd92SnWlGAd3OMY-NlWAZDZxMBeG-nd1WDNJy9Ne5UnOmi37hJhk5UxvBQrdBjbHiOzZKHfS2O7GcxEMco=w354")`,
            }}
          ></PhotoZone>
        </PhotoBlock>
        <DescBlock>
          ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㄴㅁㅇㄹㅁㄴㅇㄹㅁㄴㄹㄴㅇㄹㅁㄴㅇㄹㄴ
        </DescBlock>
      </DeveloperBlock>
      <DeveloperBlock>
        <PhotoBlock>
          <PhotoZone />
        </PhotoBlock>
        <DescBlock>
          ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㄴㅁㅇㄹㅁㄴㅇㄹㅁㄴㄹㄴㅇㄹㅁㄴㅇㄹㄴ
        </DescBlock>
      </DeveloperBlock>
      <DeveloperBlock>
        <PhotoBlock>
          <PhotoZone />
        </PhotoBlock>
        <DescBlock>
          ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㄴㅁㅇㄹㅁㄴㅇㄹㅁㄴㄹㄴㅇㄹㅁㄴㅇㄹㄴ
        </DescBlock>
      </DeveloperBlock>
    </IntroBlock>
  );
};

export default IntroComponent;
