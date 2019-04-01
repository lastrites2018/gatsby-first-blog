---
title: 첫 프로젝트 2주간의 로그 & TIL
date: 2018-11-10
category: TIL
---

2018-10-29 ~ 2018-11-10 진행된 2주 프로젝트 로그

## 프로젝트 1일차 ~ 프로젝트 3일차

- 프로젝트 각 페이지 구성 회의
- 구조도 작성 및 제출
- JSON 서버 데이터 포맷 확정 및 가동 테스트 & github 업로드(완료) 후 JSON 서버에서 로그인 TOKEN 쓸 수 있게 하는 방법 공부
- 카카오 auth failed

## 프로젝트 4일차

- 로그인 페이지 대강 만들기 & json server fake data 만든거 외엔 못 했다.
  알아낸 사실 : 개 사진 api만 제공하는 곳이 여러 곳 있다!

https://dog.ceo/api/breeds/image/random
https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1/url
https://thatapiguy.com/
https://thecatapi.com/
https://documenter.getpostman.com/view/4016432/the-dog-api/RW81vZ4Z
https://thedogapi.com/?image_id=B1uW7l5VX
http://debuglog.tistory.com/16

```react
const element = <h1>4 곱하기 6 = {4*6}</h1>
const element2 = <h1> 이름 : {devpools.name}</h1>
```

16 버전부터 여러 개의 컴포넌트를 동시에 리턴할 수 있게 되었다.

```react
// 15버전까지 실패
function renderLogin() {
    return <label>ID</label><input type="text" /> <br />;
    	   <label>pW</label><input type="password" />;
}

//16 버전부터 div로 묶어서 하나의 컴포넌트로 표현할 수 있고 위 아래 두 예제 둘 다 적용가능
function renderLogin() {

    return <div>
    <label>ID</label><input type="text" /> <br />;
    	   <label>pW</label><input type="password" />;
        </div>
}
```

\*\* JSX에서 HTML 태그를 사용할 땐 항상 소문자를 사용. 사용자가 직접 만든 리액트 컴포넌트와 구별하기 위함.

## 마운트 생명주기

Mounting

getDefaultProps() ->이 단계에서는 this.state 값 참조 할 수 없고 this.setState() 함수 사용 불가

getInitialState() -> 이 단계에서는 this.state 값 참조 할 수 없고 this.setState() 함수 사용 불가

render() -> this.setState() 함수 사용 불가

componentDidmount()

https://jgthms.com/web-design-in-4-minutes/

## 프로젝트 5일차 ~ 프로젝트 8일차

- JWT auth + JSON 서버 준비
- 로그인 시에, setState로 테스트 쿠키가 세팅되고, 로그 아웃시 쿠키가 삭제되도록 변경. #day7
- 로그인 시에, 로그인 헤더가 로그 아웃 헤더로 변환되도록 수정. 로그아웃 시, 로그인 헤더가 로그아웃 헤더로 변환되도록 수정. #day7
- 검색과 post를 위해 양식에 맞게 db.json 에 시, 구, 상세주소 더미 데이터 추가 #day7
- 로그인 시에, 서버로 접속해서 아이디 비밀 번호 일치 여부 확인 후에 JWT 토큰 받아와서 쿠키에 저장. #day8

## 프로젝트 9일차

- deploy 1st
- Mypage에서 클라이언트가 보유한 JWT 토큰을 헤더에 포함하여 EC2 서버에 만든 auth/check api로 보내서 인증 후 기본적인 유저 정보를 받아와서 화면에 뿌려주는 리액트 작업 + JSON 서버 수정 작업.
- Mypage 서버와 연동완료
- JWT with JSON 서버 로컬이 아닌 AWS 서버에 올려서 가동시키기
- EC2 nginx 설치하여 5000으로 프록시 설정.

### EC2 접속

https://aws.amazon.com/ko/getting-started/tutorials/launch-a-virtual-machine/?trk=gs_card

### nginx

https://hue9010.github.io/aws/nginx%EB%A5%BC-%EC%A0%81%EC%9A%A9%ED%95%B4-%EB%B3%B4%EC%9E%90/

배포시 서버 무중단하기 아래 참조할 것

https://jojoldu.tistory.com/267?category=635883

https://medium.com/@taeyeolkim/aws-ec2%EC%97%90-%EC%9B%B9%EC%84%9C%EB%B2%84-nginx-%EC%84%A4%EC%B9%98%ED%95%98%EA%B3%A0-%EA%B5%AC%EB%8F%99%ED%95%98%EA%B8%B0-a46a6e9484a8

http://wingsnote.com/55

