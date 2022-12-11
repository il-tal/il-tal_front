// export default GuestScreen;

import { UserBox, UserInfo, UserIntro, UserWarp } from "../mainStyle";
import UserSummary from "./UserSummary";
import main from "../../../asset/main.png";
import * as custom from "../../../styles/themeStyle";

const GuestScreen = (props) => {
  return (
    <UserBox bgimg={`${main}`}>
      <UserWarp justify={`left`} mtop={`5rem`}>
        <UserIntro bold={"bold"} font={`40px`} color={`#ffffff`}>
          일상의 방탈출
          <br />
        </UserIntro>
        <UserIntro bold={"normal"} font={`40px`} color={`#ffffff`}>
          , 도전해보세요!
        </UserIntro>
      </UserWarp>
      <UserInfo margin={`100px auto`}>
        <UserSummary blur={1} />
        <custom.CTBox
          margin={`0 auto`}
          weight={`500`}
          display={`flex`}
          size={`24px`}
          justify={`center`}
          place={`center`}
          position={`absolute`}
          lineHeight={`43.57px`}
        >
          로그인 후 업적을 확인하세요!
        </custom.CTBox>
      </UserInfo>
    </UserBox>
  );
};

export default GuestScreen;
