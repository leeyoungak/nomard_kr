# NOMAD.KR 개선 실행 계획

## 현황 진단

| 문제 | 내용 |
|------|------|
| 디자인 불일치 | 홈은 다크 터미널 테마, 로그인/회원가입은 warm nature 테마 |
| Supabase 의존성 | `actions.ts`, `middleware.ts`가 Supabase 없이 에러 발생 |
| 죽은 내비게이션 | Navbar의 도시/지도/커뮤니티/밋업/통계 모두 `href="#"` |
| 페이지 부재 | 도시 상세, 밋업, 커뮤니티, 통계 페이지 없음 |
| 데이터 부족 | Mock 데이터 최소 수준 (도시 6개, 리뷰 3개, 밋업 4개) |

---

## Phase별 의존 관계

```
Phase 1 (기반 안정화)
    ↓
Phase 2 (도시 탐색)  ←  독립 실행 가능 (Phase 1 완료 후 권장)
Phase 3 (밋업)       ←  독립 실행 가능
Phase 4 (커뮤니티)   ←  독립 실행 가능
Phase 5 (통계)       ←  독립 실행 가능 (Phase 2 mock-data 확장 공유 가능)
```

Phase 1은 전체 기반이므로 반드시 먼저 완료. Phase 2~5는 순서 무관하게 병렬 진행 가능.

---

## - [x] Phase 1 — 기반 안정화: 디자인 통일 & Mock Auth

### 오버뷰
로그인/회원가입 페이지가 홈페이지와 완전히 다른 디자인 시스템을 사용하고 있다. Supabase 미설정으로 인해 로그인 시도 시 서버 에러가 발생하며, `middleware.ts`도 Supabase 환경변수를 요구해 매 요청에서 에러 로그가 찍힌다. 이 Phase에서는 디자인을 다크 터미널 테마로 통일하고, Supabase 없이 쿠키 기반 mock 인증이 동작하도록 교체한다.

**디자인 토큰 (전체 공통 적용)**
- `bg: #0a0a0a`, `text: #e5e5e5`, `accent: #00ff41`
- `border: #2a2a2a`, `muted: #555555`
- `radius: 0` (sharp corners), `font: JetBrains Mono`

### 수정/개선

**디자인**
- [x] `app/login/page.tsx` — warm nature → 다크 터미널 테마로 전면 재작성
- [x] `app/register/page.tsx` — warm nature → 다크 터미널 테마로 전면 재작성
- [x] Navbar 로그인/회원가입 버튼 스타일을 터미널 테마에 맞게 수정 (`components/layout/NavbarClient.tsx`)

**Mock Auth**
- [x] `app/login/actions.ts` — Supabase 제거, 하드코딩 테스트 계정(`test@nomad.kr` / `password123`) 또는 임의 이메일로 로그인 시 쿠키 세팅 후 `/`로 리다이렉트
- [x] `app/register/actions.ts` — Supabase 제거, 입력값 유효성 검사 후 성공 메시지 + `/login`으로 리다이렉트
- [x] `middleware.ts` — Supabase 완전 제거, 단순 pass-through로 교체 (추후 실제 인증 붙일 때 확장 가능한 구조 유지)
- [x] `app/auth/signout/route.ts` — Supabase 제거, 쿠키 삭제 후 `/`로 리다이렉트

**내비게이션**
- [x] `components/layout/Navbar.tsx` — 죽은 링크 실제 경로로 교체
  - [x] 도시 → `/cities`
  - [x] 밋업 → `/meetups`
  - [x] 커뮤니티 → `/community`
  - [x] 통계 → `/stats`
  - [x] 지도 → `/map` (준비 중 뱃지 표시)

### 검증/확인
- [ ] `/login` 접속 시 다크 터미널 테마로 렌더링됨
- [ ] `/register` 접속 시 다크 터미널 테마로 렌더링됨
- [ ] 홈 → 로그인 → 홈 흐름에서 디자인 테마 전환이 없음
- [ ] `test@nomad.kr` / `password123`으로 로그인 → `/`로 리다이렉트 확인
- [ ] 틀린 비밀번호 입력 시 에러 메시지 표시 확인
- [ ] 회원가입 폼 제출 후 `/login`으로 리다이렉트 확인
- [ ] 개발 콘솔에 Supabase 관련 에러 없음
- [ ] Navbar 링크 클릭 시 404가 아닌 해당 경로로 이동 (Phase 2~5 전이라면 빈 페이지 허용)

---

