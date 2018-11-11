# 개발 일지

## 11.11 Sunday

    1. repository 생성
    - wooje의 원격 저장소로 생성
    - frontend는 wooje branch에서 backend는 pkch branch에서 개발
    - spring boot로 Restful API 서버를 만들고 reactjs로 뷰를 생성하는 프로젝트 구성

    2. Backend 환경설정 및 개발
    - web, jpa, h2 모듈 설정
    - DB 설계해둔 Account, Party, Notice, Schedule Entity와 Repository 생성
    - 그 밖에 controller, service, repository, config 패키지를 만들어 전체 backend의 골격을 맞춤

    ※ 생각해볼점
    - Account를 Facebook과 연동하여 login을 할 예정, 따라서 Account 객체의 DB 구조를 Facebook에서 받는 정보와 연관을 지어야 할 것 같다.

    - Party Entity의 koreanTime 컬럼을 Integer로 선언할지, Date로 선언할 지 고민... 이 부분은 분 단위, 시 단위로 시간 계산을 하는 방법을 공부해야 할 것으로 생각한다.

    - 다대다관계 : Account와 Party의 관계가 다대다관계가 되는데 이 부분을 Jpa의 @ManyToMany를 학습할 것인지 아니면 연관테이블을 하나 지정하여 @OneToMany와 @ManyToOne 관계로 풀 것인지 고민해볼것