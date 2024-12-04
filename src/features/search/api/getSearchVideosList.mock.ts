import { HttpHandler, HttpResponse, http } from "msw";
import { getSearchVideosListURL } from "./getSearchVideosList";

export const getMockSearchVideosList: HttpHandler = http.get(
  getSearchVideosListURL,
  () => {
    return HttpResponse.json(GET_MOCK_SEARCH_VIDEOS_LIST.success);
  }
);

const GET_MOCK_SEARCH_VIDEOS_LIST = {
  success: {
    lists: [
      {
        videoId: "LPWX8nyn2OE",
        title:
          "미국 북동부 &#39;1m&#39; 폭설과 강추위...뉴욕 등 비상사태 선포 / YTN",
        description:
          "[앵커] 미국 최대 명절인 추수감사절 연휴 북동부 지역 일대에 강추위 속에 폭설이 쏟아지면서 도로와 항공 교통에 비상이 걸렸습니다.",
        channelId: "UChlgI3UHCOnwUGzWzbJ3H5w",
        channelTitle: " YTN",
        thumbnail: {
          url: "https://i.ytimg.com/vi/LPWX8nyn2OE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-12-01T01:16:51Z",
        publishedAtDisplayText: "3일 전",
      },
      {
        videoId: "4p8MxmNI2xY",
        title: "뉴욕에서 데이트를 하면 얼마나 쓸까?💸",
        description: "",
        channelId: "UC9k1vn9ErCoe7JngU6SubVw",
        channelTitle: "mina in york 미나",
        thumbnail: {
          url: "https://i.ytimg.com/vi/4p8MxmNI2xY/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-08-08T11:00:04Z",
        publishedAtDisplayText: "1년 전",
      },
      {
        videoId: "geLmaNf-mew",
        title: "뉴욕 미녀의 하루 일상",
        description: "",
        channelId: "UC9UQS0AreIqRuHR9ZHlkGDA",
        channelTitle: "명순조",
        thumbnail: {
          url: "https://i.ytimg.com/vi/geLmaNf-mew/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-08-31T01:30:18Z",
        publishedAtDisplayText: "3개월 전",
      },
      {
        videoId: "thbAcSLJOCU",
        title:
          "🗽By 뉴욕 백번가본엄마•뉴욕 여긴 가지 마세요!!(feat. 인기 베이커리 3곳 솔직비교/인생 돈까스/뉴욕여행 기념품 여기/휘트니 뮤지엄)🌲New York VLOG",
        description:
          "안녕하세요, 진심으로 리뷰하고 힙하고 귀여운곳만 잘 찾아내는 엔제이맘 입니다! *고화질-고급-2160p (4K)선택해서 선명하게 감상 ...",
        channelId: "UCD4Kh01OGxBMx3JixdrKCNw",
        channelTitle: "엔제이맘 NJmom",
        thumbnail: {
          url: "https://i.ytimg.com/vi/thbAcSLJOCU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-11-30T01:07:00Z",
        publishedAtDisplayText: "4일 전",
      },
      {
        videoId: "vk6014HuxcE",
        title: "JAY-Z - Empire State Of Mind ft. Alicia Keys",
        description:
          'Official music video for "Empire State Of Mind" performed by JAY-Z featuring Alicia Keys. Listen to JAY-Z: https://JAY-Z.LNK.',
        channelId: "UC_Bf08Y-3m6CMAvTms3EkKg",
        channelTitle: "JayZVEVO",
        thumbnail: {
          url: "https://i.ytimg.com/vi/vk6014HuxcE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2021-12-04T05:00:17Z",
        publishedAtDisplayText: "3년 전",
      },
      {
        videoId: "Xp67dGeEOLo",
        title:
          "[PLAYLIST] 이어폰을 끼는 순간 여긴 뉴욕 시티 ᖰʘ̅͜ʘ̅ᖳ : 뉴욕 감성 팝송 모음",
        description:
          "활기찬 뉴욕 팝송부터 뉴욕 감성 팝송까지 ! 모두 이 플리를 듣기 전에 뉴욕에 갈 마음의 준비를,,,",
        channelId: "UC3fPdi-N7Qx7Ytfw2XwRnaw",
        channelTitle: "ssing송",
        thumbnail: {
          url: "https://i.ytimg.com/vi/Xp67dGeEOLo/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2021-08-07T14:56:43Z",
        publishedAtDisplayText: "3년 전",
      },
      {
        videoId: "jIaX58wm7M8",
        title: "좋다가도 무서운 뉴욕 대기업의 현실 #뉴욕",
        description: "",
        channelId: "UC9k1vn9ErCoe7JngU6SubVw",
        channelTitle: "mina in york 미나",
        thumbnail: {
          url: "https://i.ytimg.com/vi/jIaX58wm7M8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-11-30T12:43:11Z",
        publishedAtDisplayText: "1년 전",
      },
      {
        videoId: "le1QF3uoQNg",
        title: "Theme From New York, New York (2008 Remastered)",
        description:
          "Provided to YouTube by Universal Music Group Theme From New York, New York (2008 Remastered) · Frank Sinatra Nothing But ...",
        channelId: "UC1zsfp3OD8qWQ0HfLbz2TXg",
        channelTitle: "Frank Sinatra - Topic",
        thumbnail: {
          url: "https://i.ytimg.com/vi/le1QF3uoQNg/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2018-12-12T11:31:53Z",
        publishedAtDisplayText: "5년 전",
      },
      {
        videoId: "bLpYXA46TTk",
        title:
          "뉴욕에 1.5m 두께 눈 &#39;비상사태&#39;…폭설 부른 &#39;호수효과&#39;란｜지금 이 장면",
        description:
          "현지시간으로 지난달 30일부터 뉴욕, 펜실베이니아 등 미국 동북부에 폭설이 내렸습니다. 올해의 첫눈이나 다름없는데, 심한 곳은 2ｍ ...",
        channelId: "UCsU-I-vHLiaMfV_ceaYz5rQ",
        channelTitle: "JTBC News",
        thumbnail: {
          url: "https://i.ytimg.com/vi/bLpYXA46TTk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-12-02T02:09:11Z",
        publishedAtDisplayText: "2일 전",
      },
      {
        videoId: "tcqRkMCe6n8",
        title: "뉴욕 최악의 여행지 vs 인생여행지",
        description: "뉴욕 #브이로그.",
        channelId: "UCGFd35As_Z4u3SnNAGkcFvw",
        channelTitle: "내하루",
        thumbnail: {
          url: "https://i.ytimg.com/vi/tcqRkMCe6n8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-09-25T08:55:48Z",
        publishedAtDisplayText: "2개월 전",
      },
      {
        videoId: "42DjMn00ymU",
        title:
          "NYC Uncut Raw Footage of 8th Avenue NYC&#39;s Roughest Avenue &quot;Strip of Despair&quot; Unfiltered NYC",
        description:
          'Unfiltered Raw Footage of NYC 8th Avenue "Strip of Despair" : Roughest Part of New York City Uncut Filmed August 16, 2024 ...',
        channelId: "UCFN_dQuFU6tXwVLXppqOwpA",
        channelTitle: "The NYC Walking Show",
        thumbnail: {
          url: "https://i.ytimg.com/vi/42DjMn00ymU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-08-17T14:30:36Z",
        publishedAtDisplayText: "3개월 전",
      },
      {
        videoId: "hgGlDovNMog",
        title: "Englishman In New York",
        description:
          "Provided to YouTube by Universal Music Group Englishman In New York · Sting ... Nothing Like The Sun ℗ An A&M Records ...",
        channelId: "UCHhKCdsmx9t-PSqlSfa-VKA",
        channelTitle: "Sting - Topic",
        thumbnail: {
          url: "https://i.ytimg.com/vi/hgGlDovNMog/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2018-07-31T14:18:37Z",
        publishedAtDisplayText: "6년 전",
      },
      {
        videoId: "R0pvGREm2Js",
        title:
          "미국 하면 가장 먼저 떠오르는 도시, 뉴욕🗽 수도도 아닌 &#39;뉴욕&#39;의 존재감은 어디서 오는 걸까? | 알쓸별잡",
        description:
          "티빙에서 스트리밍 : https://tving.onelink.me/xHqC/30a78d6f #tvN #알쓸별잡 #끌올 tvN 레전드 예능 끌어~ 올려↗↗ #티빙에서 ...",
        channelId: "UC78PMQprrZTbU0IlMDsYZPw",
        channelTitle: "tvN",
        thumbnail: {
          url: "https://i.ytimg.com/vi/R0pvGREm2Js/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-09-27T06:00:37Z",
        publishedAtDisplayText: "2개월 전",
      },
      {
        videoId: "wWNRLWF9cO8",
        title:
          "뉴욕 맨해튼서 &#39;묻지마 칼부림&#39;…피해자 3명 모두 사망 / JTBC 아침&amp;",
        description:
          "얼마전 중국에 이어, 이번에는 미국 뉴욕 맨해튼 한복판에서 묻지마 칼부림 사건이 벌어졌습니다. 범인은 대낮에 거리를 활보하며 범행 ...",
        channelId: "UCsU-I-vHLiaMfV_ceaYz5rQ",
        channelTitle: "JTBC News",
        thumbnail: {
          url: "https://i.ytimg.com/vi/wWNRLWF9cO8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-11-19T23:15:15Z",
        publishedAtDisplayText: "2주 전",
      },
      {
        videoId: "JK7Rv3YAlgA",
        title:
          "별점 2.7점 짜리 미국 우체국, 부잣집 할로윈 장식 구경! 돌아온 뉴욕 일상🇺🇸",
        description:
          "이 영상은 힐링버드의 유료광고를 포함하고 있습니다   할인 이벤트 : 지금 힐링버드 리바이브 단백질 샴푸가내일 (11/7)까지 올영 ...",
        channelId: "UCCCjbf-1ESumTxBlflQSQIQ",
        channelTitle: "썸머썸머",
        thumbnail: {
          url: "https://i.ytimg.com/vi/JK7Rv3YAlgA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-11-06T02:43:35Z",
        publishedAtDisplayText: "0개월 전",
      },
      {
        videoId: "_3IU4Ekql1s",
        title:
          "뉴욕여행 브이로그 🗽🇺🇸 단연코 내 인생 최고의 순간 .. 안가면 후회할 뉴욕 스팟들 ✶ NYC vlog",
        description:
          "단연코 내 인생 최고의 순간. • Instagram http://www.instagram.com/nuuyoil • Blog https://m.blog.naver.com/jyw0604 • Email ...",
        channelId: "UCAu2_2BFYdeIMUw_I5aykgg",
        channelTitle: "연우의요일nuuyoil",
        thumbnail: {
          url: "https://i.ytimg.com/vi/_3IU4Ekql1s/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-02-12T12:28:57Z",
        publishedAtDisplayText: "1년 전",
      },
      {
        videoId: "yzRwunmMLQs",
        title: "뤼얼 매니절가 말아주는 가비의 뉴욕 정복기 🗽",
        description:
          "Special thanks to JAESSBEE & ARI #가비 #gabee #newyork #vlog.",
        channelId: "UCoC-ZGuPCvJJrbcz9eMW8zw",
        channelTitle: "가비 걸 GABEE GIRL",
        thumbnail: {
          url: "https://i.ytimg.com/vi/yzRwunmMLQs/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-10-02T13:40:30Z",
        publishedAtDisplayText: "2개월 전",
      },
      {
        videoId: "AwQUAbJnMuA",
        title:
          "보는 내내 입이 떡 벌어집니다..😲 억대 매매가를 초월하는 뉴욕 집들이✨｜톡파원 25시｜JTBC 240923 방송",
        description:
          "뉴요커들은 어떤 집에 살고 있을까? 실제 뉴욕 집들이를 다녀왔습니다 #톡파원25시 #뉴욕 #집들이 [JTBC라이프] 구독하기 ...",
        channelId: "UCe-gh0jfKlR_EvsNyzYphww",
        channelTitle: "JTBC Life",
        thumbnail: {
          url: "https://i.ytimg.com/vi/AwQUAbJnMuA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-09-24T10:00:13Z",
        publishedAtDisplayText: "2개월 전",
      },
      {
        videoId: "RfjPHmgBPF0",
        title: "Welcome To New York",
        description:
          "Provided to YouTube by Universal Music Group Welcome To New York · Taylor Swift 1989 ℗ 2014 Big Machine Records, LLC.",
        channelId: "UCPC0L1d253x-KuMNwa05TpA",
        channelTitle: "Taylor Swift - Topic",
        thumbnail: {
          url: "https://i.ytimg.com/vi/RfjPHmgBPF0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2018-11-21T08:34:37Z",
        publishedAtDisplayText: "6년 전",
      },
      {
        videoId: "TK0Vdb1RUCk",
        title:
          "Frank Sinatra - New York, New York (Live At Budokan Hall, Tokyo, 1985)",
        description:
          "Frank Sinatra performing “New York, New York,” recorded live in 1985 at Budokan Hall, Tokyo. Listen to Frank Sinatra's greatest ...",
        channelId: "UCFtYl2ZO48htyN2C8w7PC9g",
        channelTitle: "FrankSinatraVEVO",
        thumbnail: {
          url: "https://i.ytimg.com/vi/TK0Vdb1RUCk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2018-04-27T11:00:07Z",
        publishedAtDisplayText: "6년 전",
      },
    ],
    nextPageToken: "CBQQAA",
    totalResults: 1000000,
  },
};