## - [ ] Phase 2 — 도시 탐색: 목록 & 상세 페이지

### 오버뷰
현재 홈페이지의 CityCard들은 클릭해도 아무 반응이 없다. 이 Phase에서는 `/cities` 목록 페이지와 `/cities/[slug]` 상세 페이지를 추가하고, mock-data를 풍부하게 확장한다. 각 도시 카드를 클릭하면 상세 페이지로 이동하는 전체 흐름을 완성한다.

### 수정/개선

**Mock 데이터 확장** (`lib/mock-data.ts`)
- [ ] `City` 인터페이스에 필드 추가: `slug`, `description`, `pros`, `cons`, `neighborhoods` (동네 배열), `coworkingSpots` (이름/주소/가격/wifi 속도), `cafes` (이름/주소/특징)
- [ ] 기존 6개 도시에 위 확장 데이터 채우기

**도시 목록 페이지** (`app/cities/page.tsx`)
- [ ] Server Component로 작성
- [ ] 상단: 페이지 헤더 (`> /cities — 노마드 도시 탐색기`)
- [ ] 필터 칩 (전체/가성비/인터넷/자연 등) — Client Component로 분리
- [ ] 정렬 드롭다운 (종합점수/생활비/와이파이 속도)
- [ ] CityCard 그리드 (홈과 동일 컴포넌트, `href="/cities/[slug]"` 추가)

**도시 상세 페이지** (`app/cities/[slug]/page.tsx`)
- [ ] Server Component, `generateStaticParams`로 정적 생성
- [ ] 헤더: 도시명, 지역, badgeLabel, 종합 점수
- [ ] 스코어카드: 인터넷/생활비/카페/안전 4개 지표 바 차트 (CSS only)
- [ ] 월 생활비 범위 표시
- [ ] 추천 동네 섹션
- [ ] 코워킹/카페 스팟 목록 (카드 형태)
- [ ] 장점/단점 섹션
- [ ] 해당 도시 리뷰 3개 표시
- [ ] 뒤로가기 링크 (`← 도시 목록으로`)

**홈페이지 연결**
- [ ] `components/home/CityCard.tsx` — 카드 클릭 시 `/cities/[slug]`로 이동
- [ ] `components/home/FilterAndCityGrid.tsx` — CityCard에 slug prop 전달

### 검증/확인
- [ ] `/cities` 접속 시 6개 도시 카드 렌더링 확인
- [ ] 필터 칩 클릭 시 해당 태그 도시만 표시 확인
- [ ] 홈의 CityCard 클릭 → `/cities/seoul` 등 상세 페이지 이동 확인
- [ ] `/cities/seoul`, `/cities/jeju`, `/cities/busan` 등 각 slug로 직접 접속 가능 확인
- [ ] 존재하지 않는 slug(`/cities/unknown`) 접속 시 404 처리 확인
- [ ] 상세 페이지 하단 뒤로가기 링크 동작 확인
- [ ] 모바일(375px) 레이아웃 깨짐 없음

---

## - [ ] Phase 3 — 밋업: 목록 & 필터

### 오버뷰
밋업은 현재 홈페이지에 4개 카드로만 존재하고 별도 페이지가 없다. 이 Phase에서는 `/meetups` 전용 페이지를 만들고 mock 데이터를 확장하며, 도시/태그별 필터와 RSVP UI를 구현한다.

### 수정/개선

**Mock 데이터 확장** (`lib/mock-data.ts`)
- [ ] `Meetup` 인터페이스에 필드 추가: `slug`, `citySlug`, `description`, `organizer`, `status` (`open`/`full`/`ended`)
- [ ] 밋업 데이터를 4개 → 10개 이상으로 확장 (다양한 도시, 태그, status 포함)

**밋업 목록 페이지** (`app/meetups/page.tsx`)
- [ ] 상단 헤더 + 통계 (이달 밋업 수, 총 참가자 수)
- [ ] 도시 필터 탭 (전체/서울/제주/부산 등)
- [ ] 태그 필터 칩
- [ ] `MeetupCard` 컴포넌트 (`components/meetups/MeetupCard.tsx`)
  - [ ] 제목, 날짜, 장소, 태그, RSVP 현황 바
  - [ ] `open`: 신청 가능 버튼 (초록), `full`: 마감 뱃지 (빨강), `ended`: 종료 뱃지 (회색)
- [ ] RSVP 버튼 클릭 → 토스트 메시지 (`신청이 완료되었습니다.`) — 실제 저장 없음