```



sudo vi /etc/nginx/nginx.conf
수정이 끝나셨으면 :wq로 저장 & 종료 하시고, Nginx를 재시작하겠습니다.

sudo service nginx restart

```

### [AWS 의 EC2 로 우분투 서버 구축하였습니다. 포트 포워딩에 대해서.](https://hashcode.co.kr/questions/1795/aws-%EC%9D%98-ec2-%EB%A1%9C-%EC%9A%B0%EB%B6%84%ED%88%AC-%EC%84%9C%EB%B2%84-%EA%B5%AC%EC%B6%95%ED%95%98%EC%98%80%EC%8A%B5%EB%8B%88%EB%8B%A4-%ED%8F%AC%ED%8A%B8-%ED%8F%AC%EC%9B%8C%EB%94%A9%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C)

### 터미널에서 줄 시작 위치로 이동하기

https://code.i-harness.com/ko-kr/q/13d78

- ctrl + A 는 줄의 시작으로 점프합니다.
- Ctrl + E 를 누르면 줄 끝으로 이동합니다.

그외

- alt (⌥) + D 현재 커서 위치에서 단어를 삭제하려면
- ctrl + A 는 줄의 시작으로 점프합니다.
- Ctrl + E 를 누르면 줄 끝으로 이동합니다.
- ctrl + K 커서 위치에서 시작하는 줄을 죽입니다.
- 죽이기 버퍼에서 텍스트를 붙여 넣기위한 ctrl + Y
- Ctrl + R 을 누르면 과거 기록에서 입력 한 명령의 역 검색이 가능합니다.
- ctrl + S 는 검색을 전달합니다 (zsh에서는 작동하지만 bash에서는 작동하지 않습니다).
- Ctrl + F 를 누르면 char으로 앞으로 이동합니다.
- Ctrl + B 를 사용하여 문자로 뒤로 이동
- ctrl + W 커서 위치에서 단어를 뒤로 이동시킵니다.

### vi 에디터

http://www.leafcats.com/115

: set number 라인 넘버 표시

\- **gg** : 첫 행으로 이동.

\- **G (Shift + g)** : 마지막 행으로 이동.

\- **^ / Home / Shift + 6** : 현재 행의 첫 문자로 이동.

\- **\$ / End / Shift + 4** : 현재 행의 마지막 문자로 이동.

\- **숫자 타이핑하고 Shift + G** : 타이핑한 숫자에 해당하는 행으로 이동.

### 아마존 포트 열기

http://limkydev.tistory.com/20

\1. 자신의 아마존 인스턴스 Security Groups에서 원하는 포트번호 설정한다.

\2. iptable 명령어를 이용 톰캣 포트를 포트포워딩을 해주면 끝.

