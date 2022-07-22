import React from "react";
import {
  AchievementsContainer,
  AchievementsHeading,
  AchievementsSubHeading,
  AchievementsCards,
  AchievementButton,
  PartnershipCard,
  AwardCard,
  AnnivessaryCard,
  CardHeading,
  CardDetails,
} from "./AchievementsStyled";

const Achievements = () => {
  return (
    <AchievementsContainer>
      <AchievementsHeading>5 Years of Excellence</AchievementsHeading>
      <AchievementsSubHeading>
        An industry trailblazer since 2014, our broker has many achievements and
        accolades to show for itself.
      </AchievementsSubHeading>

      <AchievementsCards>
        <PartnershipCard>
          <CardHeading>Partnership</CardHeading>
          <CardDetails>
            One of the world's top Developers Samuel Jarvis (Nigeria) is now our
            Partner.
          </CardDetails>
        </PartnershipCard>
        <AwardCard>
          <CardHeading>Award</CardHeading>
          <CardDetails>
            "Best Trading Plaform" The Forex Awards 2019
          </CardDetails>
        </AwardCard>
        <AnnivessaryCard>
          <CardHeading>Anniversary</CardHeading>
          <CardDetails>
            This year we are 5 Years old and have organized a torunament with
            many awards and a record prize pool of $1,000,000.
          </CardDetails>
        </AnnivessaryCard>
      </AchievementsCards>
      <AchievementButton>Start Trading - It's Freee</AchievementButton>
    </AchievementsContainer>
  );
};

export default Achievements;