**홈페이지 연결**
- [ ] `components/home/MeetupsSection.tsx` — "더 보기" 링크 → `/meetups`

### 검증/확인
- [ ] `/meetups` 접속 시 10개 이상 밋업 카드 렌더링 확인
- [ ] 도시 탭 클릭 시 해당 도시 밋업만 표시 확인
- [ ] 태그 필터 동작 확인
- [ ] `open` 상태 RSVP 버튼 클릭 시 토스트 메시지 확인
- [ ] `full` 상태 마감 뱃지 표시 확인
- [ ] 홈 MeetupsSection "더 보기" 링크 → `/meetups` 이동 확인
- [ ] 모바일 레이아웃 확인

---

## - [ ] Phase 4 — 커뮤니티: 리뷰 & 팁 게시판

### 오버뷰
커뮤니티 페이지는 현재 완전히 부재하다. 이 Phase에서는 노마드들의 리뷰와 팁을 모아보는 `/community` 페이지를 만든다. 리뷰 목록, 도시별 필터, 리뷰 작성 폼(UI only)을 구현한다.

### 수정/개선

**Mock 데이터 확장** (`lib/mock-data.ts`)
- [ ] `Review` 인터페이스에 필드 추가: `id`, `citySlug`, `likes`, `type` (`review`/`tip`)
- [ ] 리뷰 데이터를 3개 → 15개 이상으로 확장 (모든 도시 커버, `tip` 타입 포함)

**커뮤니티 페이지** (`app/community/page.tsx`)
- [ ] 탭 UI: `리뷰` / `팁 & 정보` — Client Component
- [ ] 도시 필터 드롭다운
- [ ] 정렬: 최신순 / 좋아요순 / 평점순
- [ ] `ReviewCard` 컴포넌트 (`components/community/ReviewCard.tsx`)
  - [ ] userId, 도시, 구, 날짜, 별점, 본문, 좋아요 버튼 (UI only)
- [ ] 리뷰 작성 버튼 → `WriteReviewModal` 열기
- [ ] `WriteReviewModal` (`components/community/WriteReviewModal.tsx`)
  - [ ] 도시 선택, 구/동 입력, 별점 클릭 선택, 본문 textarea
  - [ ] 제출 시 토스트 메시지 (`리뷰가 등록되었습니다.`) — 실제 저장 없음

### 검증/확인
- [ ] `/community` 접속 시 15개 이상 리뷰 카드 렌더링 확인
- [ ] 리뷰/팁 탭 전환 동작 확인
- [ ] 도시 필터 드롭다운 동작 확인
- [ ] 좋아요 버튼 클릭 시 시각적 피드백 (토글) 확인
- [ ] 리뷰 작성 모달 열기/닫기 확인
- [ ] 리뷰 작성 폼 제출 시 토스트 메시지 확인
- [ ] 모바일 레이아웃 확인

---

## - [ ] Phase 5 — 통계 대시보드

### 오버뷰
`/stats` 페이지를 만들어 도시별 지표를 시각적으로 비교할 수 있는 대시보드를 구현한다. 외부 차트 라이브러리 없이 CSS만으로 바 차트/비교 테이블을 구현해 번들 크기를 최소화한다.

### 수정/개선

**통계 페이지** (`app/stats/page.tsx`)
- [ ] 전체 통계 요약 섹션 (StatsBar와 동일 데이터, 상세 설명 추가)
- [ ] 도시 종합 순위 테이블 (rank, 도시명, 점수, 인터넷/생활비/카페/안전 4개 지표)
- [ ] 지표별 바 차트 (CSS `width` 퍼센트 기반, 애니메이션 포함)
  - [ ] 인터넷 속도 랭킹
  - [ ] 생활비 효율 랭킹
  - [ ] 카페 접근성 랭킹
  - [ ] 안전도 랭킹
- [ ] 도시 비교 선택 UI: 2개 도시를 선택해 나란히 비교 — Client Component
- [ ] 월 생활비 비교 (min~max 범위 바)

### 검증/확인
- [ ] `/stats` 접속 시 모든 섹션 렌더링 확인
- [ ] 4개 지표 바 차트에서 점수가 높은 도시가 더 긴 바로 표시되는지 확인
- [ ] 도시 비교 UI에서 2개 도시 선택 후 나란히 비교 렌더링 확인
- [ ] 생활비 범위 바가 min~max 올바르게 표시 확인
- [ ] Server Component로 작성되어 JS 인터랙션 없는 정적 섹션은 hydration 없음 확인
- [ ] 모바일 레이아웃 확인