리눅스 기반의 아마존 인스턴스 경우는 리눅스 자체적으로 보안상 포트번호를 바꿀수 있는 권한을 일반유저에게 주지않는다. 따라서 아무리 일반 유저가 톰캣 server.xml을 바꾸고 난리쳐도 안바뀐다. 이때 사용하는 것이 iptable이라는 녀석인데 이거 명령어 하나만 쳐주면 80 포트를 자동으로 8080포트로 포트포워딩이 된다!!
(# iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8080)

### how to kill nodemon

https://stackoverflow.com/questions/45520706/how-to-kill-nodemon-process-on-mac

```shell
# 실행중인 프로세스 보기
ps -ef | grep node
# 프로세스 아이디로 죽이기
sudo kill -9 <PID>

```

PID is the process ID. Try the following command in terminal to list and search for process using a regex:-

```
ps gx | grep 'Symantec'
```

The above example is to list all the 'Symantec' related processes. Replace 'Symantec' with your own phrase. Next use variations of 'kill' command. You can either use:-

```
kill pid
```

Replace 'pid' with actual process id. Or use,

```
killall
```

as suggested before. To reiterate another useful suggestion, use

```
man kill
```

### pm2 노드 관리

https://blog.outsider.ne.kr/1197

https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/terminating-instances.html

.env

http://webinformation.tistory.com/106

### 다음 프로젝트시 개선점

json을 사용하더라도 db 기초 명세서를 철저하게 배부해서, 각자 새로운 변수를 만드는 일이 없도록 하기

### remove gh-pages

```
git push origin --delete gh-pages
https://coderwall.com/p/8hwbaa/remove-a-github-page
```

## 프로젝트 10일차

- 회원 가입시에 뜨던 CORS + Bad gate way 문제 수정 완료.
- Sign up 후에 axios.post로 데이터 입력 후에 로그인 처리.
- S3 파일 업로드 API를 EC2에 올려서 사용할 수 있도록 코드 마무리 수정하고, 기존 JSON(+JWT) 서버에 포함시켜서 테스트 완료 후 서버 가동.

### FileZilla 써서 EC2 서버 접속해서 데이터 옮기기

시크릿 키는 보안상 git 에 올려서 git clone으로 옮기는 식으로 할 수는 없기 때문에 결국

파일질라 사용. 일모님은 scp를 추천해주셨지만 시간 관계상 scp를 배울 상황이 아니었기 때문에 그나마 빠른 방법으로 해결.

http://ithub.tistory.com/48

대체적으로 위 링크대로 따라하면 됐으나 안 된 부분들.

https://www.cyberciti.biz/faq/howto-restart-ssh/

```
https://www.cyberciti.biz/faq/howto-restart-ssh/

맥 os에서는
$ sudo systemctl restart sshd로 재시작해야 함.


```

추후 과제 : SCP 사용법 배울 것

https://www.google.co.kr/search?ei=sVPkW4zcMcul8AXdv6WIAQ&q=scp+%EC%82%AC%EC%9A%A9%EB%B2%95

### SCP?

http://ict-nroo.tistory.com/40

### aws-cli

https://blog.algopie.com/aws/aws-cli%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-ec2%EC%97%90%EC%84%9C-s3%EB%A1%9C-%EC%97%85%EB%A1%9C%EB%93%9C%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-%ED%95%98%EA%B8%B0-%EC%9A%B0%EB%B6%84%ED%88%AC/

### 환경변수에 설정 정보 저장하기

https://ntalbs.github.io/2014/config-vars/

### GIT에서 .GITIGNORE 설정하기

https://josephkim75.wordpress.com/2012/06/13/git%EC%97%90%EC%84%9C-gitignore-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0/

### 아마존 리전 설정

https://docs.aws.amazon.com/ko_kr/general/latest/gr/rande.html

## 프로젝트 11일차

- 유저 정보와 일치하는 더미 데이터 글 생성해주고, 더미 데이터 125개로 확장, 테스트 계정 고정 설정.

배포 자동화
IM 유저 생성하기

http://victorydntmd.tistory.com/67

```
AWS Management Console 액세스 권한이 있는 사용자가 https://117336563912.signin.aws.amazon.com/console에 로그인할 수 있습니다.

 .csv 다운로드

Install Code Deploy Agent on EC2 Linux instance

[Raw](https://gist.github.com/rfajarachmad/c45386829fbdd8a7ae6b40cb47fc1111/raw/eb8a82287c6e7c4481aa3d1807f18d68c697e1f2/install_codedeploy_agent_linux.sh)

[**install_codedeploy_agent_linux.sh**](https://gist.github.com/rfajarachmad/c45386829fbdd8a7ae6b40cb47fc1111#file-install_codedeploy_agent_linux-sh)

|     | sudo yum update                                                                       |
| --- | ------------------------------------------------------------------------------------- |
|     | sudo yum install ruby                                                                 |
|     | sudo yum install wget                                                                 |
|     | wget https://{bucket-name}.s3.amazonaws.com/latest/install                            |
|     | chmod +x ./install                                                                    |
|     | sudo ./install auto                                                                   |
|     |                                                                                       |
|     | ## bucket-name represents one of the following:                                       |
|     | ## aws-codedeploy-us-east-1 for instances in the US East (N. Virginia) region         |
|     | ## aws-codedeploy-us-west-1 for instances in the US West (N. California) region       |
|     | ## aws-codedeploy-us-west-2 for instances in the US West (Oregon) region              |
|     | ## aws-codedeploy-eu-west-1 for instances in the EU (Ireland) region                  |
|     | ## aws-codedeploy-eu-central-1 for instances in the EU (Frankfurt) region             |
|     | ## aws-codedeploy-ap-northeast-1 for instances in the Asia Pacific (Tokyo) region     |
|     | ## aws-codedeploy-ap-southeast-1 for instances in the Asia Pacific (Singapore) region |
|     | ## aws-codedeploy-ap-southeast-2 for instances in the Asia Pacific (Sydney) region    |
|     | ## aws-codedeploy-sa-east-1 for instances in the South America (São Paulo) region     |
|     |                                                                                       |
|     | sudo service codedeploy-agent status                                                  |

```

## 프로젝트 12일차 (마지막 날)

- 프론트는 S3에 배포
- EC2 자동 배포 연구중 -> 실패
- S3 간단 배포 성공
- 각자 신경써서 스터디한 내용 팀원끼리 공유(팀 자체 세미나)
- 발표
