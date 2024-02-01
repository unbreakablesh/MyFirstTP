# 1차 프로젝트
## front-end skill up & team cooperative work
[AWS 실행환경] (http://54.252.129.145:3000)
***
## 개요
* 팀과 협업을 하여 약 3주간 배운 기술로 홈페이지를 제작하였습니다.
### 팀원소개
* 팀장 : 엄현빈
* 총무 : 이재우
* 디자이너 : 가현
* 디자이너2 : 여진
### 개발 기간
* 2024/01/18~일주일
### 사용 skill set
* HTML
* CSS
* JavaScript
* JQuery
### 개발환경
* 인텔리제이
* vim
***
## 담당업무
#### 이재우
* 홈페이지 제작

## 주요기능 및 핵심 코드
#### 이재우
* MOBILE 용 반응성 웹페이지 개발  
  ![](./j1.PNG)

```css
'''css
@media (max-width:580px ) {
/*기본은 480px*/
#wrap {
grid-template-areas:
"header"
"nav"
"section"
"aside"
"footer";
grid-template-columns: 100%;
grid-template-rows: 100px 200px 700px 400px 300px;
}
}
'''
```

* 쿠폰,뉴스 관련 팝업 설정  
  (이미지)   
  (코드코드)
* 기본 챗봇 탑제  
  (이미지)   
  (코드코드)
* 모듈 이용 하여 자동 이미지 슬라이드 탑제  
  (이미지)   
  (코드코드)
* LIVE RANDOM DATA를 시각화 하여 차트 제작  
  (이미지)   
  (코드코드)

## 향후 과제
* AWC-Ec2 서버 구축
* NodeJS를 통한 비동기 I/O 처리 가능한 서버환경구축
* Linux 환경 control
* Docker를 이용하여 다양한 컨테이너 이용
    * nignx
    * MySQL