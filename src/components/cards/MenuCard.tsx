import { useAnswersState } from "@yext/answers-headless-react";
import { useContext } from "react";
import { ResponsiveContext } from "../../App";
import { useComposedCssClasses } from "../../hooks/useComposedCssClasses";
import { CardProps } from "../../models/cardComponent";

import MenuItemcard from "../MenuItemCard";

//prettier-ignore
export interface TrainerCardConfig {
  showOrdinal?: boolean
}

//prettier-ignore
export interface TrainerCardProps extends CardProps {
  configuration: TrainerCardConfig
}

//prettier-ignore
export interface SimpleImage {
  url: string,
  width: number,
  height: number
}

//prettier-ignore
export interface Image extends SimpleImage {
  sourceUrl: string,
  thumbnails: SimpleImage[]
}

//prettier-ignore
// interface photoGallery {
//   image?: any
// }

//prettier-ignore
export interface TrainerData {
  id: any | null | undefined;
  answer: string | undefined;
  name?: string,
  description?:any,
  c_inspirationalQuote?: string,
  photoGallery?: any,
}

//prettier-ignore
export interface TrainerCardCssClasses {
  container?: string,
  descriptionContainer?: string,
  name?: string,
  // TODO: why can't I use the tailwind pixels here
  trainerPhoto?: string,
  ctaButton?: string,
  ctaButtonText?: string
}

//prettier-ignore
const builtInCssClasses: TrainerCardCssClasses = {
  container: 'flex flex-col p-4 shadow-sm my-2 align-items-center',
  descriptionContainer: 'w-full text-sm font-heading ',
  name: 'text-xl font-medium font-body font-bold',
  ctaButton: 'flex border rounded-md mt-4 px-4 bg-black justify-center hover:bg-orange-900',
  ctaButtonText: 'font-heading text-black font-bold text-base px-3 py-3 sm:py-0',
};

// TODO: format hours, hours to middle, fake CTAs on the right, hours to show current status and then can be expanded, limit to 3 results for now, margin between map
export function MenuCard(props: TrainerCardProps): JSX.Element {
  const { result } = props;
  const trainer = result.rawData as unknown as TrainerData;
  const trainerImg = trainer.photoGallery?.image?.url ?? "";
  // const smallestThumbnail = trainer.logo?.image?.thumbnails[trainer.logo?.image?.thumbnails.length - 1].url
  console.log("trainer", trainer);
  const screenSize = useContext(ResponsiveContext);

  const cssClasses = useComposedCssClasses(builtInCssClasses);

  function renderName(name?: string) {
    return <div className={cssClasses.name}>{name}</div>;
  }

  function renderQuote(quote?: string) {
    return <div className={cssClasses.descriptionContainer}>{quote}</div>;
  }

  const isVertical = useAnswersState((s) => s.meta.searchType) === "vertical";
  const imge = trainer?.photoGallery?.map((img: any) => {
    return (
      <>
        <img src={img?.image?.url} />
      </>
    );
  });

  return (
    <>
      <div className="flex flex-wrap gap-y-2">
        <MenuItemcard
          name={trainer.name}
          description={trainer?.description}
          image={imge}
          price={""}
        />
      </div>
    </>

    // <Accordion allowZeroExpanded>
    //   <AccordionItem key={trainer.id}>
    //     <AccordionItemHeading>
    //       <AccordionItemButton>
    //         <div className="text-red-600">{renderName(trainer.name)}</div>
    //       </AccordionItemButton>
    //     </AccordionItemHeading>
    //     <AccordionItemPanel>
    //       <div>
    //         {renderName(trainer.answer)}
    //         <div className={cssClasses.ctaButtonText}>Read more</div>
    //       </div>
    //     </AccordionItemPanel>
    //   </AccordionItem>
    // </Accordion>
  );
}
