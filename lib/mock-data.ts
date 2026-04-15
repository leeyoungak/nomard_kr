export interface Neighborhood {
  name: string;
  description: string;
}

export interface CoworkingSpot {
  name: string;
  address: string;
  pricePerDay: string;
  wifiSpeed: string;
}

export interface Cafe {
  name: string;
  address: string;
  features: string;
}

export interface City {
  rank: number;
  badgeLabel: string;
  nameKo: string;
  nameEn: string;
  slug: string;
  region: string;
  net: number;
  cost: number;
  cafe: number;
  safe: number;
  score: number;
  monthlyCostMin: string;
  monthlyCostMax: string;
  tags: string[];
  description: string;
  pros: string[];
  cons: string[];
  neighborhoods: Neighborhood[];
  coworkingSpots: CoworkingSpot[];
  cafes: Cafe[];
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
  slug: string;
  title: string;
  cityKo: string;
  citySlug: string;
  date: string;
  spot: string;
  rsvpCurrent: number;
  rsvpMax: number;
  tags: string[];
  description: string;
  organizer: string;
  status: "open" | "full" | "ended";
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
    slug: "seoul",
    region: "강남 / 홍대 / 성수",
    net: 96,
    cost: 62,
    cafe: 95,
    safe: 90,
    score: 94,
    monthlyCostMin: "1.8M",
    monthlyCostMax: "3.2M",
    tags: ["인터넷", "카페"],
    description:
      "대한민국 최대 도시로 기가급 인터넷과 24시간 카페 인프라가 세계 최고 수준이다. 강남·홍대·성수 등 노마드 클러스터가 형성돼 있어 네트워킹 기회가 풍부하다.",
    pros: [
      "국내 최고 수준의 인터넷 속도 (평균 96점)",
      "코워킹·카페 인프라 밀도 압도적",
      "KTX·지하철로 전국 당일 이동 가능",
      "IT·스타트업 커뮤니티 활성화",
    ],
    cons: [
      "월 생활비가 국내에서 가장 높은 수준",
      "피크 시간대 카페 자리 경쟁 치열",
      "외곽 이동 시 교통비 부담",
    ],
    neighborhoods: [
      {
        name: "성수동",
        description: "힙한 카페와 스타트업 오피스가 공존. 뚝섬역 도보권에 코워킹 스팟 밀집.",
      },
      {
        name: "홍대·연남동",
        description: "24시간 카페 천국. 합리적인 숙소 가격과 활발한 크리에이터 커뮤니티.",
      },
      {
        name: "강남·선릉",
        description: "테헤란로 IT 클러스터. 기업 미팅과 네트워킹 행사가 집중된 비즈니스 중심지.",
      },
    ],
    coworkingSpots: [
      {
        name: "패스트파이브 성수",
        address: "서울 성동구 성수이로 78",
        pricePerDay: "25,000원",
        wifiSpeed: "500Mbps",
      },
      {
        name: "위워크 강남",
        address: "서울 강남구 테헤란로 427",
        pricePerDay: "35,000원",
        wifiSpeed: "1Gbps",
      },
      {
        name: "스파크플러스 홍대",
        address: "서울 마포구 양화로 45",
        pricePerDay: "20,000원",
        wifiSpeed: "300Mbps",
      },
    ],
    cafes: [
      {
        name: "언더스탠드에비뉴",
        address: "서울 성동구 성수이로7가길 27",
        features: "대형 공간, 콘센트 多, 작업 친화",
      },
      {
        name: "카페 노티드 연남",
        address: "서울 마포구 동교로51길 27",
        features: "조용한 분위기, 와이파이 빠름",
      },
      {
        name: "블루보틀 삼청",
        address: "서울 종로구 북촌로 31-18",
        features: "스페셜티 커피, 아늑한 좌석",
      },
    ],
  },
  {
    rank: 2,
    badgeLabel: "워케이션",
    nameKo: "제주",
    nameEn: "Jeju",
    slug: "jeju",
    region: "제주시 / 서귀포",
    net: 82,
    cost: 78,
    cafe: 80,
    safe: 95,
    score: 88,
    monthlyCostMin: "1.2M",
    monthlyCostMax: "2.0M",
    tags: ["자연", "안전"],
    description:
      "자연 속 힐링과 업무를 동시에 누릴 수 있는 한국 최고의 워케이션 성지다. 관광 비수기엔 조용하고 저렴한 장기 숙소를 구하기 쉬우며 안전도가 전국 최상위권이다.",
    pros: [
      "자연환경과 공기 질이 국내 최고",
      "비수기(11~2월) 숙소·카페 가격 매우 저렴",
      "안전도 전국 1위 수준",
      "한달살기 커뮤니티가 잘 형성돼 있음",
    ],
    cons: [
      "렌트카 없이는 이동이 불편",
      "카페·코워킹 인터넷 속도 편차 큼",
      "장마·태풍 시즌 업무 환경 불안정",
    ],
    neighborhoods: [
      {
        name: "제주시 구도심",
        description: "로컬 카페와 게스트하우스 밀집. 대중교통 접근성이 섬 내에서 가장 좋다.",
      },
      {
        name: "서귀포 중문",
        description: "조용하고 풍광이 아름다움. 겨울 성수기 이후 1~2월 최저가 숙소 가능.",
      },
    ],
    coworkingSpots: [
      {
        name: "제주 스타트업 파크",
        address: "제주 제주시 첨단로 213",
        pricePerDay: "10,000원",
        wifiSpeed: "200Mbps",
      },
      {
        name: "탐나는코워킹",
        address: "제주 제주시 중앙로 217",
        pricePerDay: "12,000원",
        wifiSpeed: "150Mbps",
      },
    ],
    cafes: [
      {
        name: "카페 봄날",
        address: "제주 제주시 한림읍 한림로 576",
        features: "오션뷰, 조용한 작업 환경",
      },
      {
        name: "이어도산책",
        address: "제주 서귀포시 성산읍 일출로 284",
        features: "성산일출봉 뷰, 넓은 테이블",
      },
      {
        name: "제주커피박물관 버드나무",
        address: "제주 제주시 한경면 저지리 2114",
        features: "정원 뷰, 스페셜티 원두",
      },
    ],
  },
  {
    rank: 3,
    badgeLabel: "가성비",
    nameKo: "부산",
    nameEn: "Busan",
    slug: "busan",
    region: "해운대 / 전포",
    net: 88,
    cost: 82,
    cafe: 87,
    safe: 84,
    score: 86,
    monthlyCostMin: "1.0M",
    monthlyCostMax: "1.8M",
    tags: ["가성비", "KTX"],
    description:
      "서울 대비 생활비가 40% 저렴하면서도 KTX 2시간 30분으로 당일 미팅이 가능한 최고의 가성비 도시다. 전포카페거리를 중심으로 노마드 커뮤니티가 빠르게 성장 중이다.",
    pros: [
      "서울 대비 숙소·카페 비용 40% 이상 저렴",
      "KTX로 서울 2시간 30분, 당일치기 출장 가능",
      "해운대·광안리 해변 작업 환경",
      "전포카페거리 — 카페 밀도 전국 최상위",
    ],
    cons: [
      "서울 수준의 IT 커뮤니티·네트워킹 기회 부족",
      "여름 성수기 숙소 가격 급등",
      "지하철 노선이 서울에 비해 제한적",
    ],
    neighborhoods: [
      {
        name: "전포동",
        description: "전국 최고 밀도의 카페 거리. 독립 카페들이 밀집해 작업 공간 찾기 편리.",
      },
      {
        name: "해운대",
        description: "바다 뷰 카페와 코워킹 스팟. 관광지이지만 비수기엔 조용하고 저렴.",
      },
      {
        name: "광안리",
        description: "야경 맛집이자 로컬 주민 비율 높음. 합리적인 월세와 편의시설.",
      },
    ],
    coworkingSpots: [
      {
        name: "코업부산",
        address: "부산 부산진구 전포대로 199",
        pricePerDay: "12,000원",
        wifiSpeed: "300Mbps",
      },
      {
        name: "메이커스페이스 해운대",
        address: "부산 해운대구 해운대해변로 264",
        pricePerDay: "15,000원",
        wifiSpeed: "200Mbps",
      },
    ],
    cafes: [
      {
        name: "모모스커피 전포",
        address: "부산 부산진구 전포대로 180-1",
        features: "WBC 우승팀 운영, 스페셜티, 조용한 작업",
      },
      {
        name: "카페 어반플랜트",
        address: "부산 해운대구 중동1로 35",
        features: "오션뷰, 대형 테이블, 콘센트 충분",
      },
      {
        name: "비프광장 카페거리",
        address: "부산 중구 남포동 BIFF 광장 일대",
        features: "다양한 선택지, 24시간 운영점 포함",
      },
    ],
  },
  {
    rank: 4,
    badgeLabel: "교통 요충",
    nameKo: "대전",
    nameEn: "Daejeon",
    slug: "daejeon",
    region: "유성구",
    net: 85,
    cost: 88,
    cafe: 70,
    safe: 88,
    score: 78,
    monthlyCostMin: "0.8M",
    monthlyCostMax: "1.4M",
    tags: ["KTX", "가성비"],
    description:
      "국토의 정중앙에 위치해 KTX로 서울·부산 모두 1시간대에 접근 가능하다. 생활비가 주요 도시 중 가장 저렴한 편이며 KAIST 연구 단지 인근에 IT 인프라가 집중돼 있다.",
    pros: [
      "KTX로 서울 50분, 부산 1시간 20분 — 전국 어디든 당일 이동",
      "생활비 전국 최저 수준 (월 80만~140만원)",
      "유성구 KAIST 인근 카페·연구 인프라",
      "안전한 도시 환경",
    ],
    cons: [
      "카페·코워킹 스팟 수가 서울·부산보다 적음",
      "노마드 커뮤니티 규모가 작음",
      "대중교통 시내버스 위주, 이동 시간 길어짐",
    ],
    neighborhoods: [
      {
        name: "유성구 어은동",
        description: "KAIST·충남대 인근. 학생·연구자 대상 카페 多, 조용한 작업 환경.",
      },
      {
        name: "둔산동",
        description: "대전 최대 상업지구. 음식점·쇼핑 편의 우수, 숙소 가성비 좋음.",
      },
    ],
    coworkingSpots: [
      {
        name: "대전창조경제혁신센터",
        address: "대전 유성구 가정북로 96",
        pricePerDay: "8,000원",
        wifiSpeed: "500Mbps",
      },
      {
        name: "카페 코워크 대전",
        address: "대전 서구 둔산로 117",
        pricePerDay: "10,000원",
        wifiSpeed: "200Mbps",
      },
    ],
    cafes: [
      {
        name: "성심당 카페",
        address: "대전 중구 대종로 480",
        features: "대전 랜드마크, 넓은 좌석, 와이파이",
      },
      {
        name: "카페 이:음",
        address: "대전 유성구 어은로 66",
        features: "KAIST 인근, 조용, 장시간 작업 OK",
      },
    ],
  },
  {
    rank: 5,
    badgeLabel: "조용한 작업",
    nameKo: "춘천",
    nameEn: "Chuncheon",
    slug: "chuncheon",
    region: "도심 / 우두동",
    net: 75,
    cost: 92,
    cafe: 65,
    safe: 92,
    score: 72,
    monthlyCostMin: "0.6M",
    monthlyCostMax: "1.0M",
    tags: ["자연", "안전"],
    description:
      "의암호와 소양강이 어우러진 자연 속 소도시로, 생활비가 전국 최저 수준이다. 카페 수는 적지만 조용하고 안전한 환경에서 장기 집중 작업에 최적화된 곳이다.",
    pros: [
      "전국 최저 수준의 생활비 (월 60~100만원)",
      "자연 경관 최우수 — 의암호·소양강 뷰",
      "안전도 전국 상위권",
      "혼잡함 없는 조용한 작업 환경",
    ],
    cons: [
      "카페·코워킹 인프라 부족",
      "서울까지 ITX 1시간 30분, KTX 없음",
      "비 오는 계절 이동 불편 (자가용 필요)",
    ],
    neighborhoods: [
      {
        name: "춘천 명동",
        description: "춘천 최대 번화가. 카페와 식당 집중, 도보 생활 가능.",
      },
      {
        name: "우두동",
        description: "소양강 근처 조용한 주거 지역. 강뷰 카페들이 있으며 월세 가성비 최고.",
      },
    ],
    coworkingSpots: [
      {
        name: "강원창조경제혁신센터",
        address: "춘천시 강원대학길 1",
        pricePerDay: "5,000원",
        wifiSpeed: "100Mbps",
      },
    ],
    cafes: [
      {
        name: "카페 소양",
        address: "춘천시 소양강로 145",
        features: "소양강 뷰, 조용한 작업, 주차 가능",
      },
      {
        name: "닭갈비 거리 카페골목",
        address: "춘천시 명동 일대",
        features: "다양한 선택지, 로컬 분위기",
      },
    ],
  },
  {
    rank: 6,
    badgeLabel: "문화도시",
    nameKo: "전주",
    nameEn: "Jeonju",
    slug: "jeonju",
    region: "한옥마을 / 객사",
    net: 72,
    cost: 90,
    cafe: 75,
    safe: 90,
    score: 70,
    monthlyCostMin: "0.6M",
    monthlyCostMax: "1.1M",
    tags: ["자연", "가성비"],
    description:
      "한옥마을을 중심으로 독특한 문화적 분위기 속에서 저비용 장기 체류가 가능한 도시다. 한식·카페 문화가 발달해 있고 객사 일대에 로컬 커뮤니티가 형성돼 있다.",
    pros: [
      "한옥마을 인근 이색적인 카페 & 게스트하우스",
      "생활비 저렴, 음식 질 대비 가격 전국 최고",
      "안전하고 여유로운 도시 분위기",
      "KTX 전주역에서 서울 2시간",
    ],
    cons: [
      "인터넷 속도가 대도시 대비 낮음",
      "IT·스타트업 커뮤니티 사실상 없음",
      "관광 성수기(봄·가을) 한옥마을 혼잡",
    ],
    neighborhoods: [
      {
        name: "한옥마을",
        description: "전주의 상징적 지역. 독립 카페와 게스트하우스가 많고 관광객 대상 인프라 충실.",
      },
      {
        name: "객사 일대",
        description: "로컬 주민이 많은 생활 중심지. 가성비 식당과 조용한 카페들 위치.",
      },
    ],
    coworkingSpots: [
      {
        name: "전주 코워킹 스페이스",
        address: "전주시 완산구 전주천동로 21",
        pricePerDay: "7,000원",
        wifiSpeed: "100Mbps",
      },
    ],
    cafes: [
      {
        name: "카페 학인당",
        address: "전주시 완산구 한옥마을길 25",
        features: "한옥 건물, 전통차 & 커피, 조용한 분위기",
      },
      {
        name: "베테랑 칼국수 옆 카페거리",
        address: "전주시 완산구 객사3길 일대",
        features: "로컬 카페 밀집, 합리적 가격",
      },
    ],
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
    slug: "seoul-seongsu-0412",
    title: "서울 성수 노마드 네트워킹",
    cityKo: "서울",
    citySlug: "seoul",
    date: "04/12 (토) 15:00",
    spot: "언더스탠드에비뉴",
    rsvpCurrent: 30,
    rsvpMax: 30,
    tags: ["네트워킹", "스타트업"],
    description: "성수동 IT 노마드들과 함께하는 봄맞이 네트워킹. 사이드프로젝트 피칭과 자유 교류.",
    organizer: "@seongsu_nomad",
    status: "ended",
  },
  {
    slug: "jeju-workcation-0419",
    title: "제주 워케이션 한달살기 OT",
    cityKo: "제주",
    citySlug: "jeju",
    date: "04/19 (토) 14:00",
    spot: "제주시 탐나는코워킹",
    rsvpCurrent: 8,
    rsvpMax: 20,
    tags: ["워케이션", "힐링"],
    description: "제주 한달살기를 준비 중인 노마드들을 위한 정보 공유 모임. 숙소·카페 꿀팁 총정리.",
    organizer: "@jeju_nomad",
    status: "open",
  },
  {
    slug: "busan-haeundae-0426",
    title: "부산 해운대 사이드프로젝트",
    cityKo: "부산",
    citySlug: "busan",
    date: "04/26 (토) 16:00",
    spot: "광안리 루프탑카페",
    rsvpCurrent: 40,
    rsvpMax: 40,
    tags: ["사이드프로젝트", "네트워킹"],
    description: "부산 노마드들의 사이드프로젝트 공유 세션. 각자의 프로젝트를 소개하고 피드백을 교환.",
    organizer: "@busan_worker",
    status: "full",
  },
  {
    slug: "daejeon-yuseong-0503",
    title: "대전 유성 IT 스터디",
    cityKo: "대전",
    citySlug: "daejeon",
    date: "05/03 (토) 13:00",
    spot: "KAIST 인근 카페",
    rsvpCurrent: 5,
    rsvpMax: 15,
    tags: ["IT", "스터디"],
    description: "KAIST 인근에서 진행하는 노마드 개발자 스터디. AI·클라우드 최신 트렌드 발표 및 토론.",
    organizer: "@daejeon_dev",
    status: "open",
  },
  {
    slug: "seoul-hongdae-0510",
    title: "홍대 크리에이터 밋업",
    cityKo: "서울",
    citySlug: "seoul",
    date: "05/10 (토) 15:00",
    spot: "홍대 프리마켓 근처 카페",
    rsvpCurrent: 11,
    rsvpMax: 25,
    tags: ["크리에이터", "네트워킹"],
    description: "홍대·연남동에서 활동하는 프리랜서와 크리에이터 노마드들의 자유로운 교류 모임.",
    organizer: "@hongdae_create",
    status: "open",
  },
  {
    slug: "seoul-gangnam-0517",
    title: "강남 스타트업 노마드",
    cityKo: "서울",
    citySlug: "seoul",
    date: "05/17 (토) 14:00",
    spot: "패스트파이브 강남점",
    rsvpCurrent: 30,
    rsvpMax: 30,
    tags: ["스타트업", "투자"],
    description: "테헤란로 스타트업 생태계 노마드 모임. 투자자·창업자·개발자가 함께하는 네트워킹 이벤트.",
    organizer: "@startup_nomad",
    status: "full",
  },
  {
    slug: "busan-jeonpo-0524",
    title: "전포 카페거리 노마드",
    cityKo: "부산",
    citySlug: "busan",
    date: "05/24 (토) 14:00",
    spot: "전포카페거리 모카골드",
    rsvpCurrent: 9,
    rsvpMax: 20,
    tags: ["가성비", "워케이션"],
    description: "전국 최고 밀도의 카페 거리에서 즐기는 부산 노마드 모임. 가성비 생활팁과 카페 리뷰 공유.",
    organizer: "@busan_cafe",
    status: "open",
  },
  {
    slug: "jeju-seogwipo-0531",
    title: "서귀포 힐링 워케이션",
    cityKo: "제주",
    citySlug: "jeju",
    date: "05/31 (토) 11:00",
    spot: "서귀포 감귤밭 카페",
    rsvpCurrent: 6,
    rsvpMax: 15,
    tags: ["힐링", "워케이션"],
    description: "서귀포의 조용한 감귤밭 카페에서 즐기는 힐링 워케이션 모임. 자연 속 집중 작업 팁 공유.",
    organizer: "@jeju_healing",
    status: "open",
  },
  {
    slug: "chuncheon-0607",
    title: "춘천 소양강 노마드",
    cityKo: "춘천",
    citySlug: "chuncheon",
    date: "06/07 (토) 13:00",
    spot: "소양강 뷰 카페",
    rsvpCurrent: 4,
    rsvpMax: 12,
    tags: ["자연", "힐링"],
    description: "소양강 뷰를 즐기며 진행하는 춘천 노마드 첫 모임. 지방 소도시 장기 체류 경험 나누기.",
    organizer: "@chuncheon_dev",
    status: "open",
  },
  {
    slug: "jeonju-0614",
    title: "전주 한옥마을 노마드",
    cityKo: "전주",
    citySlug: "jeonju",
    date: "06/14 (토) 14:00",
    spot: "한옥마을 전통카페",
    rsvpCurrent: 7,
    rsvpMax: 18,
    tags: ["문화", "가성비"],
    description: "전주 한옥마을의 전통카페에서 즐기는 문화 노마드 모임. 전주 저비용 한달살기 노하우 공유.",
    organizer: "@jeonju_nomad",
    status: "open",
  },
  {
    slug: "seoul-seongsu-0621",
    title: "성수 개발자 해커톤",
    cityKo: "서울",
    citySlug: "seoul",
    date: "06/21 (토) 10:00",
    spot: "코업부산 성수점",
    rsvpCurrent: 18,
    rsvpMax: 40,
    tags: ["IT", "스타트업", "사이드프로젝트"],
    description: "하루짜리 미니 해커톤. 팀을 이뤄 아이디어를 프로토타입으로 구현하고 저녁에 발표.",
    organizer: "@seongsu_hack",
    status: "open",
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
