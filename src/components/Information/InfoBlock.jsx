import { useContext } from 'react';
import { DOMcontext } from '../../store/context/DOMContext';

import {
  AllBlock,
  JobAndEducationBlock,
  ContactAndBasicInfoBlock,
  FamilyAndRelationShipBlock,
  LivingPlacesBlock,
  // DetailsAboutYouBlock,
  // LifeEventsBlock
} from './MainBlocks';
import { BlockContainer } from './components/InfoBlockStyled';

function InfoBlock() {
  const { block } = useContext(DOMcontext);

  const infoBlocks = {
    all: <AllBlock />,
    jobAndEducation: <JobAndEducationBlock />,
    livingPlaces: <LivingPlacesBlock />,
    contactAndBasicInformation: <ContactAndBasicInfoBlock />,
    familyAndRelationships: <FamilyAndRelationShipBlock />,
    // detailsAboutYou: <DetailsAboutYouBlock />,
    // lifeEvents: <LifeEventsBlock />,
  };

  return <BlockContainer>{infoBlocks[block]}</BlockContainer>;
}

export default InfoBlock;
