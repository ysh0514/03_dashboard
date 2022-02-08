## 배포 주소
<a href=https://dashboard-12313.herokuapp.com/>데시보드 페이지</a>


## 💻 설치 방법

    npm install
    npm start
    
    
    

## 📂 파일 구조
  
src      
 ┣ assets        
 ┃ ┣ images        
 ┃ ┃ ┣ arrow.png        
 ┃ ┃ ┣ colorlogo.png            
 ┃ ┃ ┣ index.tsx       
 ┃ ┃ ┣ logo.png       
 ┃ ┃ ┣ menu.png       
 ┃ ┃ ┣ refresh.png         
 ┃ ┃ ┣ refresh_24px.png:Zone.Identifier              
 ┃ ┃ ┣ vector.png       
 ┃ ┃ ┗ vector2.png        
 ┃ ┗ styles                 
 ┃ ┃ ┣ CardStyle.ts      
 ┃ ┃ ┣ DashboardStyle.ts       
 ┃ ┃ ┣ GlobalStyle.ts       
 ┃ ┃ ┣ ModalStyle.ts       
 ┃ ┃ ┣ NavStyle.ts        
 ┃ ┃ ┣ Theme.ts       
 ┃ ┃ ┣ index.ts        
 ┃ ┃ ┗ styled.d.ts        
 ┣ components       
 ┃ ┣ Card.tsx       
 ┃ ┣ Material.ts        
 ┃ ┣ Menu.tsx     
 ┃ ┣ Method.ts        
 ┃ ┣ Modal.tsx        
 ┃ ┣ Nav.tsx          
 ┃ ┣ Toggle.tsx           
 ┃ ┣ index.tsx       
 ┃ ┗ type.ts        
 ┣ hooks     
 ┃ ┣ index.tsx      
 ┃ ┗ useRequestApi.tsx        
 ┣ pages        
 ┃ ┗ dashboard        
 ┃ ┃ ┗ Dashboard.tsx       
 ┣ utils        
 ┃ ┣ HttpUtil.tsx       
 ┃ ┗ index.tsx       
 ┣ App.tsx             
 ┗ index.tsx      
 

    
## 📝 기능

### 대시보드 페이지 HTML 구조 작업

- 대시보드 페이지의 기본 HTML 구조 설계
- 여섯 개의 견적 요청 카드는 컴포넌트로 분리해 각각의 카드에 해당하는 데이터를 화면에 보여줄 수 있도록 작업

### 대시보드 페이지 기본 스타일 적용

- 주어진 Figma 파일을 토대로 페이지의 스타일 적용

### 모달 컴포넌트

- UseState 를 사용하여 state 값에 따라 열리고 닫히는 모달창 구현.
- 아이콘 클릭 시 백그라운드가 어두워지고 메뉴화면이 좌측에서 등장하도록 구현.
- 백그라운드 클릭 시 닫히도록 구현.
- 모달창 활성화 시 스크롤이 동작하지 않도록 구현.

### 반응형 컴포넌트

- Media query 를 사용하여 지정한 width 값 미만 일 때 styled-component 속성을 변경하여 반응형 구현.

