import { HttpHandler, HttpResponse, http } from "msw";
import { getVideosPopularListURL } from "./getVideosPopularList";

export const getMockVideosPopularList: HttpHandler = http.get(
  getVideosPopularListURL,
  () => {
    return HttpResponse.json(GET_MOCK_VIDEOS_POPULAR_LIST.success);
  }
);

export const GET_MOCK_VIDEOS_POPULAR_LIST = {
  success: {
    lists: [
      {
        videoId: "-V_aZpqTXdE",
        title:
          "[EN] 사탄 들려버린 노어플 적응기, 그것 또한 낭만 | 풍향고 EP.2 베트남 하노이 & 사파행 슬리핑 기차 #유재석 #황정민 #지석진 #양세찬",
        description:
          "※ 알림! 썸네일로 보이는 것과 달리 무섭지 않으나, 4형제의 낭만과 고난이 무한 반복되니 마음을 충분히 다잡고 시청해주시길 바랍니다. ※\n\nㅡㅡㅡ\n🍀풍/향/고/당/일/시/청/이/벤/트/진/행/중🍀\n매주 일요일 오전9시 업로드되는 풍향고를 \n업로드 당일 시청 후 댓글 달아주신 계국지 분들께 \n추첨을 통해 선물을 드립니다\n*자세한 사항은 뜬뜬 커뮤니티 게시글 참고*\n\nㅡㅡㅡ\n바람 따라가는 ‘NO어플, NO예약’ 즉흥 여행 [풍향고]\n매주 일요일 오전 9시 채널 뜬뜬에서 공개!\n\nㅡㅡㅡ\n[채널 '뜬뜬' of 안테나플러스]\n연출 | 조은진 조수빈 김다윤 이은솔 추형록 오민주 서윤지\n작가 | 김송화 최수정 김이진 정채휴 전우성\n\nㅡㅡㅡ\n👇’뜬뜬’ 소식 보러가기\n[https://instagram.com/ddeun._.ddeun]\n#뜬뜬 #풍향고 #유재석 #지석진 #황정민 #양세찬\n\n- 본 콘텐츠와 무관한 내용의 댓글과 출연자에 대한 무분별한 욕설, 비난 및 조롱 등 악의적인 댓글은 무통보 삭제될 수 있습니다.",
        channelId: "UCDNvRZRgvkBTUkQzFoT_8rA",
        channelTitle: "뜬뜬 DdeunDdeun",
        thumbnail: {
          url: "https://i.ytimg.com/vi/-V_aZpqTXdE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-12-01T00:00:06Z",
        publishedAtDisplayText: "3일 전",
        viewCount: 4769333,
        viewCountDisplayText: "476만",
      },
      {
        videoId: "T_sTXWiLXrE",
        title: "[긴급편성] 리얼 집공개 이후 야노 시호 반응",
        description:
          "안녕하심까 추성훈입니다.\n지난번 집공개 하고서 싸랑하는 아내 시호와 많은(?) 이야기 나눴음니돠\n\n시호 싸랑해 ♥\n\n#추성훈 #섹시야마 #아조씨의여생\n 메일 : mr.choo@episodes.kr",
        channelId: "UCMDHzyo0wIUjKXho-icJDjw",
        channelTitle: "추성훈 ChooSungHoon",
        thumbnail: {
          url: "https://i.ytimg.com/vi/T_sTXWiLXrE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-12-03T09:30:18Z",
        publishedAtDisplayText: "21시간 전",
        viewCount: 979848,
        viewCountDisplayText: "97만",
      },
      {
        videoId: "z-NP_16EoFk",
        title: "🧳SM.2 풀버전ㅣ스엠표 대환장 음악퀴즈ㅣ🧳🩷 출장십오야 X SM",
        description:
          "#출장십오야xSM #유료광고포함\n\n부르면, 달려 갑니다!\n세계최초(?) 예능배달서비스 출장 십오야xSM",
        channelId: "UCQ2O-iftmnlfrBuNsUUTofQ",
        channelTitle: "채널십오야",
        thumbnail: {
          url: "https://i.ytimg.com/vi/z-NP_16EoFk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-11-29T13:26:06Z",
        publishedAtDisplayText: "4일 전",
        viewCount: 3648780,
        viewCountDisplayText: "364만",
      },
      {
        videoId: "JY59paT_Jik",
        title:
          "🧳SM.1 풀버전ㅣ1세대부터 5세대까지 SM 대통합의 장ㅣ🧳🩷 출장십오야 X SM",
        description:
          "#출장십오야xSM #유료광고포함\n\n부르면, 달려 갑니다!\n세계최초(?) 예능배달서비스 출장 십오야xSM",
        channelId: "UCQ2O-iftmnlfrBuNsUUTofQ",
        channelTitle: "채널십오야",
        thumbnail: {
          url: "https://i.ytimg.com/vi/JY59paT_Jik/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-11-29T13:00:06Z",
        publishedAtDisplayText: "4일 전",
        viewCount: 4518073,
        viewCountDisplayText: "451만",
      },
      {
        videoId: "pbkyf5MJPKA",
        title: "아니 롤 티어 올리려고 쉬는 건;;; 아니 정민아 아니 진짜 아니",
        description:
          "근데 요정투어 가자니까 정민아~~~~~~~~~~~\n― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ―\n📌따뜻해, 가벼워~ '플로우 다운' 보러가기 \nhttps://www.fila.co.kr/event/view.asp?seq=1151 \n\n📌비지니스룩에도 툭, '플로우 다운' 더많은 스타일링 확인해보기\nhttps://www.fila.co.kr/event/view.asp?seq=1156\n\n#휠라 #FILA #플로우다운\n― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ―\n00:00 하이라이트\n00:58 오프닝\n04:48 정민이 입장🎉",
        channelId: "UCN5XdqTDRbyjXPF5NXUqWdA",
        channelTitle: "요정재형",
        thumbnail: {
          url: "https://i.ytimg.com/vi/pbkyf5MJPKA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-12-01T08:00:40Z",
        publishedAtDisplayText: "2일 전",
        viewCount: 585183,
        viewCountDisplayText: "58만",
      },
      {
        videoId: "0BjlBnfHcHM",
        title: "Beat Ronaldo, Win $1,000,000",
        description:
          "I still can’t believe we got all of these athletes for this\nThanks Yahoo Sports for sponsoring. Enter for a chance to meet me at one of my video sets by downloading the Yahoo Sports app and signing up for a reminder to play Daily Draw. Play starting 12/20 for a chance to win $10k/day for 10 days straight! https://yahoosports.com/mrbeast\n\nCheck out Cristiano’s awesome collab: https://youtu.be/_ZsZ4-HyjCg\n\nRonaldo\n@cristiano \n\nTom Brady\n@tombrady \n\nNoah Lyles\n@noahlyles18 \n\nBryce Harper\nhttps://www.tiktok.com/@3ryceharper\n\nBryson DeChambeau\n@brysondechambeau \n\nSpeed\n@IShowSpeed \n\nNew Merch - https://mrbeast.store\n\nCheck out Viewstats! - https://www.viewstats.com/\n\nSUBSCRIBE OR I TAKE YOUR DOG\n╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗\n║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ \n╠╗║╚╝║║╠╗║╚╣║║║║║═╣\n╚═╩══╩═╩═╩═╩╝╚╩═╩═╝\n\nFor any questions or inquiries regarding this video, please reach out to chucky@mrbeastbusiness.com\n\nMusic Provided by https://www.extrememusic.com\n\n----------------------------------------------------------------\nfollow all of these or i will kick you\n• Facebook - https://www.facebook.com/MrBeast6000/\n• Twitter - https://twitter.com/MrBeast\n•  Instagram - https://www.instagram.com/mrbeast\n•  Im Hiring! - https://www.mrbeastjobs.com/\n--------------------------------------------------------------------\n\nNo purchase necessary. 50 US or DC, 18+. Ends: 12/19/24 for Meet MrBeast. Entry: 12/20/24 to 12/29/24 for MrBeast $10k a day. See Official Rules at https://yahoosports.com/mrbeastsweeps",
        channelId: "UCX6OQ3DkcsbYNE6H8uQQuVA",
        channelTitle: "MrBeast",
        thumbnail: {
          url: "https://i.ytimg.com/vi/0BjlBnfHcHM/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-11-30T17:00:00Z",
        publishedAtDisplayText: "3일 전",
        viewCount: 97377507,
        viewCountDisplayText: "9737만",
      },
      {
        videoId: "IW8qaemx74g",
        title:
          "ROSÉ(로제) - APT. (Band VER.) (With. 이영지) [더 시즌즈-이영지의 레인보우] | KBS 241129 방송",
        description:
          "ROSÉ(로제) - APT. (Band VER.) (With. 이영지)\n\n\nCopyright ⓒ KBS. All rights reserved. 무단 전재, 재배포 및 이용(AI 학습 포함) 금지\n\n#더시즌즈 #음악 #이영지 #이영지의레인보우 #theseasons #토크쇼 \n\n----------------------------------------------\n        ▶ Homepage : https://www.kbs.co.kr/\n        ▶ Wavve : https://www.wavve.com/\n        ▶ Instagram : https://www.instagram.com/theseasons2023\n        ▶ Youtube : https://www.youtube.com/@KBSKpop\n----------------------------------------------",
        channelId: "UCeLPm9yH_a_QH8n6445G-Ow",
        channelTitle: "KBS Kpop",
        thumbnail: {
          url: "https://i.ytimg.com/vi/IW8qaemx74g/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-11-29T15:25:59Z",
        publishedAtDisplayText: "4일 전",
        viewCount: 5308671,
        viewCountDisplayText: "530만",
      },
      {
        videoId: "GP6hvzmkwyQ",
        title: "한가인 2년동안 모유 먹인 역대급 모성애 (아줌마토크, 이현이)",
        description:
          "관심이들 까꿍~!~!~!\n\n오늘의 엄마도 좀 쉬자!!\n바로바로 가방끈 특집!!! ㅋㅋㅋㅋㅋ\n회심의 게스트를 모셨습니다!!\n\n너무너무 만나고 싶었던 \n우리 자유부인 한가인!!ㅋㅋㅋ\n어쩜 이리 예쁜데 공부도 잘하고 입담도 좋을까요!!!\n(같은 카메라로 찍었는데 그녀만 빛이나는건 왜일까요 ㅋㅋ)\n\n엄마도 좀 쉬자의 개국공신이죠\n대한민국 대표 중전 골반 이현이님과함꼐\n리틀 콘서트 갑니다 ㅋㅋㅋㅋㅋㅋㅋㅋ\n\n오늘도 재밌게 보셨다면\n좋아요, 구독, 알림 설정 필수!\n고고띵!❤❤\n\n#이지혜 #한가인 #이현이",
        channelId: "UCtkRVaUSpkuhqdKv39oBXKA",
        channelTitle: "밉지않은 관종언니",
        thumbnail: {
          url: "https://i.ytimg.com/vi/GP6hvzmkwyQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-12-02T09:15:01Z",
        publishedAtDisplayText: "1일 전",
        viewCount: 468999,
        viewCountDisplayText: "46만",
      },
      {
        videoId: "mKOVidr5ljI",
        title: "온 가족이 함께 김장하는 날!! + 특별식(?)까지",
        description:
          "#김장 #배추김치 #무김치 #항아리삼겹살 #훈제구이 #흥삼 #브이로그\n\n[이 영상은 포항시의 제작 지원을 받았습니다]\n\n💖포항에서 자란 싱싱하고 맛 좋은 농식품 많이 사랑해주세요💖\n💖포항의 각종 농·수산물은 포항마켓'에서!!💖\n👉 https://pohangmarket.cyso.co.kr/\n\n오늘은 흥삼이네 김장하는 날!!\n부모님께서 직접 기르신 배추와 무로 김장해 봤습니다\n\n이번에는 특별하게 포항의 각종 액젓, 육젓이 들어갔는데\n그래서 그런지 작년보다 훨씬 맛있는 거 같아요\n\n또 수육이 아닌 항아리에 숯불을 피워\n훈제한 고기까지 곁들여 먹으니\n너무 맛있어서 힘들었던 게 싹 잊혀지네요😊\n\n이메일 : gmdtka78@naver.com\n인스타 : https://www.instagram.com/heungsam_family/",
        channelId: "UCOVgnOcjlut-LusGwqXD2HA",
        channelTitle: "흥삶이네 Heungsam's Life",
        thumbnail: {
          url: "https://i.ytimg.com/vi/mKOVidr5ljI/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-12-03T09:00:53Z",
        publishedAtDisplayText: "21시간 전",
        viewCount: 165825,
        viewCountDisplayText: "16만",
      },
      {
        videoId: "nQYWBVh3UZ0",
        title: "참가자 모집 | 흑백요리사: 요리 계급 전쟁 시즌2 | 넷플릭스",
        description:
          "다시 시작되는 극한의 요리 계급 전쟁. 참가 자격은 단 하나, 오직 맛으로만 승부할 최고의 요리사를 찾습니다.\n\n지금 넷플릭스 인스타그램 프로필 링크를 통해 《흑백요리사: 요리 계급 전쟁》 시즌2 참가자 모집에 지원하세요.\n\n#흑백요리사_요리계급전쟁 #넷플릭스\n\n넷플릭스 채널 구독: https://vo.la/j7zAG\nhttps://www.youtube.com/@NetflixKorea",
        channelId: "UCiEEF51uRAeZeCo8CJFhGWw",
        channelTitle: "Netflix Korea 넷플릭스 코리아",
        thumbnail: {
          url: "https://i.ytimg.com/vi/nQYWBVh3UZ0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-12-03T00:00:00Z",
        publishedAtDisplayText: "1일 전",
        viewCount: 434021,
        viewCountDisplayText: "43만",
      },
    ],
    nextPageToken: "CAoQAA",
    totalResults: 200,
  },
};
