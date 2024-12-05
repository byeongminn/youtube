import { HttpHandler, HttpResponse, http } from "msw";
import { getVideosDetailURL } from "./getVideosDetail";

export const getMockVideosDetail: HttpHandler = http.get(
  getVideosDetailURL,
  () => {
    return HttpResponse.json(GET_MOCK_VIDEOS_DETAIL.success);
  }
);

export const GET_MOCK_VIDEOS_DETAIL = {
  success: {
    detail: {
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
      publishedAtDisplayText: "4일 전",
      viewCount: 5170238,
      viewCountDisplayText: "517만",
      likeCount: 75233,
      likeCountDisplayText: "7만",
      dislikeCount: 0,
      dislikeCountDisplayText: "0",
      channelInfo: {
        title: "뜬뜬 DdeunDdeun",
        description:
          "좋은 사람, 좋은 이야기, 좋은 웃음, 우리 '뜬뜬'한 사이 돼봐요💕 \n\n🤓유선배 복지 콘텐츠🗣토크찌개맛집🥘\n🐓핑계고🐓는 불시에 찾아옵니다! \n----------------------------------------\n바람 따라 떠나는 여행 ☁️풍향고☁️\n11월 24일부터 매주 일요일 오전 9시에 떠나요✈️\n\n🙏🏻 plz 구독☝알림설정🔔 plz 🙏🏻\n\n뭐든지 문의할 땐, ddeunddeun@antenna.co.kr\n인스타 놀러올 땐, @ddeun._.ddeun\n",
        customUrl: "@ddeunddeun",
        thumbnail: {
          url: "https://yt3.ggpht.com/aOgjye3sMIxNl2SW2wAQZpZWUXzZ5Rg0rNITacRQKVfXvF9cnPWb77G3_gH5s2Zyw241BXWYWg=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        viewCount: 521689039,
        viewCountDisplayText: "5억",
        subscriberCount: 2280000,
        subscriberCountDisplayText: "228만",
        hiddenSubscriberCount: false,
      },
    },
  },
};
