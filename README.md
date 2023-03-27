<p align="middle" >
<img width="200px;" src="https://yt3.googleusercontent.com/h6TfBfR-dul9Po5CKnXYKEA-gS08s5YyoK7fadEnlQhU2UwJ94W4RM3ey1XPdObEuWyql-Mv=s900-c-k-c0x00ffffff-no-rj"/>
</p>
<h1 align="middle">DJ 303</h1>
<p align="middle">Chat GPT 음악 추천 서비스</p>

### 프로젝트 소개 🎵

DJ 303은 Chat GPT 기반의 `음악 추천 서비스` 입니다. 좋아하는 취향의 노래를 바탕으로 검색을 할 수 있습니다.  
DJ 303 서비스를 통해 검색을 해보세요!

---

## API 정리 📚

### **1. 음악 추천 리스트 질의**
HTTP METHOD|URL|
|------|---|
|GET|http://{server_ip}/gptAPI/playList|

### **Request**

| Name | Type | Description | Mandatory |
|------|------|------|-----|
|question  | String |질문할 문자열| Y|


### **Response**
| Name | Type | Description |
|------|------|------|
| input  | String | 입력 값|
| code  | Integer | 응답 코드|
| playList  | Array | 플레이 리스트|

### **Example**
- Request :
`http://{server_ip}/gptAPI/playListquestion=윤하 - 사건의지평선 같은 노래 추천좀 해줄수 있나요?`

- Response 
```json
{
    "inputText": "윤하 - 사건의지평선 같은 노래 추천좀 해줄수 있나요?",
    "code": 200,
    "playList": [
        "1. 이별의 길 - 소녀시대",
        "2. 가을에 바래다줄게 - 장범준",
        "3. 눈물샘 - 박정현",
        "4. 슬픈 이별 - 김광연",
        "5. 내 마음을 담아서 - 박화요비",
        "6. 너를 사랑하고 있어 - 장범준",
        "7. 사랑하는 마음으로 - 이승철",
        "8. 그대는 알까요 - 박완규",
        "9. 사랑하는 마음으로 - 이승철",
        "10. 사랑하는 사이 - 박정현"
    ]
}
```

---

## 프로젝트 기술스택 🏰

### Back-End 🏫

![백엔드](https://user-images.githubusercontent.com/57438644/194008987-08fe38f0-7ab6-423a-83d0-dc575c9aaa4f.JPG)

### Front-End 🏡

![프론트엔드](https://user-images.githubusercontent.com/57438644/194008987-08fe38f0-7ab6-423a-83d0-dc575c9aaa4f.JPG)
