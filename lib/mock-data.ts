export interface City {
  rank: number;
  badgeLabel: string;
  nameKo: string;
  nameEn: string;
  region: string;
  net: number;
  cost: number;
  cafe: number;
  safe: number;
  score: number;
  monthlyCostMin: string;
  monthlyCostMax: string;
  tags: string[];
}

export interface Review {
  userId: string;
  cityKo: string;
  district: string;
  rating: number;
  date: string;
  body: string;
}

export interface Meetup {
  title: string;
  cityKo: string;
  date: string;
  spot: string;
  rsvpCurrent: number;
  rsvpMax: number;
  tags: string[];
}

export interface Stat {
  label: string;
  value: string;
  unit: string;
}

export const cities: City[] = [
  {
    rank: 1,
    badgeLabel: "TOP PICK",
    nameKo: "서울",
    nameEn: "Seoul",
    region: "강남 / 홍대 / 성수",
    net: 96,
    cost: 62,
    cafe: 95,
    safe: 90,
    score: 94,
    monthlyCostMin: "1.8M",
    monthlyCostMax: "3.2M",
    tags: ["인터넷", "카페"],
  },
  {
    rank: 2,
    badgeLabel: "워케이션",
    nameKo: "제주",
    nameEn: "Jeju",
    region: "제주시 / 서귀포",
    net: 82,
    cost: 78,
    cafe: 80,
    safe: 95,
    score: 88,
    monthlyCostMin: "1.2M",
    monthlyCostMax: "2.0M",
    tags: ["자연", "안전"],
  },
  {
    rank: 3,
    badgeLabel: "가성비",
    nameKo: "부산",
    nameEn: "Busan",
    region: "해운대 / 전포",
    net: 88,
    cost: 82,
    cafe: 87,
    safe: 84,
    score: 86,
    monthlyCostMin: "1.0M",
    monthlyCostMax: "1.8M",
    tags: ["가성비", "KTX"],
  },
  {
    rank: 4,
    badgeLabel: "교통 요충",
    nameKo: "대전",
    nameEn: "Daejeon",
    region: "유성구",
    net: 85,
    cost: 88,
    cafe: 70,
    safe: 88,
    score: 78,
    monthlyCostMin: "0.8M",
    monthlyCostMax: "1.4M",
    tags: ["KTX", "가성비"],
  },
  {
    rank: 5,
    badgeLabel: "조용한 작업",
    nameKo: "춘천",
    nameEn: "Chuncheon",
    region: "도심 / 우두동",
    net: 75,
    cost: 92,
    cafe: 65,
    safe: 92,
    score: 72,
    monthlyCostMin: "0.6M",
    monthlyCostMax: "1.0M",
    tags: ["자연", "안전"],
  },
  {
    rank: 6,
    badgeLabel: "문화도시",
    nameKo: "전주",
    nameEn: "Jeonju",
    region: "한옥마을 / 객사",
    net: 72,
    cost: 90,
    cafe: 75,
    safe: 90,
    score: 70,
    monthlyCostMin: "0.6M",
    monthlyCostMax: "1.1M",
    tags: ["자연", "가성비"],
  },
];

export const reviews: Review[] = [
  {
    userId: "@hongdae_dev",
    cityKo: "서울",
    district: "홍대",
    rating: 5,
    date: "2025.04.06",
    body: "연남동 카페들 와이파이 진짜 빠름. 맥북 들고 하루종일 있어도 눈치 안 줌. 한달 생활비 190만원 선에서 충분히 가능. 강추.",
  },
  {
    userId: "@jeju_nomad",
    cityKo: "제주",
    district: "서귀포",
    rating: 4,
    date: "2025.04.02",
    body: "겨울 제주 최고임. 관광객 없고 조용하고 카페값 저렴. 렌트카 필수인데 한달 렌트+숙소 합쳐서 120만원이면 됨. 인터넷은 카페마다 편차 심함.",
  },
  {
    userId: "@busan_worker",
    cityKo: "부산",
    district: "전포",
    rating: 5,
    date: "2025.03.28",
    body: "전포카페거리는 진짜 노마드 성지. 서울보다 렌트 40% 저렴하고 KTX 2.5시간이라 서울 미팅도 당일치기 가능.",
  },
];

export const meetups: Meetup[] = [
  {
    title: "서울 성수 네트워킹",
    cityKo: "서울 성수",
    date: "04/12 (토) 15:00",
    spot: "언더스탠드에비뉴",
    rsvpCurrent: 14,
    rsvpMax: 30,
    tags: ["네트워킹", "스타트업"],
  },
  {
    title: "제주 한달살기",
    cityKo: "제주 한달살기",
    date: "04/19 (토) 14:00",
    spot: "제주시 코워킹",
    rsvpCurrent: 8,
    rsvpMax: 20,
    tags: ["워케이션", "힐링"],
  },
  {
    title: "부산 해운대",
    cityKo: "부산 해운대",
    date: "04/26 (토) 16:00",
    spot: "광안리 루프탑카페",
    rsvpCurrent: 21,
    rsvpMax: 40,
    tags: ["사이드프로젝트"],
  },
  {
    title: "대전 유성",
    cityKo: "대전 유성",
    date: "05/03 (토) 13:00",
    spot: "KAIST 인근 카페",
    rsvpCurrent: 5,
    rsvpMax: 15,
    tags: ["IT", "스터디"],
  },
];

export const stats: Stat[] = [
  { label: "등록 도시", value: "12", unit: "개" },
  { label: "누적 회원", value: "3,204", unit: "명" },
  { label: "리뷰 수", value: "8,917", unit: "개" },
  { label: "이달 밋업", value: "47", unit: "개" },
  { label: "평균 만족도", value: "4.6", unit: "★" },
];

export const filterChips = [
  { label: "전체", value: "all" },
  { label: "가성비", value: "가성비" },
  { label: "인터넷", value: "인터넷" },
  { label: "자연", value: "자연" },
  { label: "카페", value: "카페" },
  { label: "안전", value: "안전" },
  { label: "KTX", value: "KTX" },
];
