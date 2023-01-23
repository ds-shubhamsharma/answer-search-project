import * as React from "react";
import AlternativeVerticals from "../components/AlternativeVerticals";
import { MenuCard } from "../components/cards/MenuCard";
import VerticalResults from "../components/VerticalResults";
import usePageSetupEffect from "../hooks/usePageSetupEffect";

const MenuItem = ({ verticalKey }: { verticalKey: string }) => {
  usePageSetupEffect(verticalKey);
  const [menuItem, setMenuItem] = React.useState<any>([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://liveapi-sandbox.yext.com/v2/accounts/me/entities?api_key=a0db4a91072ddad5224c6c293d85aed7&v=20230110&entityTypes=location"
    );
    const result = await response.json();
    return setMenuItem(result);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <AlternativeVerticals
        currentVerticalLabel="FAQs"
        verticalsConfig={[
          { label: "Locations", verticalKey: "locations" },
          { label: "Faqs", verticalKey: "faqs" },
          { label: "menu-item", verticalKey: "menuItem" },
        ]}
      />
      <VerticalResults CardComponent={MenuCard} />
    </div>
  );
};

export default MenuItem;
